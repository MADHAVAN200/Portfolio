import { internships } from "../data/resumeData";

function InternshipsPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Professional Experience</h2>
        {internships.map((item) => (
          <article className="gh-item" key={`${item.company}-${item.role}`}>
            <div className="gh-item-head">
              <h3>{item.role}</h3>
              <span>{item.duration}</span>
            </div>
            <p className="gh-muted">{item.company} | {item.domain}</p>
            <p>{item.summary}</p>
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
        ))}
      </section>

      <section className="gh-card">
        <h2>Experience Impact</h2>
        <div className="gh-metrics-grid">
          <article className="gh-metric-card">
            <p className="gh-metric-value">3</p>
            <p className="gh-muted">Active Internships</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">LLM + Cloud</p>
            <p className="gh-muted">Primary Delivery Stack</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">Production-Ready</p>
            <p className="gh-muted">Focus on Scalability & Security</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default InternshipsPage;
