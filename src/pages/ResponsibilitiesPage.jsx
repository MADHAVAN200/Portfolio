import { responsibilities } from "../data/resumeData";

const leadershipThemes = [
  "Design leadership",
  "Team mentoring",
  "Event and initiative planning",
  "Brand and communication strategy",
  "Cross-functional collaboration",
];

function ResponsibilitiesPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Positions of Responsibility</h2>
        {responsibilities.map((item) => (
          <article className="gh-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="gh-card">
        <h2>Leadership Themes</h2>
        <div className="gh-tags">
          {leadershipThemes.map((item) => (
            <span className="gh-tag" key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ResponsibilitiesPage;
