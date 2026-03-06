import { achievements, projects } from "../data/resumeData";

function ProjectsPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Featured Projects</h2>
        <div className="gh-repo-grid">
          {projects.map((item) => (
            <article className="gh-repo-card" key={item.title}>
              <div className="gh-item-head">
                <h3>{item.title}</h3>
                {item.teamSize ? <span>Team: {item.teamSize}</span> : null}
              </div>
              <p>{item.description}</p>
              <div className="gh-tags">
                {item.skills.map((skill) => (
                  <span className="gh-tag" key={skill}>{skill}</span>
                ))}
              </div>
              <ul>
                {item.highlights.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.link ? (
                <a className="gh-link" href={item.link} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              ) : (
                <p className="gh-muted">Private repository</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h2>Recognition</h2>
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
