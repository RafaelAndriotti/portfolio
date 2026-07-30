const GITHUB_USER = 'https://github.com/RafaelAndriotti'

export const navigation = [
  { label: { pt: 'Sobre', en: 'About' }, href: '#sobre' },
  { label: { pt: 'Habilidades', en: 'Skills' }, href: '#habilidades' },
  { label: { pt: 'Trajetória', en: 'Path' }, href: '#experiencia' },
  { label: { pt: 'Projetos', en: 'Work' }, href: '#projetos' },
  { label: { pt: 'Currículo', en: 'Résumé' }, href: '#curriculo' },
]

export const technologies = [
  'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Java', 'Python', 'APIs REST',
]

export const hero = {
  eyebrow: { pt: 'Disponível para novos projetos', en: 'Available for new projects' },
  titleStart: { pt: 'Eu construo o back-end que ', en: 'I build the back-end that ' },
  titleAccent: { pt: 'sustenta o produto.', en: 'holds the product up.' },
  description: {
    pt: 'Sou Rafael, desenvolvedor back-end. Trabalho com APIs REST em Node.js e TypeScript, modelagem de dados em PostgreSQL e MongoDB, e código que ainda faz sentido seis meses depois.',
    en: "I'm Rafael, a back-end developer. I work with REST APIs in Node.js and TypeScript, data modelling in PostgreSQL and MongoDB, and code that still makes sense six months later.",
  },
  primaryCta: { pt: 'Ver projetos', en: 'See the work' },
  secondaryCta: { pt: 'Mais sobre mim', en: 'More about me' },
}

export const about = {
  label: { pt: 'Sobre mim', en: 'About me' },
  titleStart: { pt: 'Back-end é onde eu ', en: 'Back-end is where I ' },
  titleAccent: { pt: 'escolhi trabalhar.', en: 'chose to work.' },
  paragraphs: [
    {
      pt: 'Trabalho na camada que fica atrás da interface: rotas, regras de negócio e banco de dados. É onde as decisões custam caro se forem mal tomadas, e é a parte que eu gosto de resolver.',
      en: "I work on the layer behind the interface: routes, business rules and databases. It's where bad decisions get expensive — and it's the part I like solving.",
    },
    {
      pt: 'Aprendi construindo. Meus projetos começam de um diretório vazio, não de um boilerplate, porque é assim que eu entendo o que acontece entre a requisição e a resposta.',
      en: "I learned by building. My projects start from an empty directory, not a boilerplate, because that's how I understand what happens between the request and the response.",
    },
  ],
  link: { pt: 'Conheça minha trajetória', en: 'See how I got here' },
  stats: [
    { value: '+15', label: { pt: 'Repositórios públicos', en: 'Public repositories' } },
    { value: '3', label: { pt: 'APIs REST próprias', en: 'REST APIs of my own' } },
    { value: '4', label: { pt: 'Linguagens em uso', en: 'Languages in use' } },
  ],
}

export const skills = {
  label: { pt: 'Habilidades', en: 'Skills' },
  titleStart: { pt: 'O que eu uso, e ', en: 'What I use, and ' },
  titleAccent: { pt: 'para quê.', en: 'what for.' },
  intro: {
    pt: 'Três frentes que aparecem em praticamente todo serviço que eu construo, com as ferramentas que uso em cada uma.',
    en: 'Three fronts that show up in practically every service I build, with the tools I use on each.',
  },
  evidenceLabel: { pt: 'Como aplico', en: 'How I apply it' },
}

