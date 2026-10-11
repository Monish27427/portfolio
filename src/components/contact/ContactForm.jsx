import React, { useState } from 'react';
import { Send, Mail, Phone, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import Button from '../ui/Button';
import '../../styles/contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website Development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your website project requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitted(true);
  };

  const emailSubject = encodeURIComponent(`Website Inquiry — ${formData.projectType}`);
  const emailBody = encodeURIComponent(
    `Hi Monish,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}\n`
  );
  const mailtoUrl = `mailto:monish6096@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMsg = encodeURIComponent(
    `Hi Monish, I'm ${formData.name} (${formData.email}). I'm inquiring about ${formData.projectType}.\n\nDetails: ${formData.message}`
  );
  const whatsappUrl = `https://wa.me/919500769007?text=${whatsappMsg}`;

  const handleCopy = () => {
    const messageSummary = `Website Inquiry for Monish P\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(messageSummary).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-card success-state">
        <div className="success-icon-box">
          <CheckCircle2 size={48} className="success-icon" aria-hidden="true" />
        </div>
        <h2 className="success-title">Inquiry Formatted!</h2>
        <p className="success-message">
          Your project details passed validation. Because this portfolio runs as a static client-side application without a database or backend server, your message is not stored. Choose your preferred method below to transmit it directly:
        </p>

        <div className="success-actions">
          <Button
            href={mailtoUrl}
            external
            variant="primary"
            icon={Mail}
          >
            Send via Email Client
          </Button>
          <Button
            href={whatsappUrl}
            external
            variant="secondary"
            icon={Phone}
          >
            Send via WhatsApp
          </Button>
          <Button
            type="button"
            variant="secondary"
            icon={copied ? Check : Copy}
            onClick={handleCopy}
          >
            {copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}
          </Button>
        </div>

        <button
          type="button"
          className="reset-form-btn"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              projectType: 'Business Website Development',
              message: ''
            });
            setErrors({});
            setCopied(false);
          }}
        >
          Prepare another message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h2 className="form-card-title">Send a Project Inquiry</h2>
      <p className="form-card-desc">
        Complete the form below to structure your requirements. Form validation is performed client-side, and you can transmit directly via Email or WhatsApp.
      </p>

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            required
          />
          {errors.name && (
            <span id="contact-name-error" className="error-text">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Your Email <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@business.com"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            required
          />
          {errors.email && (
            <span id="contact-email-error" className="error-text">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.email}
            </span>
          )}
        </div>

        {/* Project Type */}
        <div className="form-group">
          <label htmlFor="contact-project-type" className="form-label">
            Project Type <span className="required-star">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`form-select ${errors.projectType ? 'input-error' : ''}`}
          >
            <option value="Business Website Development">Business Website Development</option>
            <option value="Restaurant Website Development">Restaurant Website Development</option>
            <option value="Responsive Frontend Development">Responsive Frontend Development</option>
            <option value="Landing Page Development">Landing Page Development</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Other Frontend Inquiry">Other Frontend Inquiry</option>
          </select>
          {errors.projectType && (
            <span className="error-text">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.projectType}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Project Details <span className="required-star">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your business, website goals, preferred timeline, or key pages..."
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            required
          />
          {errors.message && (
            <span id="contact-message-error" className="error-text">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" size="large" icon={Send}>
          Format &amp; Prepare Message
        </Button>

        <p className="form-disclaimer">
          Note: This static portfolio validates your inputs client-side. After preparing, you can send via your email client or WhatsApp.
        </p>
      </form>
    </div>
  );
}
