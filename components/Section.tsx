import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-16" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="font-display text-2xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
};

export default Section;
