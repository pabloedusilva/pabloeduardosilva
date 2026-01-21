import { Project, Experience, Education, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Projeto E-commerce',
    description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
    image: '/assets/imagens/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/pabloedusilva',
    liveUrl: 'https://demo-project.com'
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com gráficos e métricas em tempo real para análise de dados.',
    image: '/assets/imagens/projects/project2.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    githubUrl: 'https://github.com/pabloedusilva',
    liveUrl: 'https://demo-project.com'
  },
  {
    id: '3',
    title: 'App de Produtividade',
    description: 'Aplicativo para gerenciamento de tarefas com recursos de colaboração em equipe.',
    image: '/assets/imagens/projects/project3.jpg',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Express'],
    githubUrl: 'https://github.com/pabloedusilva',
    liveUrl: 'https://demo-project.com'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Desenvolvedor Full Stack',
    period: '2023 - Presente',
    description: 'Desenvolvimento de aplicações web modernas e escaláveis.',
    achievements: [
      'Implementação de arquitetura microserviços',
      'Otimização de performance resultando em 40% de melhoria',
      'Mentoria de desenvolvedores júnior'
    ]
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Desenvolvedor Front-end',
    period: '2021 - 2023',
    description: 'Criação de interfaces modernas e responsivas para diversos clientes.',
    achievements: [
      'Desenvolvimento de mais de 20 projetos web',
      'Implementação de design systems',
      'Liderança técnica em projetos complexos'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Universidade Federal',
    degree: 'Bacharelado em Ciência da Computação',
    period: '2018 - 2022',
    description: 'Formação completa em desenvolvimento de software e sistemas.'
  },
  {
    id: '2',
    institution: 'Udemy / Rocketseat',
    degree: 'Cursos de Especialização',
    period: '2020 - Presente',
    description: 'React, Node.js, TypeScript, Cloud Computing e DevOps.'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'HTML/CSS', category: 'frontend', level: 95 },
  { name: 'Tailwind CSS', category: 'frontend', level: 90 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'Express', category: 'backend', level: 80 },
  { name: 'MongoDB', category: 'backend', level: 75 },
  { name: 'PostgreSQL', category: 'backend', level: 80 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Docker', category: 'tools', level: 75 },
  { name: 'AWS', category: 'tools', level: 70 },
  { name: 'Figma', category: 'tools', level: 85 }
];

export const personalInfo = {
  name: 'Pablo Eduardo Silva',
  title: 'Desenvolvedor Full Stack',
  description: 'Desenvolvedor apaixonado por criar experiências digitais incríveis. Especializado em React, TypeScript e Node.js, com foco em código limpo e performance.',
  email: 'contato@pabloedusilva.com',
  github: 'https://github.com/pabloedusilva',
  linkedin: 'https://linkedin.com/in/pabloedusilva',
  resumeUrl: '/assets/curriculo-pablo-eduardo-silva.pdf'
};
