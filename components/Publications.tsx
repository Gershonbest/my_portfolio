import React from 'react';
import Section from './Section';
import type { Publication } from '../types';

const publicationsData: Publication[] = [
  {
    kind: 'Book chapter',
    title: 'Learning Management System',
    // TODO: confirm book title, full author list, and publication year
    venue: 'Taylor & Francis, 2026',
    href: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003754749-4/learning-management-system-sarumi-usman-abidemi-gershon-oghenetega-omoraka-olukayode-akanni-ajibola-charles-dele-chadi-altrjman-sinem-alturjman-fadi-al-turjman',
    doi: '10.1201/9781003754749-4',
  },
  {
    kind: 'Book chapter',
    title: 'IoT-based attendance systems',
    venue: 'Springer',
    // TODO: add the Springer chapter link, and confirm chapter title, book title, authors, and year
  },
  {
    kind: 'Open source',
    title: 'DeepOCR',
    venue: 'PyPI',
    note: 'Open-source Python package',
    // TODO: add the PyPI URL
  },
];

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications & Open Source">
      <div className="flex flex-col gap-8">
        {publicationsData.map((item) => (
          <article key={item.title} className="grid gap-2 sm:grid-cols-12 sm:gap-8">
            <p className="text-sm text-muted sm:col-span-4">{item.kind}</p>
            <div className="sm:col-span-8">
              <h3 className="font-medium text-ink">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent hover:text-ink"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-1 text-[15px]">{item.venue}</p>
              {item.doi && <p className="mt-1 text-sm">DOI: {item.doi}</p>}
              {item.note && <p className="mt-1 text-sm">{item.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
