import React from 'react';
import { Building2, Utensils, Sparkles, Smartphone, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { capabilities } from '../../data/projects';
import '../../styles/home.css';

const iconMap = {
  Building2,
  Utensils,
  Smartphone,
  Sparkles
};

export default function Capabilities() {
  return (
    <section className="capabilities-section section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title="WHAT I BUILD"
          subtitle="Modern frontend solutions crafted to present your brand clearly and function seamlessly across devices."
        />

        <div className="capabilities-grid">
          {capabilities.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Building2;
            return (
              <div key={item.id} className="capability-card">
                <div className="capability-card-header">
                  <div className="capability-icon-box">
                    <IconComponent size={24} className="capability-icon" aria-hidden="true" />
                  </div>
                  <span className="capability-number">0{index + 1}</span>
                </div>

                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.description}</p>

                <div className="capability-delivers">
                  <h4 className="delivers-heading">Key Features:</h4>
                  <ul className="delivers-list">
                    {item.delivers.map((deliverable, i) => (
                      <li key={i}>
                        <Check size={14} className="check-icon" aria-hidden="true" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
