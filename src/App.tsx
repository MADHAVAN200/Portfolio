import React, { useState, useEffect, Suspense } from "react";

// Lazy-loaded layouts for viewport code-splitting
const DesktopView = React.lazy(() => import("./components/DesktopView"));
const MobileView = React.lazy(() => import("./components/MobileView"));
const TabletView = React.lazy(() => import("./components/TabletView"));

// High-fidelity aesthetic skeleton loader
const SkeletonLoader = () => (
  <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-sans overflow-hidden relative">
    {/* Subtle pulsing background glows */}
    <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/[0.04] blur-[80px] top-1/4 left-1/4 animate-pulse transform-gpu" />
    <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/[0.04] blur-[80px] bottom-1/4 right-1/4 animate-pulse transform-gpu" />
    
    <div className="relative flex flex-col items-center gap-6">
      {/* Sleek animated pulse spinner */}
      <div className="w-12 h-12 rounded-xl border border-blue-500/20 flex items-center justify-center bg-zinc-900/60 shadow-lg relative">
        <div className="absolute inset-0 rounded-xl border-t-2 border-blue-500 animate-spin" />
        <span className="text-blue-500 font-bold text-xs font-mono">&lt;/&gt;</span>
      </div>
      
      <div className="space-y-2 text-center select-none">
        <h2 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-mono">MADHAVAN NADAR</h2>
        <div className="flex items-center gap-1.5 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">Loading Workspace...</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">((() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
    } catch (e) {
      // ignore security sandboxing limits
    }
    return "light";
  })());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    // Apply theme subclass to document element
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#050505";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#fcfcfc";
    }
  }, [theme]);

  useEffect(() => {
    // Watch scroll position for top anchor button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Suspense fallback={<SkeletonLoader />}>
      {windowWidth < 768 ? (
        <MobileView
          theme={theme}
          toggleTheme={toggleTheme}
          scrollToElement={scrollToElement}
          showScrollTop={showScrollTop}
        />
      ) : windowWidth >= 768 && windowWidth < 1024 ? (
        <TabletView
          theme={theme}
          toggleTheme={toggleTheme}
          scrollToElement={scrollToElement}
          showScrollTop={showScrollTop}
        />
      ) : (
        <DesktopView
          theme={theme}
          toggleTheme={toggleTheme}
          scrollToElement={scrollToElement}
        />
      )}
    </Suspense>
  );
}
