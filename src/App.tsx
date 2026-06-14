import React, { useState, useEffect, Suspense } from "react";

// Lazy-loaded layouts for viewport code-splitting
const DesktopView = React.lazy(() => import("./components/DesktopView"));
const MobileView = React.lazy(() => import("./components/MobileView"));
const TabletView = React.lazy(() => import("./components/TabletView"));

// High-fidelity premium skeleton loader strictly using Google Poppins
const SkeletonLoader = () => (
  <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white overflow-hidden relative select-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
    {/* Slow floating premium ambient backlights */}
    <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-blue-600/[0.04] dark:bg-blue-500/[0.04] blur-[60px] md:blur-[120px] top-1/4 left-1/4 animate-[float-orb-1_25s_infinite_ease-in-out] transform-gpu" />
    <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-600/[0.03] dark:bg-indigo-500/[0.03] blur-[60px] md:blur-[120px] bottom-1/4 right-1/4 animate-[float-orb-2_25s_infinite_ease-in-out] transform-gpu" />

    <div className="relative flex flex-col items-center gap-6 md:gap-8 z-10">
      {/* Premium Multi-layered Geometric Spinner - fully responsive */}
      <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
        {/* Outer dotted glowing tracker */}
        <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/20 animate-[spin_12s_linear_infinite] transform-gpu" />
        
        {/* Middle spinning gradient ring (percentage-based inset for auto-scaling) */}
        <div className="absolute inset-[8%] rounded-full border border-transparent border-t-blue-400 border-b-indigo-400 animate-[spin_2s_linear_infinite] transform-gpu" />
        
        {/* Inner reverse-spinning ring */}
        <div className="absolute inset-[18%] rounded-full border border-transparent border-l-blue-500 border-r-indigo-500 animate-[spin_1.5s_linear_infinite_reverse] transform-gpu" />
        
        {/* Central pulsing core glowing dot */}
        <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 shadow-[0_0_15px_#3b82f6] animate-pulse" />
      </div>

      <div className="space-y-2.5 md:space-y-3.5 text-center">
        {/* Premium glowing shimmery name */}
        <h2 className="text-sm md:text-lg font-bold tracking-[0.25em] bg-gradient-to-r from-blue-400 via-indigo-100 to-blue-400 bg-clip-text text-transparent animate-[shimmer_3.5s_infinite_linear]" style={{ backgroundSize: "200% auto" }}>
          MADHAVAN NADAR
        </h2>
        
        {/* Clean, minimalist loading feedback in Poppins */}
        <div className="flex items-center gap-1.5 md:gap-2 justify-center opacity-60">
          <span className="text-[9px] md:text-[10px] tracking-[0.15em] font-medium text-gray-400 uppercase">
            Initializing workspace
          </span>
          {/* Pulsing loading dots */}
          <div className="flex gap-1 items-center h-2">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-400 animate-[bounce_1s_infinite_100ms] transform-gpu" />
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-400 animate-[bounce_1s_infinite_200ms] transform-gpu" />
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-300 animate-[bounce_1s_infinite_300ms] transform-gpu" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Style tag for custom keyframes so it is 100% self-contained and loads instantly */}
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes shimmer {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }
      @keyframes float-orb-1 {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        50% { transform: translate(50px, -40px) scale(1.15); }
      }
      @keyframes float-orb-2 {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        50% { transform: translate(-50px, 40px) scale(0.85); }
      }
    `}} />
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
