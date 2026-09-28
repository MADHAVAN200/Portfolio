import React, { useState, useEffect, useRef } from "react";
import {
  CornerDownLeft,
} from "lucide-react";

export default function MacBookWindow() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Last login: " + new Date().toDateString() + " on ttys001",
    "Welcome to Madhavan's Interactive Shell.",
    "Type 'help' or tap quick commands below.",
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
          "  neofetch   - System specs & profile",
          "  cat bio    - Professional background",
          "  skills     - Technology stack",
          "  projects   - Portfolio projects",
          "  contact    - Communication channels",
          "  clear      - Clear terminal buffer",
        ];
        break;

      case "neofetch":
        response = [
          `$ ${trimmed}`,
          "  ,x88888x,     madhavan@macbook-pro",
          " ,8888888888,   -------------------",
          " 88888888888'   OS: macOS Ventura 13.5",
          " 88888888888,   Host: MN Portfolio",
          " '888888888o,   Kernel: 22.6.0 Arm64",
          "  '888888888'   Uptime: Continuous",
          "    'x8888x'    Shell: zsh (interactive)",
          "               CGPA: 8.68 Elite",
          "               Focus: GenAI, ML, Web",
        ];
        break;

      case "cat bio":
        response = [
          `$ ${trimmed}`,
          "--- PROFESSIONAL PROFILE ---",
          "Madhavan Nadar - Computer Engineering",
          "expert in AI agents, decentralized",
          "systems & full-stack architecture.",
          "SIES Tech Head & Google DSC Lead.",
          "Location: Mumbai, India",
        ];
        break;

      case "skills":
        response = [
          `$ ${trimmed}`,
          "--- TECHNICAL STACK ---",
          "• ML: PyTorch, TF, HuggingFace, NLP",
          "• Web: TS, Next.js, React, Node, REST",
          "• DB: PostgreSQL, Firebase, Redis, S3",
          "• Infra: GCP, AWS, Docker, Solidity",
        ];
        break;

      case "projects":
        response = [
          `$ ${trimmed}`,
          "--- PROJECT PORTFOLIO ---",
          "• Inventory Optimizer (PyTorch/Next.js)",
          "• AI Career SkillMapper (TS/Gemini)",
          "• Crisis Dashboard (Satellite API)",
          "• Railway Scheduler (EVM/Solidity)",
          "• AI Slide Engine (Express/DB)",
          "",
          "[Success] Projects listed above.",
        ];
        break;

      case "contact":
        response = [
          `$ ${trimmed}`,
          "--- CONTACT ---",
          "• Email: madhavannadar23@gmail.com",
          "• LinkedIn: /in/madhavan-nadar-33a489265",
          "• GitHub: github.com/MADHAVAN200",
          "",
          "[Success] Contact info loaded.",
        ];
        break;

      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;

      case "coffee":
        response = [
          `$ ${trimmed}`,
          "☕ Brewing premium arabica on port 80...",
          "Done! Here's your CS fuel. ☕",
        ];
        break;

      case "sudo rm -rf /":
        response = [
          `$ ${trimmed}`,
          "⚠️ Permission Denied: Madhavan is",
          "protecting his workspace. Nice try! 😉",
        ];
        break;

      default:
        response = [
          `$ ${trimmed}`,
          `zsh: command not found: ${trimmed}`,
          "Type 'help' to list commands.",
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

  const quickCommands = [
    { label: "neofetch", color: "hover:border-blue-500" },
    { label: "cat bio", color: "hover:border-amber-500" },
    { label: "skills", color: "hover:border-indigo-500" },
    { label: "projects", color: "hover:border-emerald-500" },
    { label: "contact", color: "hover:border-violet-500" },
    { label: "clear", color: "hover:border-red-500/50 hover:bg-red-950/20 text-zinc-400" },
  ];

  return (
    <div 
      onClick={focusTerminal}
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-800/85 bg-zinc-950 text-white cursor-text font-mono"
    >
      {/* Sleek Top MacOS Title Bar */}
      <div className="bg-zinc-900/80 px-3 md:px-5 py-2.5 flex items-center justify-between border-b border-zinc-800 font-mono select-none">
        <div className="flex items-center gap-2">
          {/* macOS window circles */}
          <div className="flex gap-1.5 mr-1.5">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500/80 hover:bg-blue-400 transition-colors cursor-pointer" />
          </div>
          <span className="text-zinc-400 font-bold tracking-tight text-[9px] md:text-[10px]">terminal - portfolio_session.sh</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] md:text-[10px] text-zinc-500 font-mono tracking-wide uppercase font-bold">ONLINE</span>
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="px-3 md:px-5 pt-3 md:pt-5 pb-3 text-left bg-zinc-950 flex flex-col h-[270px] md:h-[360px] justify-between">
        {/* Output Logs Scroll Area */}
        <div 
          ref={viewportRef}
          className="flex-1 overflow-y-auto overflow-x-hidden pr-1 space-y-1 md:space-y-1.5"
        >
          {terminalHistory.map((line, idx) => (
            <div
              key={idx}
              className={`break-words leading-relaxed text-[9px] md:text-[11px] ${
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
            <div className="flex items-center gap-1 text-zinc-300 font-semibold text-[9px] md:text-[11px]">
              <span className="text-emerald-500 font-bold">madhavan@mac</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400 font-bold">~</span>
              <span className="text-zinc-400 font-bold">$</span>
              <span className="text-white ml-0.5">{simulatedProgress}</span>
              <span className="w-1.5 h-3 md:w-2 md:h-4 bg-blue-500 animate-[pulse_0.8s_infinite]" />
            </div>
          )}
        </div>

        {/* Bottom Interactive Block: Preset Helpers & Raw Shell Prompt */}
        <div className="border-t border-zinc-800/80 pt-2 mt-2 select-none">
          {/* Quick Command Buttons - 3-column grid on mobile, flex-wrap on desktop */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-1 mb-2">
            {quickCommands.map((cmd) => (
              <button
                key={cmd.label}
                type="button"
                onClick={(e) => { e.stopPropagation(); handleCommand(cmd.label); }}
                className={`px-1.5 md:px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[8.5px] md:text-[10.5px] text-zinc-300 cursor-pointer transition-colors text-center truncate ${cmd.color}`}
              >
                {cmd.label}
              </button>
            ))}
          </div>

          {/* Interactive Shell Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(terminalInput);
            }}
            className="flex items-center gap-1 md:gap-1.5 focus-within:text-white"
          >
            <span className="text-emerald-500 font-bold select-none text-[10px] md:text-sm">&rarr;</span>
            <span className="text-blue-400 font-semibold select-none font-mono text-[9px] md:text-[11px]">~</span>
            <span className="text-zinc-500 select-none font-bold text-[9px] md:text-[11px]">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={terminalInput}
              disabled={isTypingSimulated}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder={isTypingSimulated ? "Booting..." : "Type a command..."}
              className="flex-grow bg-transparent border-none outline-none text-white font-mono text-[9px] md:text-[11px] placeholder-zinc-700 focus:ring-0 active:ring-0 p-0 ml-0.5 select-text"
              aria-label="Active Terminal Input Buffer"
            />
            {/* Enter/return visual icon */}
            <div className="text-zinc-500 px-0.5 py-0.5 rounded flex items-center justify-center opacity-40">
              <CornerDownLeft className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Bottom Reflective Highlight border */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
    </div>
  );
}
