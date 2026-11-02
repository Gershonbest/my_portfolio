import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Gershon Omoraka</p>
        <p>AI/ML Engineer · Co-founder &amp; CTO, Orheo</p>
      </div>
    </footer>
  );
};

export default Footer;
