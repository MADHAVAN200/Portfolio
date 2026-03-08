import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GithubLayout from "./components/GithubLayout";
import OverviewPage from "./pages/OverviewPage";
import FullResumePage from "./pages/FullResumePage";
import InternshipsPage from "./pages/InternshipsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResponsibilitiesPage from "./pages/ResponsibilitiesPage";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <GithubLayout onToggleTheme={handleToggleTheme} theme={theme}>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Navigate replace to="/overview" />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/resume" element={<FullResumePage />} />
        <Route path="/education" element={<Navigate replace to="/overview" />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="/responsibilities" element={<ResponsibilitiesPage />} />
        <Route path="/personal-details" element={<Navigate replace to="/resume" />} />
      </Routes>
    </GithubLayout>
  );
}

export default App;