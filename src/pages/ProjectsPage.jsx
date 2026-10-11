import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import PageSEO from '../components/layout/PageSEO';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import '../styles/projects.css';

export default function ProjectsPage() {
  const whatsappUrl = `https://wa.me/919500769007?text=${encodeURIComponent(
    "Hi Monish, I checked your projects on your portfolio and I'd like to discuss a website."
  )}`;

  return (
    <div className="projects-page">
      <PageSEO
        title="Projects | Monish P — Web Developer"
        description="Explore web development projects built by Monish P, featuring UrbanBite — a modern, responsive restaurant website demonstration."
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="PORTFOLIO"
            title="SELECTED WORK"
            subtitle="A featured demonstration of modern frontend development, responsive design, and tailored user experience."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Project Focus Note */}
          <div className="projects-note-card">
            <span className="note-badge">PORTFOLIO FOCUS</span>
            <h3 className="note-title">Quality, Responsiveness &amp; Real Utility</h3>
            <p className="note-text">
              UrbanBite is currently my featured portfolio demonstration, built to showcase a complete five-page restaurant website with dynamic menu filtering, interactive galleries, accessible forms, and mobile-first responsiveness. Rather than listing unfinished prototypes, I focus on demonstrating verified, production-quality frontend engineering.
            </p>
          </div>

          {/* Discussion CTA */}
          <div className="projects-cta">
            <h3 className="projects-cta-title">Need a Similar Website for Your Business?</h3>
            <p className="projects-cta-desc">
              I build tailored business and restaurant websites designed to look professional, load quickly, and convert visitors into customers.
            </p>
            <div className="projects-cta-buttons">
              <Button
                to="/contact"
                variant="primary"
                size="large"
                icon={ArrowRight}
              >
                Start a Discussion
              </Button>
              <Button
                href={whatsappUrl}
                external
                variant="secondary"
                size="large"
                icon={Phone}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
