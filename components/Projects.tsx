import React from 'react';
import Section from './Section';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'AI Call Analytics Platform',
    technologies: 'Python, LangChain, AWS SageMaker, PostgreSQL, FastAPI, Model Serving',
    description: 'Enterprise call transcription system with real-time sentiment analysis. Processes 1000+ hours of audio daily with 95% accuracy. Deployed production-grade inference pipeline with automated monitoring.',
    repoUrl: 'https://github.com/Gershonbest',
    liveDemoUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'VisaBot - RAG-Powered Advisory Agent',
    technologies: 'LangGraph, Pinecone, Supabase, FastAPI, LlamaIndex',
    description: 'Intelligent visa consultation chatbot with multi-stage interaction modeling and document generation. Implemented hybrid search with semantic re-ranking for optimal information retrieval.',
    repoUrl: 'https://github.com/Gershonbest',
    liveDemoUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Skincare AI Agent',
    technologies: 'OpenAI Vision API, FastAPI, Streamlit, Model Serving',
    description: 'Facial analysis system with AI-driven skincare recommendations and dermatologist routing. Built scalable backend service for real-time inference.',
    repoUrl: 'https://github.com/Gershonbest',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Bible Study AI Companion',
    technologies: 'LangGraph, ChromaDB, LangChain, MCP Servers, WhatsApp Integration',
    description: 'Multi-agent system for contextual Bible study with semantic search capabilities. Dynamic content generation and interactive Q&A functionality using MCP protocol for enhanced context management.',
    repoUrl: 'https://github.com/Gershonbest',
    imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Phonenix AI TelephonyVoice Agent',
    technologies: 'LiveKit, FastAPI, OpenAI Realtime API, WebRTC, Twilio',
    description: 'Real-time voice telephony agent framework for natural conversational experiences with low-latency audio processing and streaming responses.',
    repoUrl: 'https://github.com/Gershonbest',
    liveDemoUrl: 'https://www.phonenix.ai',
    imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Whisper GPU Transcription Worker',
    technologies: 'Whisper, Pyannote, FastAPI, Redis, Docker, RunPod',
    description: 'Queue-driven GPU worker for multilingual speech transcription with speaker diarization and translation to English. Pulls jobs from Redis, with configurable concurrency to protect GPU load, and ships with a RunPod-ready Docker image.',
    repoUrl: 'https://github.com/Gershonbest/whisper_runpod_exp',
  },
  {
    title: 'Ray Serve Multi-Model Inference Platform',
    technologies: 'Ray Serve, FastAPI, Hugging Face Transformers, PyTorch, Docker',
    description: 'Multi-model inference platform where a single gateway routes requests to independently scaled model deployments (sentiment analysis and summarization). New models plug in through a registry, with per-model replica and device settings and background warmup.',
    repoUrl: 'https://github.com/Gershonbest/ml-inference',
  },
  {
    title: 'vLLM Inference Server',
    technologies: 'vLLM, FastAPI, Prometheus, Docker, Hugging Face',
    description: 'FastAPI server for high-throughput LLM serving on vLLM, with OpenAI-compatible completion and chat endpoints, configurable tensor parallelism and GPU memory use, and a Prometheus metrics endpoint for monitoring.',
    repoUrl: 'https://github.com/Gershonbest/vllm-inference',
  },
  {
    title: 'GPU LLM Serving on Kubernetes',
    technologies: 'Triton Inference Server, vLLM, Kubernetes, AWS EKS, Grafana, Prometheus',
    description: 'Production-oriented LLM serving architecture combining Triton dynamic batching and vLLM continuous batching, with Kubernetes autoscaling and Grafana dashboards for latency, throughput, and GPU utilization. In active development.',
    repoUrl: 'https://github.com/Gershonbest/llm-inference',
  },
  {
    title: 'Ollama Inference on Hugging Face Spaces',
    technologies: 'Ollama, Docker, Hugging Face Spaces, Embeddings, RAG',
    description: 'Dockerized Ollama API server for Hugging Face Spaces that preloads an embedding model and a small RAG-tuned language model on startup, giving a lightweight, self-hosted inference endpoint.',
    repoUrl: 'https://github.com/Gershonbest/ollama-inference',
  },
  {
    title: 'ArxivExplorer MCP Server',
    technologies: 'Model Context Protocol, FastMCP, Tavily, Python',
    description: 'Lightweight MCP server that lets AI assistants search and explore ArXiv papers, exposing a search tool, a curated list of AI research topics as a resource, and a prompt template for systematically exploring a topic.',
    repoUrl: 'https://github.com/Gershonbest/mcp-lite',
  },
  {
    title: 'WhatsApp AI Agent',
    technologies: 'LangGraph, Pydantic AI, FastAPI, PostgreSQL, OpenAI, Logfire',
    description: 'Conversational AI agent backend for WhatsApp, built on LangGraph with Postgres-backed conversation state, web-search tooling, and observability through Logfire.',
    repoUrl: 'https://github.com/Gershonbest/whatsapp_agent',
  },
  {
    title: 'PropertyAI - Multi-Agent Real Estate Assistant',
    technologies: 'LangGraph, Pydantic AI, FastAPI, Supabase, PGVector, WhatsApp Cloud API',
    description: 'Multi-agent real estate assistant over WhatsApp with a router coordinating eight specialized agents for lead qualification, property search, scheduling, market analysis, and FAQs, with conversation memory and RAG.',
    repoUrl: 'https://github.com/Gershonbest/whatsapp',
  },
  // {
  //   title: 'Phonenix AI TelephonyVoice Agent',
  //   technologies: 'FastAPI, Twilio, OpenAI, PostgreSQL, Docker, Kubernetes',
  //   description: 'Real-time voice telephony agent framework for natural conversational experiences with low-latency audio processing and streaming responses.',
  //   repoUrl: 'https://github.com/Gershonbest',
  //   liveDemoUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=400&auto=format&fit=crop',
  // },
];

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
    </svg>
);

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
    <li className="mb-12">
        <a href={item.liveDemoUrl || item.repoUrl || '#'} target="_blank" rel="noreferrer noopener" className="block group">
            <div className="grid gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4 p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 group-hover:border-sky-300 transition-colors duration-300">
                {item.imageUrl && (
                    <div className="sm:col-span-2">
                        <div className="rounded-md border-2 border-zinc-700/50 overflow-hidden">
                            <img alt={`${item.title} project thumbnail`} loading="lazy" decoding="async" className="w-full h-auto object-cover transition duration-300 group-hover:scale-105" src={item.imageUrl} />
                        </div>
                    </div>
                )}
                <div className={`z-10 ${item.imageUrl ? 'sm:col-span-6' : 'sm:col-span-8'}`}>
                    <h3 className="font-medium leading-snug text-zinc-200 group-hover:text-sky-300 transition-colors duration-300">
                        <span>{item.title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{item.description}</p>
                    <div className="relative z-10 mt-2 flex items-center space-x-4">
                        {item.repoUrl && (
                            <a href={item.repoUrl} target="_blank" rel="noreferrer noopener" aria-label={`${item.title} repository`} className="block text-zinc-400 hover:text-sky-300">
                                <span className="sr-only">Repository</span>
                                <GithubIcon className="h-5 w-5" />
                            </a>
                        )}
                        {item.liveDemoUrl && (
                            <a href={item.liveDemoUrl} target="_blank" rel="noreferrer noopener" aria-label={`${item.title} live demo`} className="block text-zinc-400 hover:text-sky-300">
                                <span className="sr-only">Live Demo</span>
                                <ExternalLinkIcon className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {item.technologies.split(', ').map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">{tech}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    </li>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} item={project} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;