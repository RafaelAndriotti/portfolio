const GITHUB_USER = 'https://github.com/RafaelAndriotti'

export const navigation = [
  { label: { pt: 'Sobre', en: 'About' }, href: '#sobre' },
  { label: { pt: 'Habilidades', en: 'Skills' }, href: '#habilidades' },
  { label: { pt: 'Trajetória', en: 'Path' }, href: '#experiencia' },
  { label: { pt: 'Projetos', en: 'Work' }, href: '#projetos' },
  { label: { pt: 'Currículo', en: 'Résumé' }, href: '#curriculo' },
]

const WHERE = { pt: 'Projetos', en: 'Projects' }
const FOR = { pt: 'Uso para', en: 'Used for' }
const WITH = { pt: 'Junto com', en: 'Alongside' }

export const techSection = {
  label: { pt: 'Stack', en: 'Stack' },
  title: { pt: 'As ferramentas, e onde eu uso cada uma.', en: 'The tools, and where I use each one.' },
  hint: {
    pt: 'Arraste para girar, ou use as setas do teclado.',
    en: 'Drag to spin, or use the arrow keys.',
  },
}

export const techStack = [
  {
    icon: 'Nodejs',
    name: 'Node.js',
    category: { pt: 'Runtime', en: 'Runtime' },
    meta: [
      { label: WHERE, value: 'API-Livraria · ToDoList · VitalTrack' },
      { label: FOR, value: { pt: 'Servidor HTTP e camada de rotas', en: 'HTTP server and routing layer' } },
      { label: WITH, value: 'Express' },
    ],
  },
  {
    icon: 'Express',
    name: 'Express',
    category: { pt: 'Framework web', en: 'Web framework' },
    meta: [
      { label: WHERE, value: 'API-Livraria · ToDoList · VitalTrack' },
      { label: FOR, value: { pt: 'Rotas, middlewares e erro centralizado', en: 'Routes, middleware and centralised errors' } },
      { label: WITH, value: 'Node.js · Zod' },
    ],
  },
  {
    icon: 'TypeScript',
    name: 'TypeScript',
    category: { pt: 'Linguagem', en: 'Language' },
    meta: [
      { label: WHERE, value: 'VitalTrack' },
      { label: FOR, value: { pt: 'Tipagem da API ponta a ponta', en: 'End-to-end typing across the API' } },
      { label: WITH, value: 'Express · Node.js' },
    ],
  },
  {
    icon: 'PostgreSQL',
    name: 'PostgreSQL',
    category: { pt: 'Banco relacional', en: 'Relational database' },
    meta: [
      { label: WHERE, value: 'API-Livraria · VitalTrack · GLPI' },
      { label: FOR, value: { pt: 'Modelagem relacional, índices e triggers', en: 'Relational modelling, indexes and triggers' } },
      { label: WITH, value: 'Prisma · Docker' },
    ],
  },
  {
    icon: 'Prisma',
    name: 'Prisma',
    category: { pt: 'ORM', en: 'ORM' },
    meta: [
      { label: WHERE, value: 'API-Livraria' },
      { label: FOR, value: { pt: 'Migrations e schema versionado', en: 'Migrations and versioned schema' } },
      { label: WITH, value: 'PostgreSQL' },
    ],
  },
  {
    icon: 'MongoDB',
    name: 'MongoDB',
    category: { pt: 'Banco de documentos', en: 'Document database' },
    meta: [
      { label: WHERE, value: 'ToDoList' },
      { label: FOR, value: { pt: 'Schemas e validação na camada de model', en: 'Schemas and validation at the model layer' } },
      { label: WITH, value: 'Mongoose' },
    ],
  },
  {
    icon: 'Docker',
    name: 'Docker',
    category: { pt: 'Infraestrutura', en: 'Infrastructure' },
    meta: [
      { label: WHERE, value: { pt: 'API-Livraria · Home lab', en: 'API-Livraria · Home lab' } },
      { label: FOR, value: { pt: 'Subir o banco e hospedar as aplicações', en: 'Running the database and hosting the apps' } },
      { label: WITH, value: 'PostgreSQL · Nginx' },
    ],
  },
  {
    icon: 'JWT',
    name: 'JWT',
    category: { pt: 'Autenticação', en: 'Authentication' },
    meta: [
      { label: WHERE, value: 'API-Livraria · VitalTrack' },
      { label: FOR, value: { pt: 'Proteger as rotas de escrita', en: 'Guarding the write routes' } },
      { label: WITH, value: 'bcrypt' },
    ],
  },
  {
    icon: 'Zod',
    name: 'Zod',
    category: { pt: 'Validação', en: 'Validation' },
    meta: [
      { label: WHERE, value: 'API-Livraria' },
      { label: FOR, value: { pt: 'Validar a entrada antes do controller', en: 'Validating input before the controller' } },
      { label: WITH, value: 'Express' },
    ],
  },
  {
    icon: 'Java',
    name: 'Java',
    category: { pt: 'Linguagem', en: 'Language' },
    meta: [
      { label: WHERE, value: 'cofrinhoUninter' },
      { label: FOR, value: { pt: 'Herança, polimorfismo e encapsulamento', en: 'Inheritance, polymorphism and encapsulation' } },
      { label: WITH, value: { pt: 'Spring Boot (em andamento)', en: 'Spring Boot (in progress)' } },
    ],
  },
  {
    icon: 'Python',
    name: 'Python',
    category: { pt: 'Linguagem', en: 'Language' },
    meta: [
      { label: WHERE, value: 'restaurante-express · livraria' },
      { label: FOR, value: { pt: 'Exercícios de lógica e orientação a objetos', en: 'Logic and object-oriented exercises' } },
      { label: WITH, value: { pt: 'Estudos da faculdade', en: 'University coursework' } },
    ],
  },
  {
    icon: 'Debian',
    name: 'Debian',
    category: { pt: 'Servidor', en: 'Server' },
    meta: [
      { label: WHERE, value: { pt: 'Home lab', en: 'Home lab' } },
      { label: FOR, value: { pt: 'Servidor headless com SSH e snapshots', en: 'Headless server with SSH and snapshots' } },
      { label: WITH, value: 'Docker · Nginx' },
    ],
  },
  {
    icon: 'Git',
    name: 'Git',
    category: { pt: 'Versionamento', en: 'Version control' },
    meta: [
      { label: WHERE, value: { pt: 'Todos os projetos', en: 'Every project' } },
      { label: FOR, value: { pt: 'Branch por feature e revisão via pull request', en: 'Feature branches and pull-request review' } },
      { label: WITH, value: 'GitHub' },
    ],
  },
]

