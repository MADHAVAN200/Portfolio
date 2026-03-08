import {
  achievements,
  education,
  internships,
  personalDetails,
  profile,
  projects,
  responsibilities,
  summary,
} from "../data/resumeData";

function FullResumePage() {
  return (
    <div className="gh-stack">
      <h2 className="gh-page-title">Full Resume</h2>

      <section className="gh-card">
        <h2>Profile</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Headline:</strong> {profile.headline}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>About:</strong> {profile.bio}</p>
      </section>

      <section className="gh-card">
        <h2>Professional Summary</h2>
        <p>{summary.text}</p>
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
        <h2>Internships</h2>
        <div className="gh-stack">
          {internships.map((item) => (
            <article className="gh-timeline-item" key={`${item.company}-${item.role}`}>
              <h3>{item.role}</h3>
              <p className="gh-muted">{item.company} | {item.domain}</p>
              <p>{item.summary}</p>

              <h4 className="gh-subtitle">Handled Areas</h4>
              <div className="gh-tags">
                {item.handledAreas.map((area) => (
                  <span className="gh-tag" key={`${item.company}-${area}`}>{area}</span>
                ))}
              </div>

              <h4 className="gh-subtitle">Skills Applied</h4>
              <div className="gh-tags">
                {item.skills.map((skill) => (
                  <span className="gh-tag" key={`${item.company}-${skill}`}>{skill}</span>
                ))}
              </div>

              <h4 className="gh-subtitle">Responsibilities</h4>
              <ul>
                {item.responsibilities.map((point) => (
                  <li key={`${item.company}-${point}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h2>Projects</h2>
        <div className="gh-stack">
          {projects.map((project) => (
            <article className="gh-timeline-item" key={project.slug || project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <h4 className="gh-subtitle">Skills and Technologies</h4>
              <div className="gh-tags">
                {project.skills.map((skill) => (
                  <span className="gh-tag" key={`${project.title}-${skill}`}>{skill}</span>
                ))}
              </div>

              {project.objectives ? (
                <>
                  <h4 className="gh-subtitle">Objectives</h4>
                  <ul>
                    {project.objectives.map((item) => (
                      <li key={`${project.title}-obj-${item}`}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {project.highlights ? (
                <>
                  <h4 className="gh-subtitle">Highlights</h4>
                  <ul>
                    {project.highlights.map((item) => (
                      <li key={`${project.title}-highlight-${item}`}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {project.outcomes ? (
                <>
                  <h4 className="gh-subtitle">Outcomes</h4>
                  <ul>
                    {project.outcomes.map((item) => (
                      <li key={`${project.title}-outcome-${item}`}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {project.link ? (
                <a className="gh-link" href={project.link} target="_blank" rel="noreferrer">
                  Open Repository
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h2>Achievements</h2>
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="gh-card">
        <h2>Responsibilities and Leadership</h2>
        <ul>
          {responsibilities.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> - {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="gh-card">
        <h2>Personal Details</h2>
        <p><strong>Date of Birth:</strong> {personalDetails.dateOfBirth}</p>
        <p><strong>Gender:</strong> {personalDetails.gender}</p>
        <p><strong>Marital Status:</strong> {personalDetails.maritalStatus}</p>
        <p><strong>Address:</strong> {personalDetails.address}</p>

        <h4 className="gh-subtitle">Languages</h4>
        <div className="gh-tags">
          {personalDetails.languages.map((language) => (
            <span className="gh-tag" key={language}>{language}</span>
          ))}
        </div>

        <h4 className="gh-subtitle">Phone Numbers</h4>
        <ul>
          {personalDetails.phoneNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>

        <h4 className="gh-subtitle">Emails</h4>
        <ul>
          {personalDetails.emails.map((email) => (
            <li key={email}>{email}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default FullResumePage;
