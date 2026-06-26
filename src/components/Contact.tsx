import { profile } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl text-balance">
          Let's build something <span className="italic text-accent">amazing</span> together.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-[#bdbab1] max-w-2xl mt-8 leading-relaxed">
          I'm actively looking for AI Engineer / Generative AI internships and full-time opportunities starting 2027. Drop a note — I reply to every message.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="lift group block p-6 rounded-xl border border-line bg-card h-full"
              data-testid={`contact-${c.label.toLowerCase()}`}
            >
              <div className="flex items-center justify-between mb-6">
                <c.icon className="w-5 h-5 text-accent" />
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:rotate-12 transition-all" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
                {c.label}
              </div>
              <div className="font-display text-lg text-[#efece4] break-all">{c.value}</div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-14">
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-accent text-ink font-mono text-sm uppercase tracking-widest font-medium hover:bg-[#d6ff66] transition-colors"
            data-testid="contact-start-conversation"
          >
            Start a Conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
