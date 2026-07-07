import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillGroups } from '@/data/skills';
import './Skills.css';

function SkillCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={revealRef}
      className="skill-card reveal"
      style={{ transitionDelay: `${Math.min(index, 4) * 80}ms` }}
    >
      <span className="skill-card__index mono">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="skill-card__title">{group.category}</h3>
      <p className="skill-card__desc">{group.description}</p>
      <ul className="skill-card__list">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills & Competencies"
          title="What I bring to a sales floor"
          description="Five areas, built up over 5+ years of running teams and reading the numbers behind them."
        />
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
