import { Logo } from './Logo';
import { personalInfo } from '@/data/personalInfo';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size={30} showWordmark />
        <div className="footer__links">
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#hero">Back to top ↑</a>
        </div>
        <p className="footer__copyright mono">© {year} Muhammed Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