export const skillGroups = [
  {
    title: { pt: 'APIs e serviços REST', en: 'REST APIs and services' },
    description: {
      pt: 'Endpoints previsíveis, com contratos claros, status HTTP corretos e respostas consistentes.',
      en: 'Predictable endpoints with clear contracts, correct HTTP statuses and consistent responses.',
    },
    evidence: {
      pt: 'Construo APIs em Node.js e Express organizadas em camadas — rotas, validação, controller e acesso a dados.',
      en: 'I build layered APIs in Node.js and Express — routes, validation, controller and data access.',
    },
    tools: ['Node.js', 'Express', 'TypeScript'],
  },
  {
    title: { pt: 'Dados e persistência', en: 'Data and persistence' },
    description: {
      pt: 'Modelagem relacional e não relacional pensada para consultas eficientes e dados íntegros.',
      en: 'Relational and non-relational modelling built for efficient queries and sound data.',
    },
    evidence: {
      pt: 'Trabalho com PostgreSQL, MongoDB e SQLite, usando ORMs quando ajudam e SQL direto quando é mais claro.',
      en: 'I work with PostgreSQL, MongoDB and SQLite — ORMs when they help, raw SQL when it reads clearer.',
    },
    tools: ['PostgreSQL', 'MongoDB', 'Sequelize'],
  },
  {
    title: { pt: 'Confiabilidade e segurança', en: 'Reliability and security' },
    description: {
      pt: 'A parte que o usuário não vê, mas sente: validação de entrada, erros tratados e acesso protegido.',
      en: "The part users don't see but feel: input validation, handled errors and protected access.",
    },
    evidence: {
      pt: 'Aplico validação com Zod, autenticação com JWT e hash de senhas, além de tratamento centralizado de erros.',
      en: 'I use Zod validation, JWT auth and password hashing, plus centralised error handling.',
    },
    tools: ['Zod', 'JWT', 'bcrypt'],
  },
]

export const experienceSection = {
  label: { pt: 'Minha trajetória', en: 'My path' },
  titleStart: { pt: 'Experiência construída entre ', en: 'Experience built between ' },
  titleAccent: { pt: 'estudo e prática.', en: 'study and practice.' },
  intro: {
    pt: 'Não venho de anos de empresa. Venho de projetos que eu levantei do zero, quebrei e arrumei até funcionar direito.',
    en: "I don't come from years at a company. I come from projects I stood up from scratch, broke, and fixed until they ran right.",
  },
}

export const experiences = [
  {
    number: '01',
    category: { pt: 'Suporte e ERP', en: 'Support and ERP' },
    period: { pt: '03/2025 – Atual', en: '03/2025 – present' },
    title: { pt: 'Suporte Técnico de TI — Prefeitura de Guaíba', en: 'IT Support Technician — Guaíba city hall' },
    description: {
      pt: 'Suporte ao ERP IPM Sistemas: gestão de usuários e permissões, organização de centros de custo, diagnóstico de falhas e interlocução com secretarias para entender regras de negócio e fluxos internos.',
      en: 'Supporting the IPM Sistemas ERP: user and permission management, cost-centre organisation, fault diagnosis, and working with departments to understand business rules and internal flows.',
    },
    tags: ['IPM Sistemas', 'Active Directory', 'Redes'],
  },
  {
    number: '02',
    category: { pt: 'Projetos autorais', en: 'Personal projects' },
    period: { pt: 'Prática contínua', en: 'Ongoing practice' },
    title: { pt: 'Construção de APIs REST do zero', en: 'Building REST APIs from scratch' },
    description: {
      pt: 'Desenvolvimento de serviços em Node.js e Express sem boilerplate pronto, para entender de fato roteamento, middlewares, validação e o ciclo completo de uma requisição.',
      en: 'Services in Node.js and Express with no ready-made boilerplate, to really understand routing, middleware, validation and the full request cycle.',
    },
    tags: ['Node.js', 'Express', 'TypeScript'],
  },
  {
    number: '03',
    category: { pt: 'Estudos', en: 'Studies' },
    period: { pt: 'Aprendizado contínuo', en: 'Continuous learning' },
    title: { pt: 'Fundamentos e múltiplas linguagens', en: 'Fundamentals across languages' },
    description: {
      pt: 'Base em programação orientada a objetos com Java e automações em Python, reforçando lógica, arquitetura e boas práticas independentes de framework.',
      en: 'Object-oriented foundations in Java and automations in Python, reinforcing logic, architecture and good practice regardless of framework.',
    },
    tags: ['Java', 'Python', 'POO'],
  },
]

