import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'ghost'
  size = 'medium', // 'small', 'medium', 'large'
  icon: Icon,
  iconPosition = 'right',
  external = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon btn-icon-left" size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon btn-icon-right" size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
