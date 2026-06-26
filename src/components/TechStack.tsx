import { techStack } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';

export default function TechStack() {
  // duplicate for marquee
  const items = [...techStack, ...techStack];

  return (
    <Section id="tech">
      <Reveal>
        <SectionLabel>Tech Stack</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl mb-14 text-balance">
          The tools I build with — and the ones I'm leveling up on.
        </h2>
      </Reveal>

      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-3 animate-marquee w-max">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="shrink-0 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-line bg-card font-mono text-sm text-[#efece4]"
            >
              {t.slug && (
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${t.slug}.svg`}
                  alt={`${t.name} logo`}
                  className="w-4 h-4"
                  loading="lazy"
                  style={{ filter: 'invert(1)' }}
                />
              )}
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Static fallback grid below for clarity on small viewports */}
      <div className="mt-10 hidden">
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-line bg-card font-mono text-xs"
            >
              {t.slug && (
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${t.slug}.svg`}
                  alt=""
                  className="w-3.5 h-3.5"
                  style={{ filter: 'invert(1)' }}
                />
              )}
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
