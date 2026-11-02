import React from 'react';
import Section from './Section';
import { TechList } from './TechTag';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    name: 'AI / ML',
    skills: ['OpenAI APIs', 'LangChain', 'LlamaIndex', 'HuggingFace', 'PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'RAG', 'Agentic AI'],
  },
  {
    name: 'Agents & orchestration',
    skills: ['LangGraph', 'CrewAI', 'MCP', 'Pydantic AI', 'LiveKit', 'Twilio', 'Multi-agent systems', 'Tool calling'],
  },
  {
    name: 'Search & retrieval',
    skills: ['Pinecone', 'Milvus', 'ChromaDB', 'Qdrant', 'Weaviate', 'Supabase', 'pgvector', 'Semantic search', 'Hybrid search'],
  },
  {
    name: 'MLOps & serving',
    skills: ['FastAPI', 'Flask', 'MLflow', 'Weights & Biases', 'Model versioning', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: 'Model Serving & Inference',
    skills: ['vLLM', 'Triton Inference Server', 'Ray Serve', 'Ollama', 'Whisper', 'Pyannote', 'Prometheus', 'Grafana'],
  },
  {
    name: 'Backend',
    skills: ['Python', 'REST APIs', 'PostgreSQL', 'Neon Postgres', 'Redis', 'MongoDB', 'SQLAlchemy', 'Paystack'],
  },
  {
    name: 'Cloud',
    skills: ['AWS SageMaker', 'EC2', 'Lambda', 'S3', 'CodePipeline', 'GitHub Actions'],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skillsData.map((category) => (
          <div key={category.name} className="grid gap-3 py-5 sm:grid-cols-12 sm:gap-8">
            <dt className="text-sm font-medium text-ink sm:col-span-4">{category.name}</dt>
            <dd className="sm:col-span-8">
              <TechList items={category.skills} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
