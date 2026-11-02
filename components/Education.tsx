import React from 'react';
import Section from './Section';
import type { Education } from '../types';

const educationData: Education[] = [
  {
    degree: 'MSc, Artificial Intelligence Engineering',
    institution: 'Near East University, North Cyprus',
    period: '2023',
    focus: 'Research focus: AI applications in IoT for healthcare systems',
  },
  {
    degree: 'BSc, Electrical and Electronics Engineering',
    institution: 'European University of Lefke, North Cyprus',
    period: '2019',
    focus: 'Focus: microelectronics and embedded systems',
  },
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-8">
        {educationData.map((item) => (
          <article key={item.degree} className="grid gap-2 sm:grid-cols-12 sm:gap-8">
            <p className="text-sm text-muted sm:col-span-4">{item.period}</p>
            <div className="sm:col-span-8">
              <h3 className="font-medium text-ink">{item.degree}</h3>
              <p className="mt-1 text-[15px]">{item.institution}</p>
              {item.focus && <p className="mt-1 text-sm">{item.focus}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;
