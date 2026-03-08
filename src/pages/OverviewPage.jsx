import { Link } from "react-router-dom";
import { education, internships, projects, summary } from "../data/resumeData";

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

const strengths = [
  "Designing AI-first products that solve real business operations problems.",
  "Building dashboards and decision systems that convert data into clear actions.",
  "Creating end-to-end workflows from data collection to operational recommendations.",
  "Combining product thinking, engineering execution, and stakeholder communication.",
];

const featuredImpact = [
  {
    title: "AI Powered Forecasting, Inventory and Optimization System",
    slug: "ai-forecasting-inventory-optimization",
    detail:
      "Designed a perishable inventory intelligence platform focused on freshness scoring, spoilage risk detection, demand forecasting, and dynamic inventory rebalancing across stores.",
  },
  {
    title: "Artificial Intelligence based Crisis Management System (DisasterIQ)",
    slug: "disasteriq-crisis-management",
    detail:
      "Built an integrated crisis intelligence platform that unifies satellite feeds, social signals, and emergency alerts for explainable, faster response coordination.",
  },
  {
    title: "AI-Powered Construction Project Management ERP",
    slug: "project-management-software",
    detail:
      "Developed an enterprise construction ERP with AI reporting and conversational project insights to improve visibility across cost, schedule, quality, and workflow governance.",
  },
  {
    title: "AI-Powered Real-Time Railway Traffic Optimization and Disruption Recovery",
    slug: "railway-traffic-optimization-disruption-recovery",
    detail:
      "Designed a real-time rail decision-support architecture for schedule optimization, conflict handling, disruption recovery simulation, and operator-in-the-loop control.",
  },
];

function OverviewPage() {
  return (
    <div className="gh-stack">
      <h2 className="gh-page-title">Overview</h2>

      <section className="gh-card">
        <h2>Professional Summary</h2>
        <p>{summary.text}</p>
        <p>
          My work is centered on building intelligent platforms that make operations more predictable, measurable, and
          scalable. I focus on converting complex, high-volume business processes into structured digital systems that
          teams can actually use for faster decisions.
        </p>
        <p>
          Across internships and major projects, I have consistently worked at the intersection of AI, product design,
          and applied engineering - building systems for retail optimization, workforce management, crisis intelligence,
          and career guidance.
        </p>
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
        <h2>Education</h2>
        <ul>
          {education.map((item) => (
            <li key={`${item.institute}-${item.year}`}>
              <strong>{item.institute}</strong> ({item.year}) - {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="gh-card">
        <h2>Current Focus</h2>
        <div className="gh-tags">
          {focusAreas.map((item) => (
            <span className="gh-tag" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h2>Core Strengths</h2>
        <ul>
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="gh-card">
        <h2>Recent Project Impact</h2>
        <div className="gh-stack">
          {featuredImpact.map((item) => (
            <article key={item.title}>
              <h3>
                <Link className="gh-link" to={`/projects/${item.slug}`}>
                  {item.title}
                </Link>
              </h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OverviewPage;
