import { internships, projects, summary } from "../data/resumeData";

const focusAreas = [
  "LLM application development",
  "Federated learning and model governance",
  "AI product engineering with React and cloud",
  "Data-driven business problem solving",
];

const impactStats = [
  { label: "Internships", value: internships.length },
  { label: "Major Projects", value: projects.length },
  { label: "AI/ML Domains", value: "6+" },
  { label: "Hackathon Wins", value: "3" },
];

function OverviewPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Professional Summary</h2>
        <p>{summary.text}</p>
      </section>

      <section className="gh-card">
        <h2>AI Engineer Snapshot</h2>
        <div className="gh-metrics-grid">
          {impactStats.map((item) => (
            <article className="gh-metric-card" key={item.label}>
              <p className="gh-metric-value">{item.value}</p>
              <p className="gh-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h2>Current Focus</h2>
        <div className="gh-tags">
          {focusAreas.map((item) => (
            <span className="gh-tag" key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OverviewPage;
