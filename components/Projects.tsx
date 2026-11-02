import React, { useState } from 'react';
import Section from './Section';
import { TechList } from './TechTag';
import type { Project, ProjectCategory } from '../types';

const projectsData: Project[] = [
  {
    title: 'Orheo',
    technologies: 'LangGraph, FastAPI, WhatsApp, Paystack, Neon Postgres, Redis, S3, Docker',
    description: 'AI-powered appointment platform for service businesses across Africa. WhatsApp-first booking with a multi-agent backend, Paystack tenant settlement, and multi-tenant infrastructure.',
    liveDemoUrl: 'https://www.orheo.com',
    category: 'Venture',
  },
  {
    title: 'DeepOCR',
    technologies: 'Python, OCR',
    description: 'Open-source Python package for OCR, published on PyPI.',
    repoUrl: 'https://github.com/Gershonbest/deep-ocr',
    // TODO: add the PyPI URL
    category: 'Open Source',
  },
  {
    title: 'AI Call Analytics Platform',
    technologies: 'Python, LangChain, AWS SageMaker, PostgreSQL, FastAPI',
    description: 'Enterprise call transcription and analysis pipeline processing up to 1,000 hours of audio a day.',
    // TODO: add a public repo URL if one exists
    category: 'Production AI',
  },
  {
    title: 'VisaBot — RAG Advisory Agent',
    technologies: 'LangGraph, Pinecone, Supabase, FastAPI, LlamaIndex',
    description: 'Visa consultation chatbot with multi-stage interaction modeling, document generation, and hybrid search with semantic re-ranking.',
    // TODO: add a public repo URL if one exists
    category: 'Agents',
  },
  {
    title: 'Skincare AI Agent',
    technologies: 'OpenAI Vision API, FastAPI, Streamlit',
    description: 'Facial analysis system with AI-driven skincare recommendations and dermatologist routing, served through a real-time inference backend.',
    // TODO: add a public repo URL if one exists
    category: 'Agents',
  },
  {
    title: 'Bible Study AI Companion',
    technologies: 'LangGraph, ChromaDB, LangChain, MCP, WhatsApp',
    description: 'Multi-agent system for contextual Bible study with semantic search, interactive Q&A, and MCP-based context management.',
    // TODO: add a public repo URL if one exists
    category: 'Agents',
  },
  {
    title: 'CepsAI',
    technologies: 'LiveKit, FastAPI, OpenAI Realtime API, WebRTC, Twilio',
    description: 'Real-time voice telephony agent for natural conversations, with low-latency audio processing and streaming responses.',
    liveDemoUrl: 'https://phonenix-api.vercel.app/',
    // TODO: add a public repo URL if one exists
    category: 'Agents',
  },
  {
    title: 'Whisper GPU Transcription Worker',
    technologies: 'Whisper, Pyannote, FastAPI, Redis, Docker, RunPod',
    description: 'Queue-driven GPU worker for multilingual transcription with speaker diarization and translation, designed for RunPod.',
    repoUrl: 'https://github.com/Gershonbest/whisper_runpod_exp',
    category: 'Production AI',
  },
  {
    title: 'Ray Serve Multi-Model Inference',
    technologies: 'Ray Serve, FastAPI, Transformers, PyTorch, Docker',
    description: 'Gateway that routes requests to independently scaled model deployments, with a registry for plugging in new models.',
    repoUrl: 'https://github.com/Gershonbest/ml-inference',
    category: 'Open Source',
  },
  {
    title: 'vLLM Inference Server',
    technologies: 'vLLM, FastAPI, Prometheus, Docker',
    description: 'High-throughput LLM serving with OpenAI-compatible endpoints, tensor parallelism, and Prometheus metrics.',
    repoUrl: 'https://github.com/Gershonbest/vllm-inference',
    category: 'Open Source',
  },
  {
    title: 'GPU LLM Serving on Kubernetes',
    technologies: 'Triton, vLLM, Kubernetes, AWS EKS, Grafana, Prometheus',
    description: 'LLM serving architecture combining Triton and vLLM batching, Kubernetes autoscaling, and Grafana dashboards. In active development.',
    repoUrl: 'https://github.com/Gershonbest/llm-inference',
    category: 'Production AI',
  },
  {
    title: 'Ollama Inference on Hugging Face Spaces',
    technologies: 'Ollama, Docker, Hugging Face Spaces, RAG',
    description: 'Dockerized Ollama API server that preloads an embedding model and a RAG-tuned language model on startup.',
    repoUrl: 'https://github.com/Gershonbest/ollama-inference',
    category: 'Open Source',
  },
  {
    title: 'ArxivExplorer MCP Server',
    technologies: 'MCP, FastMCP, Tavily, Python',
    description: 'MCP server that lets AI assistants search ArXiv papers, with a curated topic list and a prompt template for systematic exploration.',
    repoUrl: 'https://github.com/Gershonbest/mcp-lite',
    category: 'Open Source',
  },
  {
    title: 'WhatsApp AI Agent',
    technologies: 'LangGraph, Pydantic AI, FastAPI, PostgreSQL, OpenAI',
    description: 'Conversational agent backend for WhatsApp, with Postgres-backed conversation state, web search, and Logfire observability.',
    repoUrl: 'https://github.com/Gershonbest/whatsapp_agent',
    category: 'Agents',
  },
  {
    title: 'PropertyAI',
    technologies: 'LangGraph, Pydantic AI, FastAPI, Supabase, PGVector, WhatsApp',
    description: 'Multi-agent real estate assistant over WhatsApp, with eight specialized agents for search, scheduling, market analysis, and FAQs.',
    repoUrl: 'https://github.com/Gershonbest/whatsapp',
    category: 'Agents',
  },
];

const filters: Array<'All' | ProjectCategory> = ['All', 'Venture', 'Production AI', 'Open Source', 'Agents'];

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
  <article className="border-t border-line py-7">
    <p className="text-sm text-muted">{item.category}</p>
    <h3 className="mt-1 font-display text-xl font-medium text-ink">{item.title}</h3>
    <p className="mt-2 text-[15px] leading-7">{item.description}</p>
    <div className="mt-4">
      <TechList items={item.technologies.split(', ')} />
    </div>
    {(item.repoUrl || item.liveDemoUrl) && (
      <div className="mt-4 flex gap-4 text-sm">
        {item.repoUrl && (
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-ink"
          >
            Code
          </a>
        )}
        {item.liveDemoUrl && (
          <a
            href={item.liveDemoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-ink"
          >
            Live
          </a>
        )}
      </div>
    )}
  </article>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const visible = filter === 'All' ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <Section id="projects" title="Projects">
      <div className="mb-2 flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="Filter projects by category">
        {filters.map((item) => {
          const active = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={`border-b pb-1 text-sm ${
                active
                  ? 'border-accent text-ink'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-10">
        {visible.map((project) => (
          <ProjectCard key={project.title} item={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
