import React from 'react';
import { Mail, Phone, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';
import PageSEO from '../components/layout/PageSEO';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ContactForm from '../components/contact/ContactForm';
import '../styles/contact.css';

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/919500769007?text=${encodeURIComponent(
    "Hi Monish, I found your portfolio and I'd like to discuss a website project."
  )}`;

  return (
    <div className="contact-page">
      <PageSEO
        title="Contact | Monish P"
        description="Get in touch with Monish P for freelance web development projects, business website creation, or website redesigns."
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="GET IN TOUCH"
            title="LET'S BUILD SOMETHING."
            subtitle="Have an idea for a website or need a responsive frontend for your business? Reach out directly via email, WhatsApp, or prepare an inquiry below."
          />

          <div className="contact-layout-grid">
            {/* Left Direct Contact Options */}
            <div className="contact-info-panel">
              <div className="direct-actions-box">
                {/* Email Option */}
                <div className="direct-channel-card">
                  <div className="channel-icon-box">
                    <Mail size={24} aria-hidden="true" />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Direct Email</span>
                    <span className="channel-value">monish6096@gmail.com</span>
                    <div className="channel-btn">
                      <Button
                        href="mailto:monish6096@gmail.com"
                        variant="primary"
                        size="small"
                        icon={Mail}
                      >
                        Email Me
                      </Button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Option */}
                <div className="direct-channel-card">
                  <div className="channel-icon-box">
                    <Phone size={24} aria-hidden="true" />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Direct WhatsApp</span>
                    <span className="channel-value">+91 9500769007</span>
                    <div className="channel-btn">
                      <Button
                        href={whatsappUrl}
                        external
                        variant="secondary"
                        size="small"
                        icon={ExternalLink}
                      >
                        WhatsApp Me
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees / Service Notes */}
              <div className="contact-promises-box">
                <h4 className="promises-heading">What to expect:</h4>
                <ul className="promises-list">
                  <li>
                    <Clock size={16} className="promise-icon" aria-hidden="true" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="promise-icon" aria-hidden="true" />
                    <span>Clear scope outline &amp; timeframe</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="promise-icon" aria-hidden="true" />
                    <span>Direct developer communication</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
