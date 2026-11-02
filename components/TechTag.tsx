import React from 'react';

const tones = [
  'ochre',
  'pine',
  'emerald',
  'teal',
  'plum',
  'steel',
  'rust',
  'slate',
  'wine',
  'copper',
  'indigo',
  'walnut',
  'cyan',
  'sage',
  'apricot',
] as const;

type Tone = (typeof tones)[number];

const families: Array<[RegExp, Tone]> = [
  [/lang(chain|graph)/i, 'ochre'],
  [/llamaindex|\bllama\b/i, 'plum'],
  [/pinecone|milvus|chroma|qdrant|weaviate|pgvector|semantic search|hybrid search|\brag\b/i, 'pine'],
  [/supabase|paystack/i, 'emerald'],
  [/fastapi|flask/i, 'teal'],
  [/\bpython\b/i, 'steel'],
  [/openai/i, 'sage'],
  [/pytorch|tensorflow|transformers/i, 'rust'],
  [/docker|kubernetes|\baws eks\b/i, 'slate'],
  [/crewai|pydantic/i, 'wine'],
  [/vllm|triton|ollama|ray/i, 'copper'],
  [/mcp|fastmcp/i, 'indigo'],
  [/aws|sagemaker|\bec2\b|\blambda\b|\bs3\b|codepipeline/i, 'walnut'],
  [/livekit|webrtc|twilio|whisper|pyannote|whatsapp/i, 'cyan'],
  [/huggingface|hugging face|streamlit/i, 'apricot'],
  [/postgres|mongodb|redis|sqlalchemy/i, 'steel'],
  [/prometheus|grafana|mlflow|weights & biases|ci\/cd/i, 'slate'],
  [/nlp|computer vision|agentic|multi-agent|tool calling|model versioning|rest apis/i, 'sage'],
];

function hashTone(value: string): Tone {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return tones[hash % tones.length];
}

function toneFor(name: string): Tone {
  const match = families.find(([pattern]) => pattern.test(name));
  return match ? match[1] : hashTone(name);
}

export const TechTag: React.FC<{ name: string }> = ({ name }) => (
  <li>
    <span className={`tech tech-${toneFor(name)}`}>{name}</span>
  </li>
);

export const TechList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
    {items.map((item) => (
      <TechTag key={item} name={item} />
    ))}
  </ul>
);
