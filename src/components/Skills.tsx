import { skillGroups } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import {
  Code2,
  Brain,
  Network,
  Sparkles,
  Eye,
  Wrench,
} from 'lucide-react';

const ICONS = [Code2, Brain, Network, Sparkles, Eye, Wrench];

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel>Skills</SectionLabel>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-10">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              A toolbox built around AI, ML and applied deep learning.
            </h2>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <p className="text-muted max-w-2xl mb-12">
          Organized by domain. Each card reflects what I've actually used in projects, internships and ongoing learning.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <Reveal key={group.title} delay={idx * 0.06}>
              <div className="lift group h-full p-6 rounded-xl border border-line bg-card relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/0 group-hover:bg-accent/[0.06] blur-2xl transition-all duration-500" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg border border-line bg-ink grid place-items-center text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-xl text-[#efece4]">{group.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-[#bdbab1] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
