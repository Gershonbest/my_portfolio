import React from 'react';
import Section from './Section';
import type { Experience } from '../types';

const experienceData: Experience[] = [
  {
    role: 'Co-founder & CTO',
    company: 'Orheo',
    location: 'Abuja, Nigeria',
    period: 'June 2026 – Present',
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
    company: 'CepsAI',
    location: 'Abuja, Nigeria',
    companyUrl: 'https://phonenix-api.vercel.app/',
    period: 'March 2025 – Present',
    points: [
      'Fine-tuned and deployed LLMs using LoRA/PEFT on domain-specific datasets for healthcare and fintech enterprises; deployed as SageMaker endpoints with monitoring and auto-scaling.',
      'Built and trained AI models from scratch, including fine-tuning and quantization of language models for optimized deployment.',
      'Built end-to-end AI automation workflows orchestrating LLM agents with enterprise platforms (CRMs, ERPs, email, messaging APIs), eliminating high-volume repetitive processes.',
      'Delivered tailored AI agents for education, fintech, and healthcare clients, each with enterprise API integrations, authentication, and production-ready FastAPI backends.',
      'Architected intelligent chatbots with advanced semantic search using LlamaIndex and vector database integrations.',
      'Developed real-time voice AI agents utilizing LiveKit for conversational interfaces.',
      'Conducted AI feasibility studies and prototyped agentic applications, validating technical approaches before full-scale enterprise deployment.',
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
  <article className="grid gap-2 border-t border-line py-8 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-12 sm:gap-8">
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
      <ul className="mt-3 space-y-2 text-[15px] leading-7">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  </article>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div>
        {experienceData.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
