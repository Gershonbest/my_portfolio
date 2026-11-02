import React from 'react';
import Section from './Section';
import type { Experience } from '../types';

const experienceData: Experience[] = [
  {
    role: 'Co-founder & CTO',
    company: 'Orheo',
    location: 'Abuja, Nigeria',
    // TODO: confirm Orheo start date
    period: 'TODO – Present',
    companyUrl: 'https://www.orheo.com',
    points: [
      'Built the AI-powered appointment management platform for service businesses across Africa.',
      'WhatsApp-first booking flows with a LangGraph multi-agent backend (FastAPI).',
      'Paystack payments with tenant subaccount settlement.',
      'Multi-tenant Postgres (Neon), Redis, and S3.',
      'CI/CD with GitHub Actions and Docker, deployed on Render.',
    ],
  },
  {
    role: 'AI Research & Solutions',
    company: 'Phonenix AI',
    location: 'Abuja, Nigeria',
    // TODO: confirm whether Phonenix AI is still current ("Present") or has an end date
    period: 'May 2025 – Present',
    points: [
      'Built and trained AI models from scratch, including fine-tuning and quantization of language models for optimized deployment.',
      'Designed and deployed custom AI assistants for education, fintech, and healthcare sectors leveraging OpenAI APIs and fine-tuned language models.',
      'Architected intelligent chatbots with advanced semantic search using LlamaIndex and vector database integrations.',
      'Developed real-time voice AI agents utilizing LiveKit for conversational interfaces.',
      'Engineered production-ready API solutions with FastAPI, including authentication and rate limiting.',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'MBL Hightech',
    location: 'Abuja, Nigeria',
    period: 'May 2023 – Sep 2026',
    points: [
      'Built an end-to-end, event-driven call transcription and analysis pipeline processing up to 1,000 call hours a day.',
      'Built an end-to-end OCR document validation system for a financial CRM.',
      'Built an AI voice agent telephony system for customer care calls.',
      'Built a client similarity system and a multi-agent, role-based support agent system for CRM operations.',
      'Designed and operated model-serving infrastructure (FastAPI, Docker, AWS) for these systems.',
    ],
  },
];

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
  <article className="grid gap-2 sm:grid-cols-12 sm:gap-8">
    <p className="text-sm text-muted sm:col-span-4">{item.period}</p>
    <div className="sm:col-span-8">
      <h3 className="text-base font-medium text-ink">
        {item.role},{' '}
        {item.companyUrl ? (
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-ink"
          >
            {item.company}
          </a>
        ) : (
          item.company
        )}
      </h3>
      <p className="mt-1 text-sm">{item.location}</p>
      <ul className="mt-3 space-y-2 text-[15px] leading-6">
        {item.points.map((point) => (
          <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-10">
        {experienceData.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
