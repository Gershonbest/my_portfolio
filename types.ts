
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  technologies: string;
  description: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  focus?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}