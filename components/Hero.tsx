import React from 'react';
import profileImage from '../profile_dp.webp';
import { ArrowIcon } from './Icons';

const chips = ['Python', 'Agentic AI', 'RAG', 'MLOps'];

const Hero: React.FC = () => {
  return (
    <section id="top" className="hero-shell min-h-screen md:-mt-[4.75rem]">
      <div className="hero-slash" aria-hidden="true" />
      <div className="hero-slash hero-slash-2" aria-hidden="true" />
      <div className="hero-slash hero-slash-3" aria-hidden="true" />

      <div className="relative z-10 grid min-h-screen items-stretch md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex max-w-2xl flex-col justify-center px-6 pb-10 pt-24 md:px-10 md:pb-16 lg:px-12">
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-white/55">
            <span className="h-px w-10 bg-nvidia" aria-hidden="true" />
            AI ENGINEER · FOUNDER · CTO
          </p>
          <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building <span className="text-nvidia">Intelligence.</span>
            <br />
            Engineering <span className="text-nvidia">Impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            I build AI agents, intelligent systems, and production-ready ML applications.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-nvidia px-5 py-2.5 text-sm font-semibold text-nvidia-ink hover:bg-[var(--accent-hover)]"
            >
              Explore My Work
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-nvidia px-5 py-2.5 text-sm font-semibold text-white hover:bg-nvidia/10"
            >
              Let&apos;s Connect
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Focus areas">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-sm text-white/80"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photo-stage">
          <img
            src={profileImage}
            alt="Gershon Omoraka working at a laptop"
            width={1600}
            height={1383}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