export const projectsSection = {
  label: { pt: 'Projetos selecionados', en: 'Selected work' },
  titleStart: { pt: 'Serviços que eu construí ', en: 'Services I built ' },
  titleAccent: { pt: 'de ponta a ponta.', en: 'end to end.' },
  hint: {
    pt: 'Passe o mouse para ver as ações. Abra o estudo de caso para o raciocínio por trás.',
    en: 'Hover to reveal the actions. Open the case study for the reasoning behind it.',
  },
  caseStudy: { pt: 'Estudo de caso', en: 'Case study' },
  viewCode: { pt: 'Ver no GitHub', en: 'View on GitHub' },
  openCode: { pt: 'Ver o código', en: 'View the code' },
  problem: { pt: 'O problema', en: 'The problem' },
  built: { pt: 'O que construí', en: 'What I built' },
  learned: { pt: 'O que aprendi', en: 'What I learned' },
  otherRepos: { pt: 'Outros repositórios', en: 'Other repositories' },
  fullProfile: { pt: 'Ver perfil completo', en: 'See the full profile' },
  projectWord: { pt: 'Projeto', en: 'Project' },
}

export const featuredProjects = [
  {
    number: '01',
    title: 'API Livraria',
    description: {
      pt: 'API REST para gerenciar livros, autores e editoras. CRUD completo com paginação, filtros de busca, validação de entrada e tratamento centralizado de erros que traduz códigos do Postgres em respostas claras.',
      en: 'A REST API to manage books, authors and publishers. Full CRUD with pagination, search filters, input validation and centralised error handling that translates Postgres codes into clear responses.',
    },
    tags: ['Node.js', 'Express 5', 'Supabase', 'Zod'],
    url: `${GITHUB_USER}/API-Livraria`,
    endpoint: {
      method: 'GET',
      path: '/livros?genero=ficcao&page=2',
      status: '200 OK',
      lines: ['"total": 48,', '"page": 2,', '"data": [ … ]'],
    },
    caseStudy: {
      problem: {
        pt: 'Um acervo de livraria cruza três entidades — livro, autor e editora. Sem contrato claro, cada consulta devolve um formato diferente e o cliente da API precisa adivinhar.',
        en: 'A bookstore catalogue crosses three entities — book, author, publisher. Without a clear contract every query returns a different shape and the API client has to guess.',
      },
      built: {
        pt: 'CRUD completo em Express 5 com validação de entrada via Zod, paginação e filtros de busca aplicados na consulta, e um middleware de erro que traduz códigos do Postgres em mensagens que o consumidor entende.',
        en: 'Full CRUD in Express 5 with Zod input validation, pagination and search filters applied in the query, and an error middleware that turns Postgres codes into messages a consumer understands.',
      },
      learned: {
        pt: 'Erro tratado é parte da interface pública. Depois que centralizei o tratamento, a API parou de vazar detalhe de banco para quem a consome.',
        en: 'Handled errors are part of the public interface. Once handling was centralised, the API stopped leaking database detail to its consumers.',
      },
    },
  },
  {
    number: '02',
    title: 'VitalTrack',
    description: {
      pt: 'Aplicativo full-stack de saúde e treino em React Native com back-end próprio em TypeScript. Autenticação JWT com bcrypt, cálculo de macronutrientes e PostgreSQL modelado com tabelas relacionadas, índices e triggers.',
      en: 'A full-stack health and training app in React Native with its own TypeScript back-end. JWT auth with bcrypt, macronutrient calculation and PostgreSQL modelled with related tables, indexes and triggers.',
    },
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'JWT'],
    url: `${GITHUB_USER}/VitalTrack`,
    endpoint: {
      method: 'POST',
      path: '/auth/login',
      status: '200 OK',
      lines: ['"token": "eyJhbGci…",', '"expiresIn": "7d",', '"user": { … }'],
    },
    caseStudy: {
      problem: {
        pt: 'Dado de saúde e treino é sensível e relacional: usuário, treinos, alimentos e metas se cruzam. Um campo solto ou uma rota sem proteção compromete o histórico inteiro.',
        en: 'Health and training data is sensitive and relational: users, workouts, foods and goals all cross. One loose field or unprotected route compromises the whole history.',
      },
      built: {
        pt: 'API própria em Node.js, Express e TypeScript com JWT e bcrypt, módulo de treinos com séries e histórico, módulo de dieta com cálculo de macros e controle de água, e atualizações otimistas na interface.',
        en: 'My own API in Node.js, Express and TypeScript with JWT and bcrypt, a workout module with sets and history, a diet module with macro calculation and water tracking, and optimistic UI updates.',
      },
      learned: {
        pt: 'Tipagem forte não é burocracia: metade dos bugs que eu caçava em JavaScript nunca chegaram a existir aqui.',
        en: "Strong typing isn't bureaucracy: half the bugs I used to hunt in JavaScript never existed here.",
      },
    },
  },
  {
    number: '03',
    title: 'ToDoList API',
    description: {
      pt: 'API RESTful de tarefas em arquitetura MVC, com cinco endpoints CRUD, schemas do Mongoose, middlewares próprios, tratamento global de erros e configuração por variáveis de ambiente.',
      en: 'A task REST API in MVC, with five CRUD endpoints, Mongoose schemas, custom middleware, global error handling and environment-variable configuration.',
    },
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    url: `${GITHUB_USER}/ToDoList`,
    endpoint: {
      method: 'PUT',
      path: '/tasks/:id',
      status: '200 OK',
      lines: ['"id": "65f1c2…",', '"done": true,', '"updatedAt": "…"'],
    },
    caseStudy: {
      problem: {
        pt: 'Primeira API própria: precisava de um escopo pequeno o bastante para terminar e grande o bastante para exercitar o ciclo completo de uma requisição REST.',
        en: 'My first API of my own: a scope small enough to finish and big enough to exercise the full REST request cycle.',
      },
      built: {
        pt: 'Cinco endpoints CRUD organizados em routes, controllers, models, config, err e middlewares, com classes de erro customizadas, middleware de 404, ESLint e testes manuais de todos os cenários no Insomnia.',
        en: 'Five CRUD endpoints organised into routes, controllers, models, config, err and middlewares, with custom error classes, a 404 middleware, ESLint and manual testing of every scenario in Insomnia.',
      },
      learned: {
        pt: 'Modelagem de documento é decisão de produto, não de banco: o formato do dado define o que a API consegue responder depois.',
        en: "Document modelling is a product decision, not a database one: the data's shape defines what the API can answer later.",
      },
    },
  },
]

