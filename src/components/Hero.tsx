import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../lib/data';
import { ArrowDown, Download, Mail, FolderGit2 } from 'lucide-react';

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setTagIndex((i) => (i + 1) % profile.rotatingTags.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-32 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 dotted-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs sm:text-sm text-muted tracking-wider mb-6"
        >
          <span className="text-accent">Hello</span> — I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] tracking-tight text-balance"
          data-testid="hero-name"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div className="max-w-xl">
            <h2 className="font-display italic text-2xl md:text-3xl text-[#d1cfc6] mb-5">
              {profile.title}
            </h2>

            <div className="h-7 overflow-hidden font-mono text-sm text-muted relative">
              {profile.rotatingTags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{
                    y: tagIndex === i ? 0 : tagIndex > i ? -28 : 28,
                    opacity: tagIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0 flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                  {tag}
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-[#bdbab1] leading-relaxed max-w-lg text-pretty">
              {profile.heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-ink font-mono text-xs uppercase tracking-wider font-medium hover:bg-[#d6ff66] transition-colors"
              data-testid="hero-cta-projects"
            >
              <FolderGit2 className="w-4 h-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#2a2a26] text-[#efece4] font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              data-testid="hero-cta-contact"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              download="Hari_Balaji_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#2a2a26] text-[#efece4] font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              data-testid="hero-cta-resume"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden md:flex absolute bottom-6 right-0 lg:right-2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
        >
          <ArrowDown className="w-3 h-3 animate-bounce text-accent" />
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
