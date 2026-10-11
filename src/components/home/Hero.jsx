import React from 'react';
import { ArrowRight, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import '../../styles/home.css';

export default function Hero() {
  return (
    <section className="hero-section bg-grid-pattern">
      <div className="container hero-container">
        {/* Left Text Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-badge">
              <span className="status-dot"></span>
              AVAILABLE FOR FREELANCE PROJECTS
            </span>
            <span className="hero-eyebrow-text">WEB DEVELOPER · FREELANCE</span>
          </div>

          <h1 className="hero-title">
            BUILDING WEBSITES THAT WORK FOR YOUR BUSINESS.
          </h1>

          <p className="hero-subtitle">
            I create modern, responsive websites that help businesses present themselves professionally online.
          </p>

          <div className="hero-actions">
            <Button to="/projects" variant="primary" size="large" icon={ArrowRight}>
              View My Work
            </Button>
            <Button to="/contact" variant="secondary" size="large">
              Let's Work Together
            </Button>
          </div>

          <div className="hero-trust-pills">
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
              <span>Responsive Design</span>
            </div>
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
              <span>AI-Assisted Efficiency</span>
            </div>
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
              <span>Clean Code Structure</span>
            </div>
          </div>
        </div>

        {/* Right Visual Element - Memorable Minimalist Code Console & Viewport Widget */}
        <div className="hero-visual">
          <div className="hero-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} className="terminal-icon" aria-hidden="true" />
                <span>monish-dev.config.js</span>
              </div>
              <div className="terminal-badge">LIVE</div>
            </div>

            <div className="terminal-body">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;
              </div>
              <div className="code-line indent">
                <span className="code-prop">name</span>: <span className="code-string">"MONISH P"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">role</span>: <span className="code-string">"Web &amp; AI-Assisted Frontend Developer"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">focus</span>: <span className="code-string">"Modern Business &amp; Restaurant Websites"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">stack</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Vite"</span>, <span className="code-string">"CSS"</span>, <span className="code-string">"AI Workflows"</span>],
              </div>
              <div className="code-line indent">
                <span className="code-prop">status</span>: <span className="code-string">"Accepting New Clients"</span>
              </div>
              <div className="code-line">
                &#125;;
              </div>
              <div className="code-line output">
                <Sparkles size={14} className="sparkle-icon" aria-hidden="true" />
                <span className="code-comment">// Turning ideas into clean, functional digital experiences.</span>
              </div>
            </div>

            {/* Micro Viewport Widget Footnote */}
            <div className="terminal-footer">
              <div className="metric-box">
                <span className="metric-label">Performance</span>
                <span className="metric-value">100% Responsive</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Architecture</span>
                <span className="metric-value">React + Vite SPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
