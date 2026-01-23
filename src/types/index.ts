export interface Project {
  id: string;
  title: string;
  description: string;
  image: string | string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level?: number;
}
