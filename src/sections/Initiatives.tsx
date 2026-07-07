import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { initiatives } from '@/data/initiatives';
import type { Initiative } from '@/types';
import './Initiatives.css';

function InitiativeCard({ item, index }: { item: Initiative; index: number }) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={revealRef}
      className="initiative-card reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="initiative-card__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="initiative-card__tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="initiative-card__title">{item.title}</h3>
      <p className="initiative-card__org mono">{item.organization}</p>
      <p className="initiative-card__summary">{item.summary}</p>
      <ul className="initiative-card__outcomes">
        {item.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  );
}

export function Initiatives() {
  return (
    <section id="initiatives">
      <div className="container">
        <SectionHeading
          eyebrow="Key Initiatives"
          title="Work I'd point to in an interview"
          description="Not code repositories — branches, funnels, and teams, built or rebuilt from the ground up."
        />
        <div className="initiatives-grid">
          {initiatives.map((item, i) => (
            <InitiativeCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