export const hero = {
  eyebrow: { pt: 'Disponível para novos projetos', en: 'Available for new projects' },
  titleStart: { pt: 'Eu construo o back-end que ', en: 'I build the back-end that ' },
  titleAccent: { pt: 'sustenta o produto.', en: 'holds the product up.' },
  description: {
    pt: 'Sou Rafael, desenvolvedor back-end em Guaíba, RS. Trabalho com APIs REST em Node.js e TypeScript, modelagem em PostgreSQL e MongoDB, Docker no ambiente de desenvolvimento, e código que ainda faz sentido seis meses depois.',
    en: "I'm Rafael, a back-end developer based in Guaíba, Brazil. I work with REST APIs in Node.js and TypeScript, modelling in PostgreSQL and MongoDB, Docker in the dev environment, and code that still makes sense six months later.",
  },
  primaryCta: { pt: 'Ver projetos', en: 'See the work' },
  secondaryCta: { pt: 'Mais sobre mim', en: 'More about me' },
}

export const spark = {
  kicker: { pt: 'A quatro mãos', en: 'Four-handed' },
  caption: {
    pt: 'A ideia parte de mim; o Claude encurta o caminho até o código rodando.',
    en: 'The idea starts with me; Claude shortens the path to running code.',
  },
  human: { pt: 'Humano', en: 'Human' },
  machine: { pt: 'Claude', en: 'Claude' },
  alt: {
    pt: 'Duas mãos quase se tocando, como na Criação de Adão: à esquerda a mão humana, à direita a mão da máquina, com uma faísca no vão entre os indicadores.',
    en: 'Two hands almost touching, as in the Creation of Adam: the human hand on the left, the machine hand on the right, with a spark in the gap between the index fingers.',
  },
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
      pt: 'Modelo em PostgreSQL com Prisma e em MongoDB com Mongoose, versionando o schema por migrations e subindo o banco em Docker.',
      en: 'I model in PostgreSQL with Prisma and in MongoDB with Mongoose, versioning the schema through migrations and running the database in Docker.',
    },
    tools: ['PostgreSQL', 'Prisma', 'MongoDB', 'Docker'],
  },
  {
    title: { pt: 'Confiabilidade e segurança', en: 'Reliability and security' },
    description: {
      pt: 'A parte que o usuário não vê, mas sente: validação de entrada, erros tratados e acesso protegido.',
      en: "The part users don't see but feel: input validation, handled errors and protected access.",
    },
    evidence: {
      pt: 'Valido entrada com Zod, protejo rotas de escrita com JWT e bcrypt, e centralizo o tratamento de erros para a API não vazar detalhe de banco.',
      en: 'I validate input with Zod, guard write routes with JWT and bcrypt, and centralise error handling so the API never leaks database detail.',
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
      pt: 'Atendo servidores de RH, compras, protocolo e financeiro no ERP IPM (Atende.Net), traduzindo fluxos administrativos em requisitos. Conduzo a implantação do GLPI, com o modelo de concessões de acesso em PostgreSQL usando validade temporal e histórico não destrutivo, e reorganizei os centros de custo que quebravam a integridade dos relatórios financeiros.',
      en: 'I support HR, procurement, records and finance staff on the IPM ERP (Atende.Net), turning administrative flows into requirements. I lead the GLPI rollout, with the access-grant model in PostgreSQL using temporal validity and non-destructive history, and I reorganised the cost centres that were breaking financial report integrity.',
    },
    tags: ['IPM Sistemas', 'PostgreSQL', 'Active Directory', 'GLPI'],
  },
  {
    number: '02',
    category: { pt: 'Projetos autorais', en: 'Personal projects' },
    period: { pt: 'Prática contínua', en: 'Ongoing practice' },
    title: { pt: 'Construção de APIs REST do zero', en: 'Building REST APIs from scratch' },
    description: {
      pt: 'Serviços em Node.js e Express sem boilerplate pronto, organizados em camadas, com banco em Docker, schema versionado por migrations e rotas de escrita protegidas por JWT.',
      en: 'Services in Node.js and Express with no ready-made boilerplate, organised in layers, with the database in Docker, schema versioned through migrations and write routes guarded by JWT.',
    },
    tags: ['Node.js', 'Express', 'Prisma', 'Docker'],
  },
  {
    number: '03',
    category: { pt: 'Infraestrutura', en: 'Infrastructure' },
    period: { pt: 'Home lab', en: 'Home lab' },
    title: { pt: 'Servidor Debian para hospedar o que eu construo', en: 'A Debian server to host what I build' },
    description: {
      pt: 'Provisionei um servidor Linux headless com rede em bridge, acesso por SSH e cadeia de snapshots para rollback. Docker como runtime das aplicações e Nginx como proxy reverso na frente.',
      en: 'I provisioned a headless Linux server with bridged networking, SSH access and a snapshot chain for rollback. Docker as the application runtime, with Nginx as the reverse proxy in front.',
    },
    tags: ['Debian', 'Docker', 'Nginx', 'SSH'],
  },
  {
    number: '04',
    category: { pt: 'Estudos', en: 'Studies' },
    period: { pt: 'Aprendizado contínuo', en: 'Continuous learning' },
    title: { pt: 'Fundamentos e múltiplas linguagens', en: 'Fundamentals across languages' },
    description: {
      pt: 'Base de orientação a objetos em Java e automações em Python. Cursando Análise e Desenvolvimento de Sistemas na Uninter, com Spring Boot e testes automatizados com Jest em andamento.',
      en: 'Object-oriented foundations in Java and automations in Python. Studying Systems Analysis and Development at Uninter, with Spring Boot and automated testing in Jest currently in progress.',
    },
    tags: ['Java', 'Python', 'Spring Boot', 'Jest'],
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
  galleryLabel: { pt: 'Projetos em destaque', en: 'Featured projects' },
}

