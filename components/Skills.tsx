import React from 'react';
import Section from './Section';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    name: 'AI/ML & Deep Learning',
    skills: ['OpenAI APIs', 'LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'HuggingFace', 'PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'RAG Systems', 'Agentic AI'],
  },
  {
    name: 'Agentic AI & Orchestration',
    skills: ['LangGraph', 'CrewAI', 'MCP Servers', 'LiveKit Voice Agent', 'Multi-agent Systems', 'Tool Calling'],
  },
  {
    name: 'Vector Databases & Search',
    skills: ['Pinecone', 'Milvus', 'ChromaDB', 'Qdrant', 'Weaviate', 'Semantic Search', 'Hybrid Search'],
  },
  {
    name: 'MLOps & Model Serving',
    skills: ['FastAPI', 'Flask', 'MLflow', 'Weights & Biases', 'Model Versioning', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: 'Programming & Backend',
    skills: ['Python','FastAPI', 'Flask','RESTful APIs', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLAlchemy', 'ORM'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS (SageMaker, EC2, Lambda, S3, CodePipeline, CodeBuild, CodeDeploy)', 'Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
];

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="mr-1.5 mt-2">
        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
            {children}
        </div>
    </li>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      {skillsData.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className="font-bold text-zinc-200 mb-2">{category.name}</h3>
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {category.skills.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Skills;