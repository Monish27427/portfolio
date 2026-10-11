import React from 'react';
import { ArrowUpRight, Check, Code, Cpu, Smartphone, ArrowRight } from 'lucide-react';
import PageSEO from '../components/layout/PageSEO';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { skillsList, workWorkflow, capabilities } from '../data/projects';
import '../styles/about.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageSEO
        title="About | Monish P — Web Developer"
        description="Learn more about Monish P, a web developer building modern, responsive websites with React, Vite, and responsible AI-assisted workflows."
      />

      {/* Hero / Introduction */}
      <section className="about-hero section-padding">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="ABOUT MONISH P"
            title="BUILDING USEFUL, RESPONSIVE WEBSITES."
            subtitle="Web developer combining modern frontend technologies with structured AI-assisted workflows."
          />

          <div className="about-intro-grid">
            <div className="about-bio-card">
              <p className="about-bio-text">
                I build modern, responsive websites that help businesses establish a professional online presence. I use React, modern web technologies, and AI-assisted development workflows to turn ideas into clean, functional digital experiences.
              </p>
              <p className="about-bio-text" style={{ marginTop: '-1rem' }}>
                My focus centers on creating websites that serve tangible purposes—whether giving local businesses a credible digital home, providing restaurants with intuitive digital menus, or crafting lightweight landing pages that load quickly and look sharp on any screen.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <Code size={18} className="highlight-icon" aria-hidden="true" />
                  <span>Modern React &amp; Component-Driven Architecture</span>
                </div>
                <div className="highlight-item">
                  <Smartphone size={18} className="highlight-icon" aria-hidden="true" />
                  <span>Mobile-First Responsive Layouts Tested on Real Viewports</span>
                </div>
                <div className="highlight-item">
                  <Cpu size={18} className="highlight-icon" aria-hidden="true" />
                  <span>Responsible AI-Assisted Development Workflows</span>
                </div>
              </div>
            </div>

            {/* Side Info Widget */}
            <div className="about-side-widget">
              <h3 className="widget-title">DEVELOPER PROFILE</h3>
              <ul className="profile-meta-list">
                <li className="profile-meta-item">
                  <span className="meta-label">Name</span>
                  <span className="meta-value">MONISH P</span>
                </li>
                <li className="profile-meta-item">
                  <span className="meta-label">Professional Title</span>
                  <span className="meta-value">Web Developer &amp; AI-Assisted Frontend Developer</span>
                </li>
                <li className="profile-meta-item">
                  <span className="meta-label">Primary Focus</span>
                  <span className="meta-value">Business Websites, Restaurant Websites &amp; Responsive Frontend</span>
                </li>
                <li className="profile-meta-item">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">India</span>
                </li>
                <li className="profile-meta-item">
                  <span className="meta-label">Status</span>
                  <span className="meta-value">Available for Freelance Projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsible AI Card */}
          <div className="about-ai-card">
            <span className="about-ai-eyebrow">DEVELOPMENT PHILOSOPHY</span>
            <h2 className="about-ai-title">Responsible AI-Assisted Development</h2>
            <p className="about-ai-text">
              I treat AI as a powerful tool to accelerate development—using it for rapid prototyping, architecture brainstorming, and writing repetitive boilerplate. However, AI does not replace thoughtful engineering: every component layout, color token, responsive breakpoint, semantic HTML tag, and accessibility feature is verified, refined, and tested by hand. This blend allows me to deliver polished, production-ready websites with both speed and uncompromising code quality.
            </p>
          </div>
        </div>
      </section>

      {/* Development Workflow Section */}
      <section className="principles-section section-padding bg-grid-pattern">
        <div className="container">
          <SectionHeading
            eyebrow="METHODOLOGY"
            title="DEVELOPMENT WORKFLOW"
            subtitle="A structured 5-stage process ensuring websites are planned intentionally, built reliably, and delivered seamlessly."
          />

          <div className="principles-grid">
            {workWorkflow.map((step) => (
              <div key={step.step} className="principle-card">
                <span className="principle-number">{step.step}</span>
                <h3 className="principle-title">{step.title}</h3>
                <p className="principle-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="TOOLKIT"
            title="SKILLS &amp; TECHNOLOGIES"
            subtitle="The actual technologies and tools implemented in my projects."
          />

          <div className="skills-container-box">
            <div className="skills-flex-grid">
              {skillsList.map((skill) => (
                <div key={skill} className="skill-chip">
                  <span className="skill-dot"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding bg-grid-pattern">
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES"
            title="SERVICES I OFFER"
            subtitle="Frontend solutions tailored to help businesses present themselves professionally online."
          />

          <div className="services-grid">
            {capabilities.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>

                <div className="service-delivers-box">
                  <h4 className="service-delivers-title">Key Inclusions:</h4>
                  <ul className="service-delivers-list">
                    {service.delivers.map((item, idx) => (
                      <li key={idx}>
                        <Check size={14} className="check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner linking to BOTH Projects and Contact */}
          <div className="services-cta-banner">
            <h3 className="services-cta-title">Ready to Discuss Your Website Project?</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '-0.5rem auto 0.5rem' }}>
              Explore my featured work or reach out directly to talk about how we can build your site.
            </p>
            <div className="services-cta-actions">
              <Button to="/projects" variant="secondary" size="large" icon={ArrowRight}>
                View Projects
              </Button>
              <Button to="/contact" variant="primary" size="large" icon={ArrowUpRight}>
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
