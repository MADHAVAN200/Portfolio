import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/resumeData";

function buildSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function ArchitectureDiagram({ nodes }) {
  const width = Math.max(860, nodes.length * 170);

  return (
    <div className="gh-diagram-wrap">
      <svg aria-label="Project architecture diagram" className="gh-diagram" viewBox={`0 0 ${width} 170`}>
        {nodes.map((node, index) => {
          const x = 20 + index * 160;
          const y = 55;
          const hasNext = index < nodes.length - 1;

          return (
            <g key={`${node}-${index}`}>
              <rect className="gh-diagram-node" x={x} y={y} width="130" height="52" rx="8" />
              <text className="gh-diagram-label" x={x + 65} y={y + 31} textAnchor="middle">
                {node}
              </text>
              {hasNext ? (
                <>
                  <line className="gh-diagram-edge" x1={x + 130} y1={y + 26} x2={x + 152} y2={y + 26} />
                  <polygon className="gh-diagram-arrow" points={`${x + 152},${y + 26} ${x + 145},${y + 22} ${x + 145},${y + 30}`} />
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ParagraphBlock({ text }) {
  const paragraphs = (text || "").split(/\n\n+/).filter(Boolean);
  return (
    <div className="gh-paragraph-stack">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => (item.slug || buildSlug(item.title)) === projectSlug);

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  return (
    <div className="gh-stack">
      <div className="gh-detail-nav-row">
        <nav className="gh-breadcrumbs gh-breadcrumbs-compact" aria-label="Project breadcrumb">
          <span className="gh-crumb-item">
            <Link className="gh-crumb-link" to="/projects">Projects</Link>
          </span>
          <span className="gh-crumb-item">
            <svg className="gh-crumb-separator" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" />
            </svg>
            <span className="gh-crumb-current" aria-current="page">{project.title}</span>
          </span>
        </nav>

        {project.link ? (
          <a className="gh-detail-repo-link" href={project.link} target="_blank" rel="noreferrer">
            Open Repository
          </a>
        ) : null}
      </div>

      <section className="gh-card gh-detail-hero">
        <h2>{project.title}</h2>
        <p className="gh-project-detail-description">{project.description}</p>
        <div className="gh-tags">
          {project.skills.map((skill) => (
            <span className="gh-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {project.projectOverview ? (
        <section className="gh-card">
          <h2>Project Overview</h2>
          <ParagraphBlock text={project.projectOverview} />
        </section>
      ) : null}

      <section className="gh-card">
        <h2>Problem Statement</h2>
        <p>{project.problemStatement || project.description}</p>
      </section>

      {project.solutionOverview ? (
        <section className="gh-card">
          <h2>Solution</h2>
          <ParagraphBlock text={project.solutionOverview} />
        </section>
      ) : null}

      <section className="gh-card">
        <h2>Objectives</h2>
        <ul>
          {(project.objectives || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="gh-card">
        <h2>Architecture Diagram</h2>
        <ArchitectureDiagram nodes={project.architecture || ["Input", "Processing", "Output"]} />
      </section>

      <section className="gh-card">
        <h2>Implementation Workflow</h2>
        <ol className="gh-workflow-list">
          {(project.workflow || []).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="gh-card">
        <h2>Key Highlights</h2>
        <ul>
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      {project.keyFeatures ? (
        <section className="gh-card">
          <h2>Key Features</h2>
          <ul>
            {project.keyFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.systemArchitecture ? (
        <section className="gh-card">
          <h2>Core Architecture Components</h2>
          <ul>
            {project.systemArchitecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.coreModules ? (
        <section className="gh-card">
          <h2>Core Modules</h2>
          <ul>
            {project.coreModules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.executionWorkflow ? (
        <section className="gh-card">
          <h2>Execution Workflow</h2>
          <ol className="gh-workflow-list">
            {project.executionWorkflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      {project.technologyStack ? (
        <section className="gh-card">
          <h2>Technology Stack</h2>
          <div className="gh-tech-grid">
            {Object.entries(project.technologyStack).map(([category, items]) => (
              <article className="gh-tech-card" key={category}>
                <h3>{category}</h3>
                <div className="gh-tags">
                  {items.map((item) => (
                    <span className="gh-tag" key={`${category}-${item}`}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.automatedReporting ? (
        <section className="gh-card gh-detail-grid">
          <article>
            <h2>Automated Weekly Reports</h2>
            <ul>
              {(project.automatedReporting.weekly || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Automated Monthly Reports</h2>
            <ul>
              {(project.automatedReporting.monthly || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      ) : null}

      {project.ragChatbot ? (
        <section className="gh-card">
          <h2>RAG Chatbot for Project Insights</h2>
          <p>{project.ragChatbot}</p>
          {project.ragDataSources ? (
            <>
              <h3 className="gh-subtitle">Data Sources</h3>
              <ul>
                {project.ragDataSources.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ) : null}

      {project.algorithms ? (
        <section className="gh-card">
          <h2>Algorithms and Techniques Used</h2>
          <ul>
            {project.algorithms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.uiComponents ? (
        <section className="gh-card">
          <h2>UI Components</h2>
          <ul>
            {project.uiComponents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.expectedImpact ? (
        <section className="gh-card">
          <h2>Expected Impact</h2>
          <ul>
            {project.expectedImpact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="gh-card gh-detail-grid">
        <article>
          <h2>Challenges</h2>
          <ul>
            {(project.challenges || []).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Outcomes</h2>
          <ul>
            {(project.outcomes || []).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      {project.futureEnhancements ? (
        <section className="gh-card">
          <h2>Future Enhancements</h2>
          <ul>
            {project.futureEnhancements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default ProjectDetailPage;
