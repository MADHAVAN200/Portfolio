import { NavLink } from "react-router-dom";
import { useState } from "react";
import { profile, projects } from "../data/resumeData";

const tabs = [
  { to: "/overview", label: "Overview", icon: "overview" },
  { to: "/resume", label: "Resume", icon: "resume" },
  { to: "/internships", label: "Internships", icon: "internships" },
  { to: "/projects", label: "Projects", icon: "projects" },
  { to: "/responsibilities", label: "Responsibilities", icon: "responsibilities" },
];

function TabIcon({ name }) {
  if (name === "overview") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M2 3h12v10H2z" />
        <path d="M2 6h12" />
      </svg>
    );
  }

  if (name === "education") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M1.5 6.5L8 3l6.5 3.5L8 10z" />
        <path d="M4 8.3V11c2.7 1.6 5.3 1.6 8 0V8.3" />
      </svg>
    );
  }

  if (name === "internships") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M3 5h10v8H3z" />
        <path d="M6 5V3h4v2" />
      </svg>
    );
  }

  if (name === "projects") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M2 2h5v5H2z" />
        <path d="M9 2h5v5H9z" />
        <path d="M2 9h5v5H2z" />
        <path d="M9 9h5v5H9z" />
      </svg>
    );
  }

  if (name === "resume") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M4 2.5h6.2L13 5.3V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1Z" />
        <path d="M10.2 2.5V5.3H13" />
        <path d="M5.5 8h5" />
        <path d="M5.5 10.5h5" />
      </svg>
    );
  }

  if (name === "responsibilities") {
    return (
      <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
        <path d="M3 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3" />
        <circle cx="8" cy="5" r="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="gh-tab-icon-svg" viewBox="0 0 16 16">
      <circle cx="8" cy="5" r="2.2" />
      <path d="M3.5 13a4.5 4.5 0 0 1 9 0" />
    </svg>
  );
}

function GithubLayout({ children, onToggleTheme, theme }) {
  const topRepos = projects.slice(0, 5);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="gh-root">
      <header className="gh-header">
        <div className="gh-header-global">
          <div className="gh-global-left">
            <p className="gh-user">Madhavan Nadar</p>
          </div>

          <div className="gh-global-right">
            <button className="gh-icon-button" type="button" aria-label="Toggle theme" onClick={onToggleTheme}>
              {theme === "dark" ? (
                <svg aria-hidden="true" className="gh-action-icon" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="3" />
                  <path d="M8 1.5v2" />
                  <path d="M8 12.5v2" />
                  <path d="M1.5 8h2" />
                  <path d="M12.5 8h2" />
                  <path d="M3.2 3.2l1.4 1.4" />
                  <path d="M11.4 11.4l1.4 1.4" />
                  <path d="M12.8 3.2l-1.4 1.4" />
                  <path d="M4.6 11.4l-1.4 1.4" />
                </svg>
              ) : (
                <svg aria-hidden="true" className="gh-action-icon" viewBox="0 0 16 16">
                  <path d="M11.8 10.7a5.8 5.8 0 0 1-6.5-6.5A6 6 0 1 0 11.8 10.7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav className="gh-header-tabs" role="navigation" aria-label="Profile sections">
          {tabs.map((tab) => (
            <NavLink
              className={({ isActive }) => `gh-header-tab${isActive ? " active" : ""}`}
              key={tab.to}
              to={tab.to}
            >
              <span className="gh-tab-icon" aria-hidden="true"><TabIcon name={tab.icon} /></span>
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <aside className="gh-sidebar-menu">
        <div className="gh-sidebar-head">
          <div className="gh-logo">GH</div>
          <span>Menu</span>
        </div>
        <nav className="gh-sidebar-links" aria-label="GitHub menu clone">
          <a href="#">Home</a>
          <a href="#">Issues</a>
          <a href="#">Pull requests</a>
          <a href="#">Repositories</a>
          <a href="#">Projects</a>
          <a href="#">Discussions</a>
          <a href="#">Codespaces</a>
          <a href="#">Copilot</a>
        </nav>
        <div className="gh-sidebar-subhead">Top repositories</div>
        <div className="gh-sidebar-repos">
          {topRepos.map((item) => (
            <a href={item.link || "#"} key={item.title} target="_blank" rel="noreferrer">
              MADHAVAN200/{item.title.replace(/\s+/g, "-")}
            </a>
          ))}
        </div>
      </aside>

      <div className="gh-workspace">
        <div className="gh-page">
          <aside className="gh-sidebar">
            <div className="gh-avatar">MN</div>
            <h1>{profile.name}</h1>
            <p className="gh-muted">{profile.headline}</p>
            <p className="gh-muted">{profile.location}</p>
            <p>{profile.bio}</p>
            <button className="gh-button gh-full" type="button" onClick={() => setIsContactOpen((open) => !open)}>
              Contact
            </button>

            {isContactOpen ? (
              <section className="gh-contact-card" aria-label="Contact links">
                <h3>Get In Touch</h3>
                <a
                  className="gh-contact-link"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavannadar23@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="gh-contact-icon">
                    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.09-.67 6.6 5.26a.5.5 0 0 0 .62 0l6.6-5.26a1.25 1.25 0 0 0-.66-.2H5.75c-.24 0-.46.07-.66.2Zm14.41 1.72-6.25 4.98a2 2 0 0 1-2.5 0L4.5 7.8v9.45c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V7.8Z" />
                  </svg>
                  <span>madhavannadar23@gmail.com</span>
                </a>
                <a className="gh-contact-link" href="https://github.com/MADHAVAN200" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="gh-contact-icon">
                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.72c-2.79.61-3.38-1.18-3.38-1.18-.46-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .08 1.54 1.03 1.54 1.03.9 1.54 2.36 1.09 2.93.84.09-.65.35-1.09.63-1.34-2.23-.25-4.58-1.12-4.58-4.98 0-1.1.39-2 1.03-2.7-.11-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.84c.85 0 1.72.11 2.52.33 1.9-1.29 2.74-1.03 2.74-1.03.55 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.88-2.36 4.73-4.6 4.98.36.31.68.91.68 1.84V21c0 .27.18.58.69.49A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>github.com/MADHAVAN200</span>
                </a>
                <a className="gh-contact-link" href="https://www.linkedin.com/in/madhavan-nadar-33a489265/" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="gh-contact-icon">
                    <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.63 19h2.62V9.75H5.63V19Zm4.2-9.25V19h2.51v-4.88c0-1.29.24-2.54 1.83-2.54 1.56 0 1.58 1.46 1.58 2.62V19h2.52v-5.32c0-2.61-.56-4.61-3.61-4.61-1.47 0-2.45.8-2.85 1.57h-.03v-1.39H9.83Z" />
                  </svg>
                  <span>linkedin.com/in/madhavan-nadar-33a489265</span>
                </a>
              </section>
            ) : null}
          </aside>

          <section className="gh-main">
            {children}
          </section>
        </div>
      </div>
    </div>
  );
}

export default GithubLayout;
