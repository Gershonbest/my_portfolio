import React, { useState, useEffect } from 'react';
import profileImage from '../profile_dp.png';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.62.61-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.99 3.38 3.3z"></path>
  </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
    </svg>
);


const Hero: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    
    const sections = [
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'experience', name: 'Experience' },
        { id: 'projects', name: 'Projects' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="mb-6">
                    <img 
                        src={profileImage} 
                        alt="Gershon Omoraka" 
                        className="w-32 h-32 rounded-full object-cover border-2 border-zinc-700/50 shadow-lg"
                    />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                    <a href="/">Gershon Omoraka</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                    AI/ML Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I design and deploy intelligent systems at scale, specializing in LLMs, RAG, and agentic AI and Voice AI.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {sections.map(section => (
                            <li key={section.id}>
                                <a className="group flex items-center py-3" href={`#${section.id}`} onClick={(e) => handleNavClick(e, section.id)}>
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 ${activeSection === section.id ? 'w-16 bg-zinc-200' : ''}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200 ${activeSection === section.id ? 'text-zinc-200' : ''}`}>
                                        {section.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 shrink-0">
                    <a className="block hover:text-zinc-200" href="https://github.com/Gershonbest" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                        <span className="sr-only">GitHub</span>
                        <GithubIcon className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 shrink-0">
                    <a className="block hover:text-zinc-200" href="https://linkedin.com/in/gershon-omoraka-478058177" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedInIcon className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 shrink-0">
                    <a className="block hover:text-zinc-200" href="mailto:gershblocks@gmail.com" aria-label="Email">
                        <span className="sr-only">Email</span>
                        <MailIcon className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Hero;