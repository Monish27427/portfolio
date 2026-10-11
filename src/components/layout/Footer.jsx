import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';
import '../../styles/footer.css';

export default function Footer() {
  const whatsappUrl = `https://wa.me/919500769007?text=${encodeURIComponent(
    "Hi Monish, I found your portfolio and I'd like to discuss a website project."
  )}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-name">MONISH P</span>
              <span className="brand-dot">.</span>
            </Link>
            <p className="footer-subtitle">
              Web Developer &amp; AI-Assisted Frontend Developer
            </p>
            <p className="footer-desc">
              Creating modern, responsive websites for businesses and personal brands.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Direct Contact Links */}
          <div className="footer-contact">
            <h4 className="footer-heading">Connect Directly</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:monish6096@gmail.com" className="contact-link">
                  <Mail size={16} aria-hidden="true" />
                  <span>monish6096@gmail.com</span>
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Phone size={16} aria-hidden="true" />
                  <span>+91 9500769007 (WhatsApp)</span>
                  <ArrowUpRight size={14} className="external-icon" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Monish27427" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <GithubIcon size={16} aria-hidden="true" />
                  <span>github.com/Monish27427</span>
                  <ArrowUpRight size={14} className="external-icon" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Monish P. All rights reserved.</p>
          <p className="footer-tagline">Built with React, Vite &amp; AI-Assisted Development</p>
        </div>
      </div>
    </footer>
  );
}
