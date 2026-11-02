import React from 'react';
import Section from './Section';

const details = [
  { label: 'Email', value: 'gershblocks@gmail.com', href: 'mailto:gershblocks@gmail.com' },
  { label: 'Phone', value: '+234 916 617 6627', href: 'tel:+2349166176627' },
  { label: 'Location', value: 'Abuja, Nigeria' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gershon-omoraka', href: 'https://linkedin.com/in/gershon-omoraka-478058177' },
  { label: 'GitHub', value: 'github.com/Gershonbest', href: 'https://github.com/Gershonbest' },
];

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-[17px] leading-7">
        Open to roles and collaborations in applied AI, LLM systems, and production ML. The fastest way to reach me is email.
      </p>
      <dl className="mt-8 divide-y divide-line border-y border-line">
        {details.map((item) => (
          <div key={item.label} className="grid gap-1 py-3 sm:grid-cols-12 sm:gap-8">
            <dt className="text-sm font-medium text-ink sm:col-span-4">{item.label}</dt>
            <dd className="text-[15px] sm:col-span-8">
              {item.href ? (
                <a href={item.href} className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Contact;
