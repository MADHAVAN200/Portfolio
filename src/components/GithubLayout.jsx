import { NavLink } from "react-router-dom";
import { internships, personalDetails, profile, projects } from "../data/resumeData";

const tabs = [
  { to: "/overview", label: "Overview" },
  { to: "/education", label: "Education" },
  { to: "/internships", label: "Internships" },
  { to: "/projects", label: "Projects" },
  { to: "/responsibilities", label: "Responsibilities" },
  { to: "/personal-details", label: "Personal" },
];

function GithubLayout({ children, onToggleTheme, theme }) {
  const skillSet = [...new Set([...internships.flatMap((item) => item.skills), ...projects.flatMap((item) => item.skills)])].slice(0, 8);

  return (
    <div className="gh-root">
      <header className="gh-topbar">
        <div className="gh-brand">Madhavan Nadar · AI Engineer Portfolio</div>
        <button className="gh-button" onClick={onToggleTheme} type="button">
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
      </header>

      <div className="gh-page">
        <aside className="gh-sidebar">
          <div className="gh-avatar">MN</div>
          <h1>{profile.name}</h1>
          <p className="gh-muted">{profile.headline}</p>
          <p className="gh-muted">{profile.location}</p>
          <p>{profile.bio}</p>
          <a className="gh-button gh-full" href={`mailto:${personalDetails.emails[0]}`}>
            Contact
          </a>
          <p className="gh-follow">{profile.followers} followers · {profile.following} following</p>
          <h3 className="gh-subtitle">Core Stack</h3>
          <div className="gh-tags">
            {skillSet.map((skill) => (
              <span className="gh-tag" key={skill}>{skill}</span>
            ))}
          </div>
        </aside>

        <section className="gh-main">
          <nav className="gh-tabs" aria-label="Portfolio sections">
            {tabs.map((tab) => (
              <NavLink
                className={({ isActive }) => `gh-tab${isActive ? " active" : ""}`}
                key={tab.to}
                to={tab.to}
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
          {children}
        </section>
      </div>
    </div>
  );
}

export default GithubLayout;
