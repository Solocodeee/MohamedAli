import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { useActiveSection } from '@/hooks/useActiveSection';
import { personalInfo } from '@/data/personalInfo';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <Logo size={30} showWordmark showSubtitle={false} />
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta navbar__cta--desktop">
          <Button href={personalInfo.cvFile} download variant="secondary">
            Download CV
          </Button>
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button href={personalInfo.cvFile} download variant="primary" className="navbar__mobile-cta">
          Download CV
        </Button>
      </div>
    </header>
  );
}
