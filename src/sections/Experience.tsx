import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experience } from '@/data/experience';
import type { ExperienceItem } from '@/types';
import './Experience.css';

function TimelineItem({ item }: { item: ExperienceItem }) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="timeline-item reveal">
      <div className="timeline-item__marker">
        <span className={`timeline-item__dot ${item.current ? 'timeline-item__dot--current' : ''}`} />
      </div>
      <div className="timeline-item__card">
        <div className="timeline-item__head">
          <h3 className="timeline-item__company">{item.company}</h3>
          {item.current && <span className="timeline-item__badge mono">Current</span>}
        </div>

        <div className="timeline-item__roles">
          {item.roles.map((role) => (
            <div className="timeline-item__role" key={role.title}>
              <span className="timeline-item__role-title">{role.title}</span>
              <span className="timeline-item__role-period mono">{role.period}</span>
            </div>
          ))}
        </div>

        <ul className="timeline-item__highlights">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Five years, five promotions, one pattern"
          description="Each stop follows the same arc: walk in, fix the process, grow the team, get promoted."
        />
        <div className="timeline">
          {experience.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
