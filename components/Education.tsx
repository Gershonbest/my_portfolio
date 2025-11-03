import React from 'react';
import Section from './Section';
import type { Education } from '../types';

const educationData: Education[] = [
  {
    degree: 'Master of Science in Artificial Intelligence Engineering',
    institution: 'Near East University, North Cyprus',
    period: '2023',
    focus: 'Research Focus: AI Applications in IoT for Healthcare Systems',
  },
  {
    degree: 'Bachelor of Science in Electrical and Electronics Engineering',
    institution: 'European University of Lefke, North Cyprus',
    period: '2019',
    focus: 'Focus: Microelectronics and Embedded Systems',
  },
];

const EducationCard: React.FC<{ item: Education }> = ({ item }) => (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/40">
        <div className="grid sm:grid-cols-8 sm:gap-4">
            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2" aria-label={item.period}>{item.period}</header>
            <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-200">
                    <span className="inline-block">
                        {item.degree} · <span className="text-zinc-400">{item.institution}</span>
                    </span>
                </h3>
                {item.focus && <p className="mt-1 text-sm">{item.focus}</p>}
            </div>
        </div>
    </div>
);

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-6">
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Education;