import React from 'react';
import Section from './Section';
import type { Experience } from '../types';

const experienceData: Experience[] = [
  {
    role: 'AI/ML Engineer',
    company: 'MBL Hightech',
    location: 'Abuja, Nigeria',
    period: 'May 2023 – Present',
    points: [
      'Designed and deployed enterprise-grade call transcription system with 95% accuracy for customer-agent conversations.',
      'Built sophisticated multi-agent systems using LangGraph and CrewAI for complex workflow orchestration.',
      'Fine-tuned LLMs for domain-specific tasks, achieving 40% improvement in task accuracy.',
      'Developed NLP pipelines for automated document extraction with 92% accuracy in entity recognition.',
      'Architected RAG systems integrating vector databases (Supabase, Pinecone, ChromaDB), reducing query response time by 60%.',
      'Implemented end-to-end model serving infrastructure with FastAPI, handling 10K+ requests daily.',
    ],
  },
  {
    role: 'AI Research & Solutions',
    company: 'Phonenix AI',
    location: 'Abuja, Nigeria',
    period: 'May 2025 – Present',
    points: [
      'Built and trained AI models from scratch, including fine-tuning and quantization of language models for optimized deployment.',
      'Designed and deployed custom AI assistants for education, fintech, and healthcare sectors leveraging OpenAI APIs and fine-tuned language models.',
      'Architected intelligent chatbots with advanced semantic search using LlamaIndex and vector database integrations.',
      'Developed real-time voice AI agents utilizing LiveKit framework for seamless conversational interfaces.',
      'Engineered production-ready, scalable API solutions with FastAPI, implementing robust authentication and rate limiting mechanisms.',
    ],
  },
];

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
    <a href="#" target="_blank" rel="noreferrer noopener" className="block p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-sky-300 transition-colors duration-300">
        <div className="grid sm:grid-cols-8 sm:gap-4">
            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2" aria-label={item.period}>{item.period}</header>
            <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-200">
                    <span>{item.role} · <span className="inline-block">{item.company}</span></span>
                </h3>
                <ul className="mt-2 list-disc pl-5 space-y-2 text-sm text-zinc-400">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
            </div>
        </div>
    </a>
);


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;