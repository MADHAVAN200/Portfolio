import { Link, useNavigate } from "react-router-dom";
import { achievements, projects } from "../data/resumeData";

function buildSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function ProjectsPage() {
  const navigate = useNavigate();

  const openProjectDetail = (slug) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="gh-stack">
      <h2 className="gh-page-title">Projects</h2>

      <div className="gh-project-list">
        {projects.map((item) => (
          <section className="gh-card" key={item.title}>
            <article
              className="gh-project-row"
              onClick={() => openProjectDetail(item.slug || buildSlug(item.title))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProjectDetail(item.slug || buildSlug(item.title));
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="gh-project-main">
                <div className="gh-item-head">
                  <h3>
                    <Link className="gh-link" to={`/projects/${item.slug || buildSlug(item.title)}`}>
                      {item.title}
                    </Link>
                  </h3>
                  {item.teamSize ? <span>Team: {item.teamSize}</span> : null}
                </div>
                <h4 className="gh-subtitle">Description</h4>
                <p className="gh-project-description">{item.description}</p>
                <h4 className="gh-subtitle">Skills</h4>
                <div className="gh-tags">
                  {item.skills.map((skill) => (
                    <span className="gh-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="gh-project-side">
                <h4 className="gh-subtitle">Highlights</h4>
                <ul>
                  {item.highlights.slice(0, 4).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.link ? (
                  <a
                    className="gh-link gh-project-repo-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Open Repository
                  </a>
                ) : (
                  <p className="gh-muted">Private repository</p>
                )}
              </div>
            </article>
          </section>
        ))}
      </div>

      <section className="gh-card">
        <h3>Recognition</h3>
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProjectsPage;