export const featuredProjects = [
  {
    number: '01',
    title: 'API Livraria',
    icon: 'Prisma',
    description: {
      pt: 'API REST para gerenciar livros, autores e editoras. CRUD completo com paginação e filtros, leitura pública e escrita protegida por JWT, PostgreSQL em Docker com migrations do Prisma e erros centralizados que não vazam detalhe de banco.',
      en: 'A REST API to manage books, authors and publishers. Full CRUD with pagination and filters, public reads and JWT-guarded writes, PostgreSQL in Docker with Prisma migrations, and centralised errors that never leak database detail.',
    },
    tags: ['Node.js', 'Express 5', 'Prisma', 'PostgreSQL', 'Docker', 'JWT'],
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
        pt: 'CRUD completo em Express 5 com validação por Zod, paginação e filtros aplicados na consulta. Autenticação JWT com bcryptjs deixa o GET público e exige token em POST, PUT e DELETE. PostgreSQL sobe por Docker Compose e o schema é versionado com migrations do Prisma.',
        en: 'Full CRUD in Express 5 with Zod validation, pagination and filters applied in the query. JWT auth with bcryptjs keeps GET public and requires a token on POST, PUT and DELETE. PostgreSQL comes up through Docker Compose and the schema is versioned with Prisma migrations.',
      },
      learned: {
        pt: 'Erro tratado é parte da interface pública. Depois que centralizei o tratamento e mapeei os códigos do Prisma, a API parou de vazar detalhe de banco para quem a consome.',
        en: 'Handled errors are part of the public interface. Once handling was centralised and Prisma codes were mapped, the API stopped leaking database detail to its consumers.',
      },
    },
  },
  {
    number: '02',
    title: 'VitalTrack',
    icon: 'TypeScript',
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
    icon: 'MongoDB',
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
    icon: 'Nodejs',
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
    icon: 'Nodejs',
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
    icon: 'Nodejs',
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
    icon: 'Express',
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
    icon: 'Nodejs',
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
    icon: 'Nodejs',
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
    icon: 'Java',
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
    icon: 'Python',
    description: {
      pt: 'Sistema de restaurante em Python, construído junto com os estudos da linguagem.',
      en: 'A restaurant system in Python, built alongside my studies of the language.',
    },
    language: 'Python',
    stack: ['POO', 'Estudos'],
    url: `${GITHUB_USER}/restaurante-express`,
  },
  {
    name: 'livraria',
    icon: 'Python',
    description: {
      pt: 'Simulação de um sistema de livraria em Python, criada como avaliação na faculdade.',
      en: 'A bookstore system simulation in Python, built as a university assignment.',
    },
    language: 'Python',
    stack: ['POO', 'Acadêmico'],
    url: `${GITHUB_USER}/livraria`,
  },
]

