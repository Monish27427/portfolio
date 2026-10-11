import { ExternalLink } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import Button from '../ui/Button';
import '../../styles/projects.css';

export default function ProjectCard({ project, index }) {
  const {
    name,
    category,
    fullDescription,
    shortDescription,
    technologies,
    liveUrl,
    githubUrl,
    image,
    highlights
  } = project;

  return (
    <article className="project-card">
      <div className="project-card-inner">
        {/* Project Image Preview */}
        <div className="project-image-wrapper">
          <img
            src={image}
            alt={`${name} — restaurant website concept preview`}
            className="project-image"
            loading="lazy"
          />
          <div className="project-number-badge">
            PROJECT 0{index + 1}
          </div>
          <div className="project-overlay">
            <div className="overlay-actions">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn overlay-btn-primary"
                  aria-label={`View Live Site for ${name}`}
                >
                  <ExternalLink size={18} />
                  <span>Live Site</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn overlay-btn-secondary"
                  aria-label={`View GitHub source code for ${name}`}
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-card-body">
          <div className="project-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="project-category">{category}</span>
              <span className="featured-tag">Fictional Demo</span>
            </div>
            <h2 className="project-title">{name}</h2>
          </div>

          <p className="project-description">
            {fullDescription || shortDescription}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="project-features">
              <h4 className="features-heading">Key Features:</h4>
              <ul className="features-list">
                {highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-technologies">
            <span className="tech-heading">Technologies Used:</span>
            <div className="project-tech-tags">
              {technologies.map(tech => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card-actions">
            {liveUrl && (
              <Button
                href={liveUrl}
                external
                variant="primary"
                size="medium"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                external
                variant="secondary"
                size="medium"
                icon={GithubIcon}
              >
                GitHub Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
