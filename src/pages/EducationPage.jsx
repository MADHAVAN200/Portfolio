import { education } from "../data/resumeData";

const learningTracks = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Software Engineering",
  "Cloud and Full-Stack Development",
];

function EducationPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Education Timeline</h2>
        {education.map((item) => (
          <article className="gh-item gh-timeline-item" key={item.institute}>
            <div className="gh-item-head">
              <h3>{item.institute}</h3>
              <span>{item.year}</span>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="gh-card">
        <h2>Academic Focus Areas</h2>
        <div className="gh-tags">
          {learningTracks.map((track) => (
            <span className="gh-tag" key={track}>{track}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EducationPage;
