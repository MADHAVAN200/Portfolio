import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Cpu,
  RefreshCw,
  FolderDot,
  Linkedin,
  Github,
  Mail,
  FileCode,
  CornerDownLeft,
  Command,
  Monitor,
  CheckCircle,
} from "lucide-react";

export default function MacBookWindow() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Last login: " + new Date().toDateString() + " on ttys001",
    "Welcome to Madhavan's Interactive Shell.",
    "Type 'help' or run quick commands to explore.",
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isTypingSimulated, setIsTypingSimulated] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState("");
  const viewportRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Commands parser & dynamic actions
  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: string[] = [];

    switch (lower) {
      case "help":
        response = [
          `$ ${trimmed}`,
          "Available Commands:",
          "  • neofetch   - Display system specifications & profile metrics",
          "  • cat bio    - Print professional background & core mission",
          "  • skills     - Print core technology & tools architecture",
          "  • projects   - View portfolio projects & scroll to section",
          "  • contact    - Fetch communication channels & socials",
          "  • clear      - Clear active terminal scroll buffer",
        ];
        break;

      case "neofetch":
        response = [
          `$ ${trimmed}`,
          "                  ,x88888x,        madhavan@macbook-pro",
          "               ,88888888888x,      --------------------",
          "             ,888888888888888k,    OS: macOS Ventura 13.5 (Darwin Kernel)",
          "            8888888888888555'      Host: Madhavan Nadar Portfolio Enterprise",
          "           88888888888888'         Kernel: 22.6.0 Arm64 Architecture",
          "           88888888888888,         Uptime: Fully Continuous Active State",
          "           '88888888888888o,       Shell: zsh (interactive zsh interface)",
          "            '88888888888995o,      Terminal: madhavan_terminal",
          "             '888888888888o,       CGPA Score: 9.61 (Elite distinction scholars)",
          "               'x88888888o'        Current Specialty: Generative AI, ML, Web Core",
          "                  'x88888x'",
        ];
        break;

      case "cat bio":
        response = [
          `$ ${trimmed}`,
          "--- PROFESSIONAL PROFILE & BIO ---",
          "Madhavan Nadar is an agile computer engineering expert and software architect specializing in decentralized systems, AI agents, and robust full-stack infrastructure.",
          "As SIES Tech Head & Google DSC Lead, Madhavan orchestrates production-ready systems that scale seamlessly to solve high-density real-world user flows.",
          "Location: Mumbai, India (Open to global research and product mandates)",
        ];
        break;

      case "skills":
        response = [
          `$ ${trimmed}`,
          "--- TECHNICAL SPECS & CORES ---",
          "• Machine Learning: PyTorch, TensorFlow, Scikit-learn, HuggingFace Transformers, NLP",
          "• Web Systems: TypeScript, Next.js, React, Node.js, Express, Tailwind CSS, REST APIs",
          "• Datastores: GCP Cloud SQL (PostgreSQL), Firebase Firestore, Redis, AWS S3",
          "• Decentralization: EVM Smart Contracts, Solidity, Ether.js, Cryptography",
        ];
        break;

      case "projects":
        response = [
          `$ ${trimmed}`,
          "--- NAVIGATING TO PROJECT PORTFOLIO ---",
          "• Automated Inventory Optimizers (PyTorch / Next.js)",
          "• AI Career SkillMapper Guidance Suite (TS / Gemini)",
          "• Crisis Dashboard and Dispatch (Satellite / Satellite API)",
          "• Smart Railway Traffic Schedulers (EVM/Solidity nodes)",
          "• AI Slide PowerPoint Engine (Express / DB)",
          "",
          "[Success] Projects detailed above; viewport focus maintained.",
        ];
        break;

      case "contact":
        response = [
          `$ ${trimmed}`,
          "--- CONNECTIVITY DATA SENSORS ---",
          "• Email: madhavannadar23@gmail.com",
          "• LinkedIn: linkedin.com/in/madhavan-nadar-33a489265",
          "• GitHub: github.com/MADHAVAN200",
          "",
          "[Success] Contact info detailed; viewport focus maintained.",
        ];
        break;

      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;

      case "coffee":
        response = [
          `$ ${trimmed}`,
          "☕ Brewing premium roasted arabica beans on virtual port 80...",
          "Done! Here is your computer science fuel. Have a great day!",
        ];
        break;

      case "sudo rm -rf /":
        response = [
          `$ ${trimmed}`,
          "⚠️ Permission Denied: Madhavan is protecting his core workspace from cosmic deletion! Nice try. 😉",
        ];
        break;

      default:
        response = [
          `$ ${trimmed}`,
          `zsh: command not found: ${trimmed}. Type 'help' to audit system queries.`,
        ];
        break;
    }

    setTerminalHistory((prev) => [...prev, ...response]);
    setTerminalInput("");

    // Submit terminal transactions to Supabase logging pipeline asynchronously
    fetch("/api/terminal_log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        command: trimmed,
        response_preview: response.join("\n").substring(0, 1000)
      })
    }).catch(err => console.warn("Terminal telemetry log exception:", err));
  };

  // Simulate typewriter boot sequence for high-end aesthetic value
  useEffect(() => {
    let active = true;
    const sequence = async () => {
      setIsTypingSimulated(true);
      await new Promise((r) => setTimeout(r, 600));
      
      const cmdText = "neofetch";
      let text = "";
      for (let i = 0; i < cmdText.length; i++) {
        if (!active) return;
        text += cmdText[i];
        setSimulatedProgress(text);
        await new Promise((r) => setTimeout(r, 80));
      }
      
      await new Promise((r) => setTimeout(r, 200));
      if (!active) return;
      handleCommand("neofetch");
      setSimulatedProgress("");
      setIsTypingSimulated(false);
    };

    sequence();
    return () => {
      active = false;
    };
  }, []);

  // Sync scroll focus inside the terminal viewport container safely without page jumping
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({
        top: viewportRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [terminalHistory, simulatedProgress, isTypingSimulated]);

  // Click-to-focus utility makes typing feel responsive
  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      onClick={focusTerminal}
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-850 dark:border-zinc-800/85 bg-zinc-950/95 text-white cursor-text font-mono"
    >
      {/* Sleek Top MacOS Title Bar - EXACTLY MATCHING THE TELEMETRY TERMINAL IN THE HEATMAP */}
      <div className="bg-zinc-900/80 px-5 py-3 flex items-center justify-between border-b border-zinc-800 text-[11px] font-mono select-none">
        <div className="flex items-center gap-2">
          {/* macOS window circles */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80 hover:bg-blue-400 transition-colors cursor-pointer" />
          </div>
          <span className="text-zinc-400 font-bold tracking-tight">terminal — portfolio_session.sh</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-zinc-500 font-mono tracking-wide uppercase font-bold">ONLINE</span>
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="p-5 text-left bg-zinc-950 flex flex-col h-[340px] md:h-[380px] justify-between">
        {/* Output Logs Scroll Area */}
        <div 
          ref={viewportRef}
          className="flex-1 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar text-[11px] sm:text-xs"
        >
          {terminalHistory.map((line, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                line.startsWith("$")
                  ? "text-blue-400 font-bold"
                  : line.includes("command not found")
                  ? "text-red-400"
                  : line.startsWith("---")
                  ? "text-yellow-400 font-extrabold font-mono"
                  : line.includes("[Success]")
                  ? "text-emerald-400 font-bold"
                  : "text-zinc-300 font-normal"
              }`}
            >
              {line}
            </div>
          ))}

          {/* Typing simulation view */}
          {isTypingSimulated && (
            <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
              <span className="text-emerald-500 font-bold">madhavan@macbook-pro</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400 font-bold">~</span>
              <span className="text-zinc-400 font-bold">$</span>
              <span className="text-white ml-0.5">{simulatedProgress}</span>
              <span className="w-2 h-4 bg-blue-500 animate-[pulse_0.8s_infinite]" />
            </div>
          )}
        </div>

        {/* Bottom Interactive Block: Preset Helpers & Raw Shell Prompt */}
        <div className="border-t border-zinc-900 pt-3.5 mt-3 select-none">
          {/* Quick Query presets bar to keep it highly accessible on mobile/desktop */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="text-[9.5px] text-zinc-500 mr-1 uppercase font-extrabold tracking-wider font-mono">
              Quick commands:
            </span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("neofetch"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[10.5px] text-zinc-300 cursor-pointer hover:border-blue-500 transition-colors"
            >
              neofetch
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("cat bio"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[10.5px] text-zinc-300 cursor-pointer hover:border-amber-500 transition-colors"
            >
              cat bio
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("skills"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[10.5px] text-zinc-300 cursor-pointer hover:border-indigo-500 transition-colors"
            >
              skills
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("projects"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[10.5px] text-zinc-300 cursor-pointer hover:border-emerald-500 transition-colors"
            >
              projects
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("contact"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[10.5px] text-zinc-300 cursor-pointer hover:border-indigo-500 transition-colors"
            >
              contact
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleCommand("clear"); }}
              className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-red-950/20 border border-zinc-800 hover:border-red-500/50 text-[10.5px] text-zinc-400 cursor-pointer transition-colors text-center"
            >
              clear
            </button>
          </div>

          {/* Interactive Shell Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(terminalInput);
            }}
            className="flex items-center gap-1.5 focus-within:text-white"
          >
            <span className="text-emerald-500 font-bold select-none">&rarr;</span>
            <span className="text-blue-400 font-semibold select-none font-mono">~</span>
            <span className="text-zinc-500 select-none font-bold">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={terminalInput}
              disabled={isTypingSimulated}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder={isTypingSimulated ? "Booting shell session..." : "Type command (e.g. 'help') and press enter..."}
              className="flex-grow bg-transparent border-none outline-none text-white font-mono text-[11px] sm:text-xs placeholder-zinc-700 focus:ring-0 active:ring-0 p-0 ml-1 select-text"
              aria-label="Active Terminal Input Buffer"
            />
            {/* Enter/return visual icon */}
            <div className="text-zinc-500 px-1 py-0.5 rounded flex items-center justify-center opacity-40">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Bottom Reflective Highlight border */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
    </div>
  );
}
