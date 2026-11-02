export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  companyUrl?: string;
}

export type ProjectCategory = 'Venture' | 'Production AI' | 'Open Source' | 'Agents';

export interface Project {
  title: string;
  technologies: string;
  description: string;
  category: ProjectCategory;
  liveDemoUrl?: string;
  repoUrl?: string;
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

export interface Publication {
  kind: string;
  title: string;
  venue: string;
  href?: string;
  doi?: string;
  note?: string;
}
