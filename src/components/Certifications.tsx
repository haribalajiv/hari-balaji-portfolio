import { certifications } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <SectionLabel>Certifications</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-2xl mb-14 text-balance">
          Structured learning that backs up the practical work.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="lift h-full p-6 rounded-xl border border-line bg-card">
              <Award className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-display text-lg leading-snug text-[#efece4] mb-3 text-balance">
                {c.title}
              </h3>
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                Issued by {c.issuer}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
