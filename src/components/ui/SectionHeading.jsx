import React from 'react';
import './section-heading.css';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  as: HeadingTag = 'h2',
  className = ''
}) {
  return (
    <div className={`section-heading section-heading-${align} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <HeadingTag className="section-title">{title}</HeadingTag>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
