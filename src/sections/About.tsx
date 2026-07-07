import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personalInfo, languages } from '@/data/personalInfo';
import './About.css';

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="container">
        <SectionHeading eyebrow="About" title="The short version" />

        <div ref={revealRef} className="about reveal">
          <div className="about__summary">
            <p>{personalInfo.summary}</p>
            <p className="about__note">
              Law degree, sales career — it wasn\u2019t the plan, but the structured thinking transferred: reading a
              situation, building an argument, and closing it turned out to matter as much on a sales floor as it
              does in a courtroom.
            </p>
          </div>

          <div className="about__languages">
            <h3 className="about__languages-title">Languages</h3>
            {languages.map((lang) => (
              <div key={lang.name} className="about__lang">
                <div className="about__lang-row">
                  <span>{lang.name}</span>
                  <span className="mono about__lang-level">{lang.level}</span>
                </div>
                <div className="about__lang-track">
                  <div className="about__lang-fill" style={{ width: `${lang.proficiency}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