export const resume = {
  // BASE_URL respeita o base '/portfolio/' do Vite; caminho absoluto dava 404 no GitHub Pages.
  path: `${import.meta.env.BASE_URL}curriculo-rafael-andriotti.pdf`,
  available: true,
  label: { pt: 'Currículo', en: 'Résumé' },
  kicker: { pt: 'Perfil profissional', en: 'Professional profile' },
  title: { pt: 'Minha trajetória, reunida em uma página.', en: 'My path, gathered onto one page.' },
  description: {
    pt: 'APIs RESTful em Node.js e Express, modelagem relacional e não relacional, Docker no ambiente de desenvolvimento, e visão de negócio construída no suporte a sistemas ERP.',
    en: 'RESTful APIs in Node.js and Express, relational and non-relational modelling, Docker in the dev environment, and business sense built supporting ERP systems.',
  },
  highlights: [
    { pt: 'APIs RESTful, CRUD e arquitetura em camadas', en: 'RESTful APIs, CRUD and layered architecture' },
    { pt: 'Node.js · Express · TypeScript · Java', en: 'Node.js · Express · TypeScript · Java' },
    { pt: 'PostgreSQL · Prisma · MongoDB · Docker', en: 'PostgreSQL · Prisma · MongoDB · Docker' },
  ],
  view: { pt: 'Visualizar currículo', en: 'View résumé' },
  download: { pt: 'Baixar PDF', en: 'Download PDF' },
  note: { pt: 'PDF · 2 páginas', en: 'PDF · 2 pages' },
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
      value: { pt: 'Alura · Node.js com Express · Java e POO · Spring Boot (em andamento)', en: 'Alura · Node.js with Express · Java and OOP · Spring Boot (in progress)' },
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
  close: { pt: 'Fechar', en: 'Close' },
  previous: { pt: 'Anterior', en: 'Previous' },
  next: { pt: 'Próximo', en: 'Next' },
  theme: { pt: 'Alternar tema', en: 'Toggle theme' },
  menu: { pt: 'Menu', en: 'Menu' },
}

export const cursorName = {
  guest: { pt: 'Visitante', en: 'Guest' },
  question: { pt: 'Como posso te chamar?', en: 'What should I call you?' },
  hint: {
    pt: 'Seu nome fica só neste navegador, e aparece no cursor.',
    en: 'Your name stays in this browser only, and shows up on the cursor.',
  },
  placeholder: { pt: 'Seu primeiro nome', en: 'Your first name' },
  confirm: { pt: 'Pronto', en: 'Done' },
  dismiss: { pt: 'Agora não', en: 'Not now' },
  change: { pt: 'Trocar o nome do cursor', en: 'Change the cursor name' },
}
