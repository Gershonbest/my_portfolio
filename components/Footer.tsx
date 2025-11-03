import React from 'react';

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

const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
        <ul className="flex items-center space-x-4 mb-4 lg:hidden" aria-label="Social media">
            <li className="shrink-0">
                <a className="block hover:text-zinc-200" href="https://github.com/Gershonbest" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon className="h-6 w-6" />
                </a>
            </li>
            <li className="shrink-0">
                <a className="block hover:text-zinc-200" href="https://linkedin.com/in/gershon-omoraka-478058177" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className="h-6 w-6" />
                </a>
            </li>
        </ul>
      <p>
        Design inspired by Brittany Chiang. Coded in Visual Studio Code. Built with React and Tailwind CSS. All text is my own.
      </p>
    </footer>
  );
};

export default Footer;