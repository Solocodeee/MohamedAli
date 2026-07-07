import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { education, certifications } from '@/data/education';
import './Education.css';

export function Education() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education">
      <div className="container">
        <SectionHeading eyebrow="Education & Certifications" title="Foundations" />

        <div ref={revealRef} className="education reveal">
          <div className="education__col">
            <h3 className="education__col-title">Education</h3>
            {education.map((ed) => (
              <div key={ed.id} className="education__item">
                <span className="education__degree">{ed.degree}</span>
                <span className="education__institution">{ed.institution}</span>
                <span className="education__status mono">{ed.status}</span>
              </div>
            ))}
          </div>

          <div className="education__col">
            <h3 className="education__col-title">Certifications</h3>
            {certifications.map((cert) => (
              <div key={cert.id} className="education__cert">
                <span className="education__cert-dot" />
                <div>
                  <span className="education__cert-name">{cert.name}</span>
                  {cert.year && <span className="education__cert-year mono">{cert.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
