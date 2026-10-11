import { ExternalLink, ArrowRight } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { projects } from '../../data/projects';
import '../../styles/home.css';

export default function FeaturedProject() {
  const featured = projects.find(p => p.featured) || projects[0];

  return (
    <section className="featured-section section-padding bg-grid-pattern">
      <div className="container">
        <SectionHeading
          eyebrow="FEATURED WORK"
          title="FEATURED PROJECT"
          subtitle="A demonstration of modern frontend development, responsive design, and tailored user experience."
        />

        <div className="featured-card">
          {/* Left / Top Image Preview Container */}
          <div className="featured-preview">
            <div className="featured-preview-frame">
              <img
                src={featured.image}
                alt={`${featured.name} - ${featured.category} Preview`}
                className="featured-img"
                loading="lazy"
              />
              <div className="featured-preview-badge">
                <span>FICTIONAL PORTFOLIO DEMONSTRATION</span>
              </div>
            </div>
          </div>

          {/* Right / Bottom Content */}
          <div className="featured-info">
            <div className="featured-meta">
              <span className="featured-category">{featured.category}</span>
              <span className="featured-tag">Fictional Demo</span>
            </div>

            <h3 className="featured-title">{featured.name}</h3>

            <p className="featured-desc">{featured.shortDescription}</p>

            <div className="featured-highlights">
              <h4 className="highlights-title">Key Highlights:</h4>
              <ul className="highlights-list">
                {featured.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="featured-tech">
              <span className="tech-label">Built with:</span>
              <div className="tech-tags">
                {featured.technologies.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="featured-actions">
              <Button
                href={featured.liveUrl}
                external
                variant="primary"
                icon={ExternalLink}
              >
                View Live Site
              </Button>
              <Button
                href={featured.githubUrl}
                external
                variant="secondary"
                icon={GithubIcon}
              >
                View GitHub
              </Button>
              <Button
                to="/projects"
                variant="ghost"
                icon={ArrowRight}
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
