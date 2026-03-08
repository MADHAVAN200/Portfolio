import { responsibilities } from "../data/resumeData";

const leadershipThemes = [
  "Design leadership",
  "Team mentoring",
  "Event and initiative planning",
  "Brand and communication strategy",
  "Cross-functional collaboration",
  "Operational ownership",
  "Execution under deadlines",
];

const leadershipSnapshot = [
  { label: "Leadership Roles", value: responsibilities.length },
  { label: "Years Active", value: "2024 - 2025" },
  { label: "Core Domains", value: "Design + Operations" },
  { label: "Primary Focus", value: "Student Impact" },
];

const roleSkillMap = {
  Freelancer: [
    "Client Requirement Analysis",
    "Product Design and Delivery",
    "Full-Stack Development",
    "Project Communication",
  ],
  "Google Developers Group": [
    "UI/UX Strategy",
    "Design Systems",
    "Team Collaboration",
    "Brand Communication",
  ],
  "SIES GST Council": [
    "Program Management",
    "Event Planning",
    "Stakeholder Coordination",
    "Leadership Communication",
  ],
};

const roleDescriptionMap = {
  Freelancer:
    "Worked as an independent freelancer delivering AI and software solutions, managing complete delivery cycles from discovery to deployment while coordinating directly with clients.",
  "Google Developers Group":
    "Led UI/UX initiatives for developer-focused programs, established design consistency across assets, and coordinated end-to-end execution with design and development contributors.",
  "SIES GST Council":
    "Managed design and operational planning for council initiatives, aligning communication, events, and student participation with institutional goals and timelines.",
};

const roleOwnershipMap = {
  Freelancer: [
    "Collected and translated client requirements into clear product scopes and milestones.",
    "Designed and implemented solution workflows for web apps, automations, and data-driven features.",
    "Managed delivery timelines, iteration cycles, and client feedback loops.",
    "Provided deployment support, handover documentation, and post-delivery refinements.",
  ],
  "Google Developers Group": [
    "Owned UI/UX direction for chapter initiatives and campaign rollouts.",
    "Planned design workflows, reviews, and delivery milestones for the team.",
    "Maintained visual consistency across social posts, event creatives, and promotional assets.",
    "Collaborated with technical and event teams to ensure smooth execution.",
  ],
  "SIES GST Council": [
    "Led end-to-end design planning for council events and student programs.",
    "Coordinated cross-team execution across design, communication, and event operations.",
    "Managed strategic messaging and campaign visibility for institutional activities.",
    "Supported governance workflows for schedules, approvals, and delivery tracking.",
  ],
};

const roleInitiativesMap = {
  Freelancer: [
    "Built reusable development patterns to accelerate future client deliveries.",
    "Introduced structured communication checkpoints for transparent project tracking.",
    "Improved requirement-to-delivery consistency through phased implementation plans.",
  ],
  "Google Developers Group": [
    "Standardized reusable design patterns for recurring chapter activities.",
    "Introduced clearer design handoff structure to improve execution speed.",
    "Strengthened event branding quality through review-driven creative process.",
  ],
  "SIES GST Council": [
    "Improved campaign planning for council-level events and student outreach.",
    "Aligned communication timelines with event milestones for better visibility.",
    "Created structured coordination flow between student teams and organizers.",
  ],
};

const roleImpactMap = {
  Freelancer: [
    "Delivered practical digital solutions aligned with client business goals.",
    "Improved turnaround and clarity through milestone-based execution.",
    "Strengthened stakeholder trust through consistent communication and reliable delivery.",
  ],
  "Google Developers Group": [
    "Improved consistency and quality of chapter branding outputs.",
    "Enabled faster creative turnarounds for event and community communication.",
    "Enhanced collaboration between design and implementation contributors.",
  ],
  "SIES GST Council": [
    "Improved planning clarity across design and execution teams.",
    "Strengthened student engagement through better event communication.",
    "Increased delivery reliability for council-led initiatives.",
  ],
};

function ResponsibilitiesPage() {
  return (
    <div className="gh-stack">
      <h2 className="gh-page-title">Responsibilities</h2>

      {responsibilities.map((item) => (
        <section className="gh-card" key={item.title}>
          <article>
            <h3>{item.title}</h3>
            <h4 className="gh-subtitle">Description</h4>
            <p>
              {Object.entries(roleDescriptionMap).find(([key]) => item.title.includes(key))?.[1] || item.detail}
            </p>

            <h4 className="gh-subtitle">Role Ownership</h4>
            <ul>
              {(Object.entries(roleOwnershipMap).find(([key]) => item.title.includes(key))?.[1] || [item.detail]).map(
                (point) => (
                  <li key={`${item.title}-ownership-${point}`}>{point}</li>
                )
              )}
            </ul>

            <h4 className="gh-subtitle">Key Initiatives</h4>
            <ul>
              {(Object.entries(roleInitiativesMap).find(([key]) => item.title.includes(key))?.[1] || leadershipThemes
                .slice(0, 3)
                .map((theme) => `Drove ${theme.toLowerCase()} across programs.`)).map((point) => (
                <li key={`${item.title}-initiative-${point}`}>{point}</li>
              ))}
            </ul>

            <h4 className="gh-subtitle">Leadership Impact</h4>
            <ul>
              {(Object.entries(roleImpactMap).find(([key]) => item.title.includes(key))?.[1] || [
                "Delivered reliable outcomes across student and organizational workflows.",
              ]).map((point) => (
                <li key={`${item.title}-impact-${point}`}>{point}</li>
              ))}
            </ul>

            <h4 className="gh-subtitle">Key Skills</h4>
            <div className="gh-tags">
              {(Object.entries(roleSkillMap).find(([key]) => item.title.includes(key))?.[1] || leadershipThemes)
                .slice(0, 4)
                .map((skill) => (
                  <span className="gh-tag" key={`${item.title}-${skill}`}>{skill}</span>
                ))}
            </div>
          </article>
        </section>
      ))}

      <section className="gh-card">
        <h3>Leadership Snapshot</h3>
        <div className="gh-metrics-grid">
          {leadershipSnapshot.map((item) => (
            <article className="gh-metric-card" key={item.label}>
              <p className="gh-metric-value">{item.value}</p>
              <p className="gh-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gh-card">
        <h3>Leadership Themes</h3>
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
