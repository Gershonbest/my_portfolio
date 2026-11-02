import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20" aria-labelledby={`${id}-heading`}>
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <h2 id={`${id}-heading`} className="font-serif text-2xl text-ink">
            {title}
          </h2>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
};

export default Section;
