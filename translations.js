// Language Translation System
const translations = {
    pt: {
        'name': 'Thiago Sotero Do Prado',
        'hero-subtitle': 'Especialista em RPA, Inteligência Artificial e Desenvolvimento Backend',
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
        'projects-title': 'Projetos Relevantes',
        'project1-title': 'SC Transportes - Sistema de Gestão Logística Portuária',
        'project1-challenge': '<strong>Desafio:</strong> Digitalizar e integrar uma operação rústica baseada em planilhas, transformando-a em um fluxo de trabalho digital e automatizado para controle de reabastecimento de navios no Porto de Santos.',
        'project1-solution': '<strong>Solução:</strong> Plataforma centralizada que integrou todos os stakeholders, permitindo atualizações em tempo real, gerenciamento de organograma e automação completa do ciclo operacional e financeiro.',
        'automation': 'Automação',
        'logistics': 'Gestão Logística',
        'project2-title': 'Zartte Professional - Sistema de Gestão Logística',
        'project2-desc': 'Desenvolvimento de sistema de gestão logística para distribuidor de grande porte, focado na automação do funil de vendas B2B e B2C. Aplicação web robusta que otimizou a cadeia de distribuição e forneceu ferramentas avançadas para gestão comercial.',
        'distribution': 'Distribuição',
        'project3-title': 'Sistema de Automação de Corretagem',
        'project3-desc': 'Sistema web para automação de cálculos de corretagem, processando dados de compras e vendas de ativos financeiros em tempo real. Integração via API com instituições bancárias, webhooks para notificações e IA multimodal para interpretar solicitações.',
        'project4-title': 'Dashboard para Treinamento de IA',
        'project4-desc': 'Interface moderna para otimizar o processo de treinamento de modelos de IA. Sistema com métodos avançados de fila para input de dados e IA offline para pré-processar e formatar dados para Fine-Tuning via OpenAI API.',
        'project5-title': 'Agentes de IA e Automação Low-Code',
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
        'copyright': '© 2026 Thiago Sotero Do Prado. Todos os direitos reservados.',
        'footer-tagline': 'Especialista em RPA, IA & Desenvolvimento Backend'
    },
    en: {
        'name': 'Thiago Sotero Do Prado',
        'hero-subtitle': 'Specialist in RPA, Artificial Intelligence and Backend Development',
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
        'projects-title': 'Relevant Projects',
        'project1-title': 'SC Transportes - Port Logistics Management System',
        'project1-challenge': '<strong>Challenge:</strong> Digitize and integrate a rudimentary spreadsheet-based operation, transforming it into a digital and automated workflow for ship refueling control at the Port of Santos.',
        'project1-solution': '<strong>Solution:</strong> Centralized platform that integrated all stakeholders, enabling real-time updates, organizational chart management and complete automation of the operational and financial cycle.',
        'automation': 'Automation',
        'logistics': 'Logistics Management',
        'project2-title': 'Zartte Professional - Logistics Management System',
        'project2-desc': 'Development of logistics management system for large-scale distributor, focused on automating B2B and B2C sales funnel. Robust web application that optimized the distribution chain and provided advanced tools for commercial management.',
        'distribution': 'Distribution',
        'project3-title': 'Brokerage Automation System',
        'project3-desc': 'Web system for automating brokerage calculations, processing data from purchases and sales of financial assets in real time. API integration with banking institutions, webhooks for notifications and multimodal AI to interpret requests.',
        'project4-title': 'AI Training Dashboard',
        'project4-desc': 'Modern interface to optimize the AI model training process. System with advanced queue methods for data input and offline AI to pre-process and format data for Fine-Tuning via OpenAI API.',
        'project5-title': 'AI Agents and Low-Code Automation',
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
        'copyright': '© 2026 Thiago Sotero Do Prado. All rights reserved.',
        'footer-tagline': 'Specialist in RPA, AI & Backend Development'
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
