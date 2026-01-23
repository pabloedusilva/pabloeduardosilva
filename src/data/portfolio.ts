import { Project, Experience, Education, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Orçamentos Retífica',
    description: 'Aplicação web em Node.js para a Jânio Retífica. Sistema completo de orçamentos que gera arquivos PDF e integra com impressora EPSON para impressão automática.',
    image: '/assets/imagens/projects/OrcamentoRetifica.jpg',
    technologies: ['Node.js', 'Express', 'PDF', 'EPSON API'],
    githubUrl: 'https://github.com/pabloedusilva/orcamentos_retifica',
    liveUrl: 'https://orcamentos-retifica.onrender.com/'
  },
  {
    id: '2',
    title: 'Régua Máxima',
    description: 'Plataforma de agendamento de barbearia em desenvolvimento. Frontend completo com interface intuitiva e diferenciada. Backend em desenvolvimento com funcionalidades inovadoras e profissionais já na fila para migração.',
    image: [
      '/assets/imagens/projects/ReguaMaxima1.jpg',
      '/assets/imagens/projects/RéguaMáxima2.jpg'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/pabloedusilva/ReguaMaxima',
    liveUrl: 'https://app.reguamaxima.com.br/'
  },
  {
    id: '3',
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio pessoal desenvolvido com React e TypeScript. Apresenta minhas informações, formações e projetos de forma moderna e interativa.',
    image: '/assets/imagens/projects/PortifolioPessoal.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/pabloedusilva/pabloeduardosilva',
    liveUrl: 'https://pabloeduardosilva.onrender.com/'
  },
  {
    id: '4',
    title: 'Next Segurança Eletrônica',
    description: 'Landing page profissional para empresa de segurança eletrônica. Portfólio completo com apresentação de serviços de instalação de câmeras, alarmes e sistemas de segurança em geral para vendas e divulgação.',
    image: '/assets/imagens/projects/NextSegurança.jpg',
    technologies: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/pabloedusilva/NextSegurancaEletronica',
    liveUrl: 'https://nextsegurancaeletronica.onrender.com/'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelancer',
    position: 'Desenvolvedor Web Full Stack',
    period: 'Jan 2023 - Presente',
    description: 'Desenvolvimento de aplicações web completas para diversos clientes, desde landing pages institucionais até sistemas complexos com integração de APIs, gerenciamento de dados e automação de processos.',
    achievements: [
      'Desenvolvimento de sistemas personalizados com React, TypeScript e Node.js',
      'Criação de aplicações com integração de APIs e bancos de dados',
      'Implementação de automação de processos e geração de relatórios em PDF',
      'Desenvolvimento de interfaces modernas e responsivas',
      'Integração com impressoras e dispositivos externos',
      'Deploy e manutenção de aplicações em produção'
    ]
  },
  {
    id: '2',
    company: 'FSFX - Fundação São Francisco Xavier',
    position: 'Atendente de Call Center',
    period: 'Ago 2024 - Presente',
    description: 'Atuo no call center da FSFX, realizando agendamento de consultas para as unidades Usifamília e HMC, prestando atendimento receptivo via telefone e WhatsApp.',
    achievements: [
      'Gerenciamento de agendamentos para múltiplas unidades de saúde',
      'Atendimento multicanal (telefone e WhatsApp)',
      'Suporte direto aos pacientes com foco em qualidade no atendimento'
    ]
  },
  {
    id: '3',
    company: 'EPTOM',
    position: 'Jovem Aprendiz Administrativo',
    period: 'Fev 2023 - Jun 2024',
    description: 'Atuei no setor de Contabilidade realizando rotinas administrativas relacionadas ao controle de ponto e frequência dos servidores.',
    achievements: [
      'Apuração e controle de registros de ponto',
      'Lançamento de descontos, análise de compensações e conferência de dados',
      'Apoio na organização de informações para fechamento contábil',
      'Garantia de correto controle interno e precisão nos registros'
    ]
  },
  {
    id: '4',
    company: 'Unova Cursos',
    position: 'Professor de Informática',
    period: 'Mai 2022 - Jul 2022',
    description: 'Instrutor de informática básica, ministrando aulas sobre Pacote Office (Word, Excel e PowerPoint), sistemas operacionais e noções de hardware e software.',
    achievements: [
      'Ministração de aulas práticas de Pacote Office completo',
      'Orientação sobre conceitos de sistemas operacionais',
      'Capacitação de alunos para uso profissional de ferramentas tecnológicas',
      'Preparação de conteúdo didático acessível e prático'
    ]
  },
  {
    id: '5',
    company: 'Âncora Segurança Eletrônica',
    position: 'Técnico de Segurança Eletrônica',
    period: 'Jan 2021 - Jan 2023',
    description: 'Instalação e manutenção de sistemas de segurança, como câmeras (CFTV) e alarmes, incluindo passagem de cabos, fixação de equipamentos e serviços elétricos.',
    achievements: [
      'Instalação completa de sistemas CFTV e alarmes',
      'Execução de serviços elétricos residenciais e comerciais',
      'Testes de funcionamento e ajustes técnicos especializados',
      'Garantia de qualidade, segurança e bom funcionamento dos sistemas',
      'Atendimento técnico com foco em satisfação do cliente'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Senai MG',
    degree: 'Curso Técnico em Informática para Internet',
    period: 'Mar 2024 - Set 2025',
    description: 'Formação técnica focada em desenvolvimento web e tecnologias para internet.'
  },
  {
    id: '2',
    institution: 'CNI - Centro de Formação Profissional',
    degree: 'Inglês Básico',
    period: 'Jan 2018 - Trancado',
    description: 'Curso de inglês básico com foco em comunicação e vocabulário essencial.'
  },
  {
    id: '3',
    institution: 'CNI - Centro de Formação Profissional',
    degree: 'Informática Básica',
    period: 'Jan 2018 - Trancado',
    description: 'Fundamentos de informática, sistemas operacionais e ferramentas essenciais.'
  },
  {
    id: '4',
    institution: 'Enjoy',
    degree: 'Mídias Sociais',
    period: 'Jan 2017 - Mar 2017',
    description: 'Curso sobre gestão e estratégias de mídias sociais para marketing digital.'
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
  whatsapp: 'https://wa.me/5531985079718',
  resumeUrl: '/assets/curriculo-pablo-eduardo-silva.pdf'
};
