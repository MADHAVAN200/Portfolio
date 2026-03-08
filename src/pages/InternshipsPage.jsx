import { internships } from "../data/resumeData";

function InternshipsPage() {
  const uniqueSkills = new Set(internships.flatMap((item) => item.skills));
  const uniqueHandledAreas = new Set(internships.flatMap((item) => item.handledAreas));
  const totalResponsibilities = internships.reduce((sum, item) => sum + item.responsibilities.length, 0);

  return (
    <div className="gh-stack">
      <h2 className="gh-page-title">Internships</h2>

      {internships.map((item) => (
        <section className="gh-card" key={`${item.company}-${item.role}`}>
          <article>
            <div className="gh-item-head">
              <h3>{item.role}</h3>
            </div>
            <p className="gh-muted">{item.company} | {item.domain}</p>
            <p>{item.summary}</p>

            <h4 className="gh-subtitle">Handled In Internship</h4>
            <div className="gh-tags">
              {item.handledAreas.map((area) => (
                <span className="gh-tag" key={area}>{area}</span>
              ))}
            </div>

            <h4 className="gh-subtitle">Skills Applied</h4>
            <div className="gh-tags">
              {item.skills.map((skill) => (
                <span className="gh-tag" key={skill}>{skill}</span>
              ))}
            </div>

            <h4 className="gh-subtitle">Key Contributions</h4>
            <ul>
              {item.responsibilities.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </section>
      ))}

      <section className="gh-card">
        <h3>Experience Impact</h3>
        <div className="gh-metrics-grid">
          <article className="gh-metric-card">
            <p className="gh-metric-value">3</p>
            <p className="gh-muted">Internships Completed/Ongoing</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">{uniqueSkills.size}+</p>
            <p className="gh-muted">Skills Applied Across Roles</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">{uniqueHandledAreas.size}</p>
            <p className="gh-muted">Delivery Areas (AI, Automation, Frontend, Backend)</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">{totalResponsibilities}</p>
            <p className="gh-muted">Key Responsibilities Delivered</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default InternshipsPage;
