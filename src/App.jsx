import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import GithubLayout from "./components/GithubLayout";
import OverviewPage from "./pages/OverviewPage";
import EducationPage from "./pages/EducationPage";
import InternshipsPage from "./pages/InternshipsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResponsibilitiesPage from "./pages/ResponsibilitiesPage";
import PersonalDetailsPage from "./pages/PersonalDetailsPage";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <GithubLayout onToggleTheme={handleToggleTheme} theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/overview" />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/responsibilities" element={<ResponsibilitiesPage />} />
        <Route path="/personal-details" element={<PersonalDetailsPage />} />
      </Routes>
    </GithubLayout>
  );
}

export default App;