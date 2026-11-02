import React, { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const mobileLinks = [
  ...navLinks,
  { name: 'Education', href: '#education' },
  { name: 'Publications', href: '#publications' },
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
      className={`sticky top-0 z-50 border-b ${
        scrolled ? 'border-line bg-paper text-ink' : 'border-transparent bg-transparent text-white'
      }`}
    >
      <div className="flex items-center gap-4 px-6 py-4 md:px-10 lg:px-12">
        <a
          href="#top"
          className="shrink-0 font-display text-xl font-extrabold tracking-tight text-nvidia"
          onClick={handleNavClick}
        >
          GO
        </a>
        <span className="hidden h-5 w-px bg-current opacity-20 sm:block" aria-hidden="true" />

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-sm font-medium ${
                    scrolled ? 'text-muted hover:text-ink' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="hidden items-center gap-2 rounded-full border border-nvidia bg-[#070807]/80 px-3.5 py-1.5 text-sm font-medium text-nvidia sm:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-nvidia" aria-hidden="true" />
            Available for Work
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
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
        <nav id="mobile-nav" className="border-t border-line bg-paper px-6 py-4 text-ink lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {mobileLinks.map((link) => (
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
