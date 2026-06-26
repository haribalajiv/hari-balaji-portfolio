import { useEffect, useState } from 'react';
import { navLinks, profile } from '../lib/data';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group" data-testid="nav-logo">
            <span className="w-7 h-7 rounded-md bg-accent text-ink grid place-items-center font-display font-semibold">
              H
            </span>
            <span className="font-mono text-sm tracking-tight text-[#efece4] group-hover:text-accent transition-colors">
              haribalaji.v
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-[#efece4] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/5 font-mono text-[10px] uppercase tracking-widest text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {profile.status}
            </span>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink font-mono text-xs uppercase tracking-wider font-medium hover:bg-[#d6ff66] transition-colors"
              data-testid="nav-resume-btn"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
            <button
              className="md:hidden p-2 text-[#efece4]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              data-testid="nav-menu-toggle"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur">
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink font-mono text-xs uppercase tracking-wider font-medium w-fit"
              >
                <Download className="w-3.5 h-3.5" /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>
      <div id="top" />
    </>
  );
}
