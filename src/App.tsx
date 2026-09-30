import React, { useState, useEffect, Suspense } from "react";

// Lazy-loaded main application view
const DesktopView = React.lazy(() => import("./components/DesktopView"));

// High-fidelity premium skeleton loader supporting both White (Light) and Black (Dark) modes
interface SkeletonLoaderProps {
  theme?: "light" | "dark";
}

const SkeletonLoader = ({ theme }: SkeletonLoaderProps) => {
  const isDark = theme
    ? theme === "dark"
    : typeof window !== "undefined"
      ? (localStorage.getItem("portfolio-theme") === "dark" ||
         (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches))
      : false;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center overflow-hidden relative select-none transition-colors duration-300 ${
        isDark ? "bg-[#050505] text-white" : "bg-[#fafafa] text-gray-900"
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Floating ambient backlights */}
      <div
        className={`absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full blur-[60px] md:blur-[120px] top-1/4 left-1/4 animate-[float-orb-1_25s_infinite_ease-in-out] transform-gpu pointer-events-none ${
          isDark ? "bg-blue-600/[0.04]" : "bg-blue-500/[0.07]"
        }`}
      />
      <div
        className={`absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full blur-[60px] md:blur-[120px] bottom-1/4 right-1/4 animate-[float-orb-2_25s_infinite_ease-in-out] transform-gpu pointer-events-none ${
          isDark ? "bg-indigo-600/[0.03]" : "bg-indigo-500/[0.06]"
        }`}
      />

      <div className="relative flex flex-col items-center gap-6 md:gap-8 z-10">
        {/* Premium Multi-layered Geometric Spinner - fully responsive */}
        <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
          {/* Outer dotted glowing tracker */}
          <div
            className={`absolute inset-0 rounded-full border border-dashed custom-spin-slow ${
              isDark ? "border-blue-500/25" : "border-blue-600/30"
            }`}
          />

          {/* Middle spinning gradient ring (percentage-based inset for auto-scaling) */}
          <div
            className={`absolute inset-[8%] rounded-full border border-transparent custom-spin-normal ${
              isDark
                ? "border-t-blue-400 border-b-indigo-400"
                : "border-t-blue-600 border-b-indigo-500"
            }`}
          />

          {/* Inner reverse-spinning ring */}
          <div
            className={`absolute inset-[18%] rounded-full border border-transparent custom-spin-reverse ${
              isDark
                ? "border-l-blue-500 border-r-indigo-500"
                : "border-l-blue-500 border-r-indigo-400"
            }`}
          />

          {/* Central pulsing core glowing dot */}
          <div
            className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 animate-pulse ${
              isDark ? "shadow-[0_0_15px_#3b82f6]" : "shadow-[0_0_15px_rgba(37,99,235,0.55)]"
            }`}
          />
        </div>

        <div className="space-y-2.5 md:space-y-3.5 text-center">
          {/* Premium glowing shimmery title */}
          <h2
            className={`text-sm md:text-lg font-bold tracking-[0.25em] bg-clip-text text-transparent animate-[shimmer_3.5s_infinite_linear] ${
              isDark
                ? "bg-gradient-to-r from-blue-400 via-indigo-100 to-blue-400"
                : "bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-600"
            }`}
            style={{ backgroundSize: "200% auto" }}
          >
            LOADING
          </h2>

          {/* Clean, minimalist loading feedback in Poppins */}
          <div className="flex items-center gap-1.5 md:gap-2 justify-center">
            <span
              className={`text-[9px] md:text-[10px] tracking-[0.18em] font-medium uppercase font-poppins ${
                isDark ? "text-gray-400 opacity-80" : "text-gray-500 font-semibold"
              }`}
            >
              Initializing workspace
            </span>
            {/* Pulsing loading dots */}
            <div className="flex gap-1 items-center h-2">
              <span
                className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-[bounce_1s_infinite_100ms] transform-gpu ${
                  isDark ? "bg-blue-400" : "bg-blue-600"
                }`}
              />
              <span
                className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-[bounce_1s_infinite_200ms] transform-gpu ${
                  isDark ? "bg-indigo-400" : "bg-indigo-600"
                }`}
              />
              <span
                className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-[bounce_1s_infinite_300ms] transform-gpu ${
                  isDark ? "bg-blue-300" : "bg-blue-500"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Style tag for custom keyframes so it is 100% self-contained and loads instantly */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-orb-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(50px, -40px, 0) scale(1.15); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-50px, 40px, 0) scale(0.85); }
        }
        @keyframes spin {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(0, 0, 0) rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: translate3d(0, 0, 0) rotate(360deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        .custom-spin-slow {
          animation: spin 12s linear infinite;
        }
        .custom-spin-normal {
          animation: spin 2s linear infinite;
        }
        .custom-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
};

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

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    const updateDOM = () => {
      const root = window.document.documentElement;
      if (nextTheme === "dark") {
        root.classList.add("dark");
        root.style.backgroundColor = "#050505";
      } else {
        root.classList.remove("dark");
        root.style.backgroundColor = "#fafafa";
      }
      setTheme(nextTheme);
      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch (err) {
        // ignore
      }
    };

    const hasViewTransition =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasViewTransition) {
      updateDOM();
      return;
    }

    try {
      const x = e?.clientX;
      const y = e?.clientY;

      const transition = (document as any).startViewTransition(() => {
        updateDOM();
      });

      if (x !== undefined && y !== undefined && (x !== 0 || y !== 0)) {
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          document.documentElement.animate(
            {
              clipPath: clipPath,
            },
            {
              duration: 340,
              easing: "cubic-bezier(0.2, 0.9, 0.4, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        });
      } else {
        transition.ready.then(() => {
          document.documentElement.animate(
            {
              opacity: [0, 1],
            },
            {
              duration: 200,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        });
      }
    } catch {
      updateDOM();
    }
  };

  useEffect(() => {
    // Synchronize document element on mount
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#050505";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#fafafa";
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
    <Suspense fallback={<SkeletonLoader theme={theme} />}>
      <DesktopView
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToElement={scrollToElement}
        showScrollTop={showScrollTop}
      />
    </Suspense>
  );
}
