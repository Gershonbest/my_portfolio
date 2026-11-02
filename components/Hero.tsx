import React from 'react';
import profileImage from '../profile_dp.webp';
import { GithubIcon, LinkedInIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        <img
          src={profileImage}
          alt="Portrait of Gershon Omoraka"
          width={144}
          height={144}
          className="h-28 w-28 rounded-full object-cover ring-1 ring-line md:h-36 md:w-36"
        />
        <div>
          <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Gershon Omoraka
          </h1>
          <p className="mt-2 text-lg text-ink">AI/ML Engineer | Co-founder &amp; CTO at Orheo</p>
          <p className="mt-5 max-w-xl text-[17px] leading-7">
            I take AI systems from prototype to production: speech and document pipelines, voice agents, and multi-agent systems built for real-world load.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-surface px-3 py-1 text-sm text-ink ring-1 ring-line">
            Open to roles in applied AI, ML infrastructure and MLOps
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="mailto:gershblocks@gmail.com"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg hover:bg-[var(--accent-hover)]"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/gershon-omoraka-478058177"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Gershonbest"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
