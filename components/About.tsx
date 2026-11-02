import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-[17px] leading-7">
        <p>
          AI/ML Engineer and co-founder &amp; CTO of Orheo, an AI-powered appointment platform for service businesses across Africa. I take AI systems from prototype to production, building solutions that hold up under real-world load.
        </p>
        <p>
          My work spans call analysis pipelines processing up to 1,000 hours of audio a day, OCR document validation, AI voice agents for customer care, and multi-agent systems that automate complex workflows.
        </p>
        <p>
          I also help teams move from AI curiosity to real capability through training and hands-on adoption. MSc in AI Engineering (Near East University), author of the open-source DeepOCR package, and co-author of two published book chapters.
        </p>
      </div>
    </Section>
  );
};

export default About;
