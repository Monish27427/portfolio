import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';
import '../../styles/home.css';

export default function ClosingCTA() {
  const whatsappUrl = `https://wa.me/919500769007?text=${encodeURIComponent(
    "Hi Monish, I'd like to discuss a website project."
  )}`;

  return (
    <section className="closing-cta-section section-padding">
      <div className="container">
        <div className="closing-cta-card">
          <span className="closing-cta-eyebrow">START A PROJECT</span>
          <h2 className="closing-cta-title">
            HAVE A WEBSITE PROJECT IN MIND?
          </h2>
          <p className="closing-cta-desc">
            Whether you need a business website, restaurant site, landing page, or a modern redesign, I'm ready to turn your ideas into a clean, functional digital experience.
          </p>
          <div className="closing-cta-actions">
            <Button
              to="/contact"
              variant="primary"
              size="large"
              icon={ArrowRight}
            >
              Let's Work Together
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
  );
}
