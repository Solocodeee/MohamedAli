import { Button } from '@/components/Button';
import { personalInfo } from '@/data/personalInfo';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 1200 500" preserveAspectRatio="none" className="hero__trend">
          <path
            className="hero__trend-path"
            d="M0 420 C 150 400, 220 460, 320 380 S 480 240, 600 260 S 760 120, 880 140 S 1040 40, 1200 70"
            fill="none"
            stroke="url(#trendGradient)"
            strokeWidth="2.5"
          />
          <defs>
            <linearGradient id="trendGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <circle cx="1200" cy="70" r="5" fill="var(--gold)" className="hero__trend-node" />
        </svg>
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow mono hero__fade">Portfolio — Sales & Business Development</p>
        <h1 className="hero__name hero__fade">{personalInfo.name}</h1>
        <p className="hero__title hero__fade">{personalInfo.title}</p>
        <p className="hero__tagline hero__fade">{personalInfo.tagline}</p>

        <div className="hero__stats hero__fade">
          <div className="hero__stat">
            <span className="hero__stat-value mono">5+</span>
            <span className="hero__stat-label">Years in Sales &amp; BD</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value mono">5</span>
            <span className="hero__stat-label">Organizations Led or Trained</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value mono">3</span>
            <span className="hero__stat-label">Branches Built or Turned Around</span>
          </div>
        </div>

        <div className="hero__actions hero__fade">
          <Button href="#contact" variant="primary">
            Contact Me
          </Button>
          <Button href={personalInfo.cvFile} download variant="secondary">
            Download CV
          </Button>
          <Button href="#initiatives" variant="ghost">
            View Initiatives ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
