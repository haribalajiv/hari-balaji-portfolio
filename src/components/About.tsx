import { about } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel>About</SectionLabel>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance">
              {about.headline}
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6 text-[#bdbab1] leading-relaxed text-pretty">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-10 lg:border-l border-line">
          <Reveal delay={0.2}>
            <div className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Areas of Interest
            </div>
            <div className="flex flex-wrap gap-2 mb-12">
              {about.interests.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-line bg-card font-mono text-xs text-[#efece4]"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-px bg-line">
            {about.facts.map((f, i) => (
              <Reveal key={f.label} delay={0.3 + i * 0.08}>
                <div className="bg-ink p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {f.label}
                  </div>
                  <div className="font-display text-2xl mt-2 text-[#efece4]">
                    {f.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