export const repositories = [
  {
    name: 'bibliotecaDeUtilidades',
    description: {
      pt: 'Pacote npm de funções utilitárias de validação, com validaEmail() e validaSenha() e regras de complexidade configuráveis.',
      en: 'An npm package of validation utilities, with validaEmail() and validaSenha() and configurable complexity rules.',
    },
    language: 'JavaScript',
    stack: ['npm', 'Node.js'],
    url: `${GITHUB_USER}/biliotecaDeUtilidades`,
  },
  {
    name: 'dateLib',
    description: {
      pt: 'Biblioteca de datas com adição de dias, meses e anos, diferença entre datas e formatação em múltiplos padrões.',
      en: 'A date library with day, month and year addition, date diffing and formatting in several patterns.',
    },
    language: 'JavaScript',
    stack: ['Biblioteca', 'Datas'],
    url: `${GITHUB_USER}/dateLib`,
  },
  {
    name: 'meal-prep',
    description: {
      pt: 'Back-end de planejamento de refeições com Sequelize sobre SQLite, usando migrations e seeders.',
      en: 'A meal-planning back-end with Sequelize over SQLite, using migrations and seeders.',
    },
    language: 'JavaScript',
    stack: ['Sequelize', 'SQLite'],
    url: `${GITHUB_USER}/meal-prep`,
  },
  {
    name: 'Quadro-Kanban',
    description: {
      pt: 'Quadro de tarefas dividido entre back-end e front-end, com a API respondendo às movimentações do quadro.',
      en: 'A task board split between back-end and front-end, with the API answering every board move.',
    },
    language: 'JavaScript',
    stack: ['Node.js', 'API REST'],
    url: `${GITHUB_USER}/Quadro-Kanban`,
  },
  {
    name: 'Monitor-de-Atividades',
    description: {
      pt: 'Painel para registro de atividades com servidor Node.js e persistência local em SQLite.',
      en: 'An activity-logging panel with a Node.js server and local SQLite persistence.',
    },
    language: 'JavaScript',
    stack: ['Node.js', 'SQLite'],
    url: `${GITHUB_USER}/Monitor-de-Atividades`,
  },
  {
    name: 'bot-promocoes',
    description: {
      pt: 'Bot que acompanha promoções de jogos na Steam, rodando como serviço automatizado em Node.js.',
      en: 'A bot that tracks Steam game deals, running as an automated Node.js service.',
    },
    language: 'JavaScript',
    stack: ['Node.js', 'Automação'],
    url: `${GITHUB_USER}/bot-promocoes`,
  },
  {
    name: 'cofrinhoUninter',
    description: {
      pt: 'Cofrinho multimoeda em Java, explorando herança e polimorfismo em programação orientada a objetos.',
      en: 'A multi-currency piggy bank in Java, exploring inheritance and polymorphism in OOP.',
    },
    language: 'Java',
    stack: ['POO', 'Herança'],
    url: `${GITHUB_USER}/cofrinhoUninter`,
  },
  {
    name: 'restaurante-express',
    description: {
      pt: 'Sistema de restaurante em Python, construído junto com os estudos da linguagem.',
      en: 'A restaurant system in Python, built alongside my studies of the language.',
    },
    language: 'Python',
    stack: ['POO', 'Estudos'],
    url: `${GITHUB_USER}/restaurante-express`,
  },
]

