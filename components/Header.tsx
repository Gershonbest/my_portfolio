import React, { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#top" className="shrink-0 font-serif text-lg text-ink" onClick={handleNavClick}>
          Gershon Omoraka
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm text-muted hover:text-ink"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="mailto:gershblocks@gmail.com"
                className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-fg hover:bg-[var(--accent-hover)]"
              >
                Email me
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-paper px-6 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={handleNavClick} className="block py-1 text-ink">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:gershblocks@gmail.com" className="inline-block pt-2 text-accent">
                Email me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
