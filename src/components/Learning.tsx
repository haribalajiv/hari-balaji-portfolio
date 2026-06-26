import { learning } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';

export default function Learning() {
  return (
    <Section id="learning">
      <Reveal>
        <SectionLabel>Currently Learning</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl mb-6 text-balance">
          What I'm sharpening right now to grow as an AI engineer.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-muted max-w-2xl mb-12">
          Active focus areas — being explored through projects, courses and hands-on experiments.
        </p>
      </Reveal>

      <div className="flex flex-wrap gap-3">
        {learning.map((l, i) => (
          <Reveal key={l} delay={i * 0.04}>
            <div className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-line bg-card hover:border-accent/50 transition-colors">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
              </span>
              <span className="font-display text-[#efece4] text-sm">{l}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted border-l border-line pl-3">
                In Progress
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
