// Language Translation System
const translations = {
    pt: {
        'name': 'Thiago Sotero Do Prado',
        'hero-subtitle': 'AI Engineering, Automação, Backend & PHP',
        'location': 'São Paulo, Brasil',
        'summary-title': 'Resumo Profissional',
        'summary-text': 'Especialista em Desenvolvimento e Automação de Processos com vasta experiência na arquitetura e implementação de soluções complexas para clientes. Foco na entrega de projetos de alto impacto, desde a concepção e levantamento de requisitos até a gestão de equipes, desenvolvimento e implantação em ambientes de nuvem. Sólida vivência em projetos internacionais, aplicando metodologias ágeis como Scrum e melhores práticas para garantir eficiência, escalabilidade e redução de custos operacionais.',
        'expertise-title': 'Áreas de Especialização',
        'skill-backend': 'Desenvolvimento Backend',
        'skill-architecture': 'Arquitetura de Software',
        'skill-ai': 'Inteligência Artificial',
        'skill-automation': 'Automação de Processos',
        'skill-data': 'Administração de Dados',
        'microservices': 'Microsserviços',
        'system-design': 'Design de Sistemas',
        'scalability': 'Escalabilidade',
        'fine-tuning': 'Fine-Tuning de Modelos',
        'ai-agents': 'Agentes de IA',
        'complex-workflows': 'Workflows Complexos',
        'env-migration': 'Migração de Ambientes',
        'data-modeling': 'Modelagem de Dados',
        'projects-title': 'Projetos & Timeline',
        'year-earlier': 'Anteriores',
        'tag-client': 'client',
        'tag-oss': 'open-source',

        // Timeline 2026 - presente
        'project6-title': 'Plataforma de Educação em Trading',
        'project6-date': 'Fev 2026 — presente',
        'project6-desc': 'Ecossistema completo para escola de trading: backend FastAPI, automação de pagamentos via Lastlink, atendimento omnichannel com Chatwoot, gestão de membros no Discord e integração WhatsApp via Evolution API. PRD técnico completo e 14 tasks de desenvolvimento.',

        // Open source 2026
        'project7-title': 'RAG Pipeline em Produção',
        'project7-date': 'Mar 2026',
        'project7-desc': 'Pipeline RAG completo com FastAPI, LangChain e pgvector, com CI/CD configurado. Referência para arquiteturas de Retrieval-Augmented Generation prontas para produção.',

        'project8-title': 'Multi-Agent Orchestrator (Supervisor Pattern)',
        'project8-date': 'Mar 2026',
        'project8-desc': 'Implementação do padrão Supervisor com LangGraph para orquestração de múltiplos agentes especializados, coordenados por um supervisor central que delega tarefas conforme o contexto.',

        'project10-title': 'Visão Computacional — Matemática para Crianças',
        'project10-date': 'Nov 2025',
        'project10-desc': 'Sistema de visão computacional que ensina matemática para crianças através de reconhecimento de gestos com webcam. Combina detecção de mãos em tempo real e lógica didática para gamificar o aprendizado.',

        // Clientes 2025
        'project11-title': 'SaaS para Prop Firm de Trading',
        'project11-date': 'Nov 2025 — Jan 2026',
        'project11-desc': 'SaaS para gestão de mesas proprietárias de trading. Frontend em React 18, Vite e TypeScript; backend FastAPI com PostgreSQL; e microsserviço em Python integrando MetaTrader 5 para operações e telemetria.',

        'project12-title': 'Sales Copilot — Assistente IA em Tempo Real',
        'project12-date': 'Out — Nov 2025',
        'project12-desc': 'Copiloto de IA que ouve chamadas de venda em tempo real e sugere próximos passos. Stack com Deepgram para speech-to-text, LangGraph para orquestração de agentes, FastAPI no backend e Vue 3 no frontend.',

        'project13-title': 'SaaS White-Label para Barbearias',
        'project13-date': 'Jul — Set 2025',
        'project13-desc': 'Plataforma white-label para gestão de marca, redes sociais e chatbot de agendamento para barbearias.',

        'project14-title': 'Sports Tech — Plataforma de Futebol Amador',
        'project14-date': 'Mai — Jul 2025',
        'project14-desc': 'Plataforma sports tech completa: modelo de dados v3.2 com chaves híbridas (BigAutoField + UUID), convites via JWT, interface para árbitros, módulo GameOps e sistema de credenciais e badges. Documentação técnica e materiais de Series A.',

        // Projetos antigos (mantidos)
        'project1-title': 'SC Transportes — Sistema de Gestão Logística Portuária',
        'project1-challenge': '<strong>Desafio:</strong> Digitalizar e integrar uma operação rústica baseada em planilhas, transformando-a em um fluxo de trabalho digital e automatizado para controle de reabastecimento de navios no Porto de Santos.',
        'project1-solution': '<strong>Solução:</strong> Plataforma centralizada que integrou todos os stakeholders, permitindo atualizações em tempo real, gerenciamento de organograma e automação completa do ciclo operacional e financeiro.',
        'automation': 'Automação',
        'logistics': 'Gestão Logística',
        'project2-title': 'Zartte Professional — Sistema de Gestão Logística',
        'project2-desc': 'Desenvolvimento de sistema de gestão logística para distribuidor de grande porte, focado na automação do funil de vendas B2B e B2C. Aplicação web robusta que otimizou a cadeia de distribuição e forneceu ferramentas avançadas para gestão comercial.',
        'distribution': 'Distribuição',
        'project3-title': 'Sistema de Automação de Corretagem',
        'project3-date': 'Mar — Mai 2025',
        'project3-desc': 'Sistema web para automação de cálculos de corretagem, processando dados de compras e vendas de ativos financeiros em tempo real. Integração via API com instituições bancárias, webhooks para notificações e IA multimodal para interpretar solicitações.',
        'project4-title': 'Dashboard para Treinamento de IA',
        'project4-date': 'Fev — Mar 2025',
        'project4-desc': 'Interface moderna para otimizar o processo de treinamento de modelos de IA. Sistema com métodos avançados de fila para input de dados e IA offline para pré-processar e formatar dados para Fine-Tuning via OpenAI API.',
        'project5-title': 'Agentes de IA e Automação Low-Code',
        'project5-date': 'Abr — Jul 2025',
        'project5-desc': 'Implementação de soluções de automação e IA para diversos clientes de médio porte, incluindo agentes de IA para suporte via WhatsApp com treinamento RAG e chatbots com integração de pagamentos.',

        'tech-title': 'Tecnologias & Metodologias',
        'languages-frameworks': 'Linguagens & Frameworks',
        'databases': 'Bancos de Dados',
        'ai-automation': 'IA & Automação',
        'systems-tools': 'Sistemas & Ferramentas',
        'methodologies': 'Metodologias',
        'education-languages-title': 'Formação & Idiomas',
        'academic-title': 'Formação Acadêmica',
        'degree': 'Ciência da Computação',
        'university': 'Centro Universitário União das Américas Unidas',
        'in-progress': 'Em curso',
        'languages-spoken-title': 'Idiomas',
        'portuguese-level': '<strong>Português:</strong> Nativo',
        'english-level': '<strong>Inglês:</strong> Avançado',
        'intl-exp': 'Experiência em projetos internacionais',
        'pgp-title': 'PGP / GPG',
        'pgp-key-details': 'Detalhes da Chave',
        'pgp-algorithm': 'Algoritmo',
        'pgp-hardware': 'Gerada em hardware',
        'pgp-validity': 'Validade',
        'pgp-links-title': 'Chave Pública',
        'pgp-download': 'Baixar chave pública (.asc)',
        'pgp-keyserver': 'Buscar no keyserver',
        'copyright': '© 2026 Thiago Sotero Do Prado. Todos os direitos reservados.',
        'footer-tagline': 'AI Engineering · Automation · Backend · PHP'
    },
    en: {
        'name': 'Thiago Sotero Do Prado',
        'hero-subtitle': 'AI Engineering, Automation, Backend & PHP',
        'location': 'São Paulo, Brazil',
        'summary-title': 'Professional Summary',
        'summary-text': 'Development and Process Automation Specialist with extensive experience in architecting and implementing complex solutions for clients. Focus on delivering high-impact projects, from conception and requirements gathering to team management, development and deployment in cloud environments. Solid experience in international projects, applying agile methodologies such as Scrum and best practices to ensure efficiency, scalability and reduction of operational costs.',
        'expertise-title': 'Areas of Expertise',
        'skill-backend': 'Backend Development',
        'skill-architecture': 'Software Architecture',
        'skill-ai': 'Artificial Intelligence',
        'skill-automation': 'Process Automation',
        'skill-data': 'Data Administration',
        'microservices': 'Microservices',
        'system-design': 'System Design',
        'scalability': 'Scalability',
        'fine-tuning': 'Model Fine-Tuning',
        'ai-agents': 'AI Agents',
        'complex-workflows': 'Complex Workflows',
        'env-migration': 'Environment Migration',
        'data-modeling': 'Data Modeling',
        'projects-title': 'Projects & Timeline',
        'year-earlier': 'Earlier',
        'tag-client': 'client',
        'tag-oss': 'open-source',

        // Timeline 2026 - present
        'project6-title': 'Trading Education Platform',
        'project6-date': 'Feb 2026 — present',
        'project6-desc': 'Full ecosystem for a trading school: FastAPI backend, payment automation via Lastlink, omnichannel support with Chatwoot, Discord member management and WhatsApp integration via Evolution API. Complete technical PRD plus 14 development tasks.',

        // Open source 2026
        'project7-title': 'Production-Ready RAG Pipeline',
        'project7-date': 'Mar 2026',
        'project7-desc': 'Complete RAG pipeline with FastAPI, LangChain and pgvector, with CI/CD configured. Reference architecture for production-ready Retrieval-Augmented Generation systems.',

        'project8-title': 'Multi-Agent Orchestrator (Supervisor Pattern)',
        'project8-date': 'Mar 2026',
        'project8-desc': 'Implementation of the Supervisor pattern with LangGraph for orchestrating multiple specialized agents, coordinated by a central supervisor that delegates tasks based on context.',

        'project10-title': 'Computer Vision — Math for Kids',
        'project10-date': 'Nov 2025',
        'project10-desc': 'Computer vision system that teaches math to children through webcam-based gesture recognition. Combines real-time hand detection with didactic logic to gamify learning.',

        // Clients 2025
        'project11-title': 'SaaS for Trading Prop Firm',
        'project11-date': 'Nov 2025 — Jan 2026',
        'project11-desc': 'SaaS for managing proprietary trading desks. Frontend in React 18, Vite and TypeScript; FastAPI backend with PostgreSQL; and Python microservice integrating MetaTrader 5 for operations and telemetry.',

        'project12-title': 'Sales Copilot — Real-Time AI Assistant',
        'project12-date': 'Oct — Nov 2025',
        'project12-desc': 'AI copilot that listens to sales calls in real time and suggests next steps. Stack uses Deepgram for speech-to-text, LangGraph for agent orchestration, FastAPI on the backend and Vue 3 on the frontend.',

        'project13-title': 'White-Label SaaS for Barbershops',
        'project13-date': 'Jul — Sep 2025',
        'project13-desc': 'White-label platform for brand management, social media and a booking chatbot for barbershops.',

        'project14-title': 'Sports Tech — Amateur Football Platform',
        'project14-date': 'May — Jul 2025',
        'project14-desc': 'Full sports-tech platform: v3.2 data model with hybrid keys (BigAutoField + UUID), JWT-based invites, referee interface, GameOps module, and a credentials/badges system. Technical documentation plus Series A materials.',

        // Existing projects
        'project1-title': 'SC Transportes — Port Logistics Management System',
        'project1-challenge': '<strong>Challenge:</strong> Digitize and integrate a rudimentary spreadsheet-based operation, transforming it into a digital and automated workflow for ship refueling control at the Port of Santos.',
        'project1-solution': '<strong>Solution:</strong> Centralized platform that integrated all stakeholders, enabling real-time updates, organizational chart management and complete automation of the operational and financial cycle.',
        'automation': 'Automation',
        'logistics': 'Logistics Management',
        'project2-title': 'Zartte Professional — Logistics Management System',
        'project2-desc': 'Development of logistics management system for large-scale distributor, focused on automating B2B and B2C sales funnel. Robust web application that optimized the distribution chain and provided advanced tools for commercial management.',
        'distribution': 'Distribution',
        'project3-title': 'Brokerage Automation System',
        'project3-date': 'Mar — May 2025',
        'project3-desc': 'Web system for automating brokerage calculations, processing data from purchases and sales of financial assets in real time. API integration with banking institutions, webhooks for notifications and multimodal AI to interpret requests.',
        'project4-title': 'AI Training Dashboard',
        'project4-date': 'Feb — Mar 2025',
        'project4-desc': 'Modern interface to optimize the AI model training process. System with advanced queue methods for data input and offline AI to pre-process and format data for Fine-Tuning via OpenAI API.',
        'project5-title': 'AI Agents and Low-Code Automation',
        'project5-date': 'Apr — Jul 2025',
        'project5-desc': 'Implementation of automation and AI solutions for several medium-sized clients, including AI agents for support via WhatsApp with RAG training and chatbots with payment integration.',

        'tech-title': 'Technologies & Methodologies',
        'languages-frameworks': 'Languages & Frameworks',
        'databases': 'Databases',
        'ai-automation': 'AI & Automation',
        'systems-tools': 'Systems & Tools',
        'methodologies': 'Methodologies',
        'education-languages-title': 'Education & Languages',
        'academic-title': 'Academic Education',
        'degree': 'Computer Science',
        'university': 'Centro Universitário União das Américas Unidas',
        'in-progress': 'In progress',
        'languages-spoken-title': 'Languages',
        'portuguese-level': '<strong>Portuguese:</strong> Native',
        'english-level': '<strong>English:</strong> Advanced',
        'intl-exp': 'Experience in international projects',
        'pgp-title': 'PGP / GPG',
        'pgp-key-details': 'Key Details',
        'pgp-algorithm': 'Algorithm',
        'pgp-hardware': 'Hardware-generated',
        'pgp-validity': 'Validity',
        'pgp-links-title': 'Public Key',
        'pgp-download': 'Download public key (.asc)',
        'pgp-keyserver': 'Search on keyserver',
        'copyright': '© 2026 Thiago Sotero Do Prado. All rights reserved.',
        'footer-tagline': 'AI Engineering · Automation · Backend · PHP'
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    const flag = document.getElementById('language-flag');
    const text = document.getElementById('language-text');

    if (currentLanguage === 'pt') {
        flag.textContent = '🇧🇷';
        text.textContent = 'PT';
        document.documentElement.lang = 'pt-BR';
    } else {
        flag.textContent = '🇺🇸';
        text.textContent = 'EN';
        document.documentElement.lang = 'en';
    }

    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', updateLanguage);
