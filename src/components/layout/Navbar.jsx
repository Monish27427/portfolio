import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import '../../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Reset mobile menu if pathname changes
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" aria-label="Monish P Portfolio Home">
          <span className="brand-name">MONISH P</span>
          <span className="brand-dot">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-cta desktop-only">
          <Button to="/contact" variant="primary" size="small" icon={ArrowUpRight}>
            Let's Work Together
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${isOpen ? 'drawer-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <span className="brand-name">MONISH P</span>
            <span className="brand-dot">.</span>
          </Link>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobile Navigation">
          <ul className="drawer-list">
            {navItems.map((item) => (
              <li key={item.path} className="drawer-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `drawer-link ${isActive ? 'drawer-link-active' : ''}`
                  }
                  end={item.path === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          <Button
            to="/contact"
            variant="primary"
            size="large"
            icon={ArrowUpRight}
            onClick={() => setIsOpen(false)}
            style={{ width: '100%' }}
          >
            Let's Work Together
          </Button>
          <p className="drawer-email">monish6096@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
