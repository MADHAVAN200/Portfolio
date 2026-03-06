import { personalDetails } from "../data/resumeData";

function PersonalDetailsPage() {
  return (
    <div className="gh-stack">
      <section className="gh-card">
        <h2>Contact and Personal Details</h2>
        <article className="gh-item">
          <p><strong>Emails:</strong> {personalDetails.emails.join(" | ")}</p>
          <p><strong>Phone Numbers:</strong> {personalDetails.phoneNumbers.join(" | ")}</p>
          <p><strong>Current Address:</strong> {personalDetails.address}</p>
        </article>
      </section>

      <section className="gh-card">
        <h2>Profile Metadata</h2>
        <div className="gh-metrics-grid">
          <article className="gh-metric-card">
            <p className="gh-metric-value">{personalDetails.gender}</p>
            <p className="gh-muted">Gender</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">{personalDetails.maritalStatus}</p>
            <p className="gh-muted">Marital Status</p>
          </article>
          <article className="gh-metric-card">
            <p className="gh-metric-value">{personalDetails.dateOfBirth}</p>
            <p className="gh-muted">Date of Birth</p>
          </article>
        </div>
        <h4 className="gh-subtitle">Known Languages</h4>
        <div className="gh-tags">
          {personalDetails.languages.map((language) => (
            <span className="gh-tag" key={language}>{language}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PersonalDetailsPage;
