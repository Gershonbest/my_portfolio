import React from 'react';

export const TechTag: React.FC<{ name: string }> = ({ name }) => (
  <li>
    <span className="tech">{name}</span>
  </li>
);

export const TechList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
    {items.map((item) => (
      <TechTag key={item} name={item} />
    ))}
  </ul>
);
