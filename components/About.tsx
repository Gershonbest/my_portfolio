
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <p className="mb-4">
        Innovative AI/ML Engineer with 3+ years of experience designing and deploying intelligent systems at scale. Specialized in LLMs, RAG, and agentic AI systems with expertise in model training, fine-tuning, and production deployment. 
      </p>
      <p className="mb-4">
        Proven track record in building production-grade AI solutions including call transcription systems and conversational AI agents. Expert in end-to-end ML lifecycle management, from model development to serving and inference using modern MLOps practices.
      </p>
      <p>
        Holds Master's in AI Engineering with specialized research in AI applications for healthcare systems.
      </p>
    </Section>
  );
};

export default About;