export const resume = {
  path: '/curriculo-rafael-andriotti.pdf',
  available: true,
  label: { pt: 'Currículo', en: 'Résumé' },
  kicker: { pt: 'Perfil profissional', en: 'Professional profile' },
  title: { pt: 'Minha trajetória, reunida em uma página.', en: 'My path, gathered onto one page.' },
  description: {
    pt: 'APIs RESTful em Node.js e Express, integração com bancos relacionais e não relacionais, e visão de negócio construída no suporte a sistemas ERP.',
    en: 'RESTful APIs in Node.js and Express, integration with relational and non-relational databases, and business sense built supporting ERP systems.',
  },
  highlights: [
    { pt: 'APIs RESTful, CRUD e arquitetura em camadas', en: 'RESTful APIs, CRUD and layered architecture' },
    { pt: 'Node.js · Express · TypeScript · Java', en: 'Node.js · Express · TypeScript · Java' },
    { pt: 'PostgreSQL · Supabase · MongoDB', en: 'PostgreSQL · Supabase · MongoDB' },
  ],
  view: { pt: 'Visualizar currículo', en: 'View résumé' },
  download: { pt: 'Baixar PDF', en: 'Download PDF' },
  note: { pt: 'PDF · 3 páginas', en: 'PDF · 3 pages' },
  role: { pt: 'Desenvolvedor Back-end', en: 'Back-end Developer' },
  rows: [
    {
      label: { pt: 'Experiência', en: 'Experience' },
      value: { pt: 'Prefeitura de Guaíba · 03/2025 – Atual', en: 'Guaíba city hall · 03/2025 – present' },
    },
    {
      label: { pt: 'Formação', en: 'Education' },
      value: { pt: 'ADS · Uninter · previsão 09/2027', en: 'Systems Analysis · Uninter · expected 09/2027' },
    },
    {
      label: { pt: 'Cursos', en: 'Courses' },
      value: { pt: 'Alura · Node.js com Express · Java e POO', en: 'Alura · Node.js with Express · Java and OOP' },
    },
  ],
}

export const contact = {
  email: 'rafael.rebelo47@gmail.com',
  phone: '51 99995-9163',
  github: GITHUB_USER,
  linkedin: 'https://www.linkedin.com/in/rafaelandriotti/',
  eyebrow: { pt: 'Tem um problema para resolver?', en: 'Got a problem to solve?' },
  title: { pt: 'Vamos conversar sobre o seu back-end.', en: "Let's talk about your back-end." },
  description: {
    pt: 'Estou aberto a oportunidades e a boas conversas sobre APIs, banco de dados e arquitetura. Me conte o que você está construindo.',
    en: "I'm open to opportunities and to good conversations about APIs, databases and architecture. Tell me what you're building.",
  },
  cta: { pt: 'Enviar um e-mail', en: 'Send an email' },
}

export const footer = {
  note: { pt: 'Desenvolvido com React e muita curiosidade.', en: 'Built with React and a lot of curiosity.' },
}

export const ui = {
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  headerCta: { pt: 'Vamos conversar', en: "Let's talk" },
  contactNav: { pt: 'Contato', en: 'Contact' },
  play: { pt: 'Reproduzir', en: 'Play' },
  pause: { pt: 'Pausar', en: 'Pause' },
  close: { pt: 'Fechar', en: 'Close' },
  theme: { pt: 'Alternar tema', en: 'Toggle theme' },
  menu: { pt: 'Menu', en: 'Menu' },
}
