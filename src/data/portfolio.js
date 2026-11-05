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
  title: { pt: 'Ferramentas e onde cada uma entra.', en: 'The tools and where each one fits.' },
  toolColumn: { pt: 'Ferramenta', en: 'Tool' },
}

export const techStack = [
  {
    icon: 'Nodejs',
    name: 'Node.js',
    category: { pt: 'Runtime', en: 'Runtime' },
    meta: [
      { label: WHERE, value: 'Marcaí · VitalTrack · API-Livraria · Din-Din · Token Monitor' },
      { label: FOR, value: { pt: 'Servidor HTTP e camada de rotas', en: 'HTTP server and routing layer' } },
      { label: WITH, value: 'Express' },
    ],
  },
  {
    icon: 'Express',
    name: 'Express',
    category: { pt: 'Framework web', en: 'Web framework' },
    meta: [
      { label: WHERE, value: 'Marcaí · VitalTrack · API-Livraria · Din-Din' },
      { label: FOR, value: { pt: 'Rotas, middlewares e erro centralizado', en: 'Routes, middleware and centralised errors' } },
      { label: WITH, value: 'Zod · Helmet' },
    ],
  },
  {
    icon: 'TypeScript',
    name: 'TypeScript',
    category: { pt: 'Linguagem', en: 'Language' },
    meta: [
      { label: WHERE, value: 'Marcaí · VitalTrack' },
      { label: FOR, value: { pt: 'Tipos e schemas compartilhados entre API e front-end', en: 'Types and schemas shared between API and front-end' } },
      { label: WITH, value: 'Zod · npm workspaces' },
    ],
  },
  {
    icon: 'PostgreSQL',
    name: 'PostgreSQL',
    category: { pt: 'Banco relacional', en: 'Relational database' },
    meta: [
      { label: WHERE, value: 'Marcaí · API-Livraria · Din-Din · GLPI' },
      { label: FOR, value: { pt: 'Modelagem relacional, SQL direto e migrations', en: 'Relational modelling, raw SQL and migrations' } },
      { label: WITH, value: 'Prisma · node-postgres' },
    ],
  },
  {
    icon: 'Prisma',
    name: 'Prisma',
    category: { pt: 'ORM', en: 'ORM' },
    meta: [
      { label: WHERE, value: 'Marcaí · API-Livraria' },
      { label: FOR, value: { pt: 'Schema versionado e códigos de erro mapeados para HTTP', en: 'Versioned schema and error codes mapped to HTTP' } },
      { label: WITH, value: 'PostgreSQL' },
    ],
  },
  {
    icon: 'SQLite',
    name: 'SQLite',
    category: { pt: 'Banco embarcado', en: 'Embedded database' },
    meta: [
      { label: WHERE, value: 'VitalTrack · Token Monitor' },
      { label: FOR, value: { pt: 'Tabelas com índices e triggers, acesso por prepared statements', en: 'Tables with indexes and triggers, accessed through prepared statements' } },
      { label: WITH, value: 'Node.js' },
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
    icon: 'Zod',
    name: 'Zod',
    category: { pt: 'Validação', en: 'Validation' },
    meta: [
      { label: WHERE, value: 'Marcaí · API-Livraria · Din-Din' },
      { label: FOR, value: { pt: 'Validar a entrada antes do controller', en: 'Validating input before the controller' } },
      { label: WITH, value: 'Express' },
    ],
  },
  {
    icon: 'JWT',
    name: 'JWT',
    category: { pt: 'Autenticação', en: 'Authentication' },
    meta: [
      { label: WHERE, value: 'VitalTrack · API-Livraria' },
      { label: FOR, value: { pt: 'Proteger as rotas de escrita', en: 'Guarding the write routes' } },
      { label: WITH, value: 'bcrypt · Helmet' },
    ],
  },
  {
    icon: 'Vitest',
    name: 'Vitest',
    category: { pt: 'Testes', en: 'Testing' },
    meta: [
      { label: WHERE, value: 'Marcaí · Din-Din' },
      { label: FOR, value: { pt: 'Testes de integração da API', en: 'API integration tests' } },
      { label: WITH, value: 'Supertest' },
    ],
  },
  {
    icon: 'React',
    name: 'React',
    category: { pt: 'Front-end', en: 'Front-end' },
    meta: [
      { label: WHERE, value: 'Marcaí · Din-Din · VitalTrack' },
      { label: FOR, value: { pt: 'Interfaces que consomem as APIs', en: 'Interfaces that consume the APIs' } },
      { label: WITH, value: 'Vite · Expo' },
    ],
  },
  {
    icon: 'Docker',
    name: 'Docker',
    category: { pt: 'Infraestrutura', en: 'Infrastructure' },
    meta: [
      { label: WHERE, value: { pt: 'Marcaí · API-Livraria · Token Monitor · Home lab', en: 'Marcaí · API-Livraria · Token Monitor · Home lab' } },
      { label: FOR, value: { pt: 'Subir o banco e empacotar as aplicações', en: 'Running the database and packaging the apps' } },
      { label: WITH, value: 'Docker Compose · Nginx' },
    ],
  },
  {
    icon: 'GitHubActions',
    name: 'GitHub Actions',
    category: { pt: 'CI/CD', en: 'CI/CD' },
    meta: [
      { label: WHERE, value: { pt: 'Portfólio', en: 'Portfolio' } },
      { label: FOR, value: { pt: 'CI a cada pull request e deploy automático', en: 'CI on every pull request and automatic deploy' } },
      { label: WITH, value: 'GitHub Pages' },
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
]

export const hero = {
  title: 'Rafael Andriotti',
  meta: { pt: 'Guaíba, RS · disponível para remoto', en: 'Guaíba, Brazil · open to remote' },
  description: {
    pt: 'Desenvolvedor back-end. Construo APIs REST em camadas com Node.js, TypeScript e Express, PostgreSQL com Prisma, testes automatizados e CI no GitHub Actions — e código que ainda faz sentido seis meses depois.',
    en: 'Back-end developer. I build layered REST APIs with Node.js, TypeScript and Express, PostgreSQL with Prisma, automated tests and CI on GitHub Actions — and code that still makes sense six months later.',
  },
  primaryCta: { pt: 'Ver projetos', en: 'See the work' },
  secondaryCta: { pt: 'Mais sobre mim', en: 'More about me' },
}

export const about = {
  label: { pt: 'Sobre mim', en: 'About me' },
  title: { pt: 'Back-end é onde eu escolhi trabalhar.', en: 'Back-end is where I chose to work.' },
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
  link: { pt: 'Ver trajetória', en: 'See the path' },
  proof: {
    pt: 'Cinco APIs REST no GitHub, com testes de integração em Vitest e Supertest, schema versionado em migrations e deploy por CI.',
    en: 'Five REST APIs on GitHub, with integration tests in Vitest and Supertest, schema versioned in migrations and deploys through CI.',
  },
}

export const skills = {
  label: { pt: 'Habilidades', en: 'Skills' },
  title: { pt: 'APIs, dados, testes e segurança.', en: 'APIs, data, testing and security.' },
  intro: {
    pt: 'As três partes que aparecem em todo serviço que eu construo, e como resolvo cada uma.',
    en: 'The three parts that show up in every service I build, and how I handle each one.',
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
      pt: 'Construo APIs em Node.js, TypeScript e Express em camadas — rotas, controllers, services e models — com regras de negócio no back-end, como bloquear reserva sobreposta com 409.',
      en: 'I build layered APIs in Node.js, TypeScript and Express — routes, controllers, services and models — with business rules on the back-end, like rejecting an overlapping booking with a 409.',
    },
    tools: ['Node.js', 'Express', 'TypeScript', 'SSE'],
  },
  {
    title: { pt: 'Dados e persistência', en: 'Data and persistence' },
    description: {
      pt: 'Modelagem relacional e não relacional pensada para consultas eficientes e dados íntegros.',
      en: 'Relational and non-relational modelling built for efficient queries and sound data.',
    },
    evidence: {
      pt: 'Modelo em PostgreSQL com Prisma ou SQL direto via node-postgres, em SQLite com índices e triggers, e em MongoDB com Mongoose. Schema versionado por migrations e banco em Docker.',
      en: 'I model in PostgreSQL with Prisma or raw SQL through node-postgres, in SQLite with indexes and triggers, and in MongoDB with Mongoose. Schema versioned through migrations and the database in Docker.',
    },
    tools: ['PostgreSQL', 'Prisma', 'SQLite', 'MongoDB'],
  },
  {
    title: { pt: 'Testes e segurança', en: 'Testing and security' },
    description: {
      pt: 'Validação de entrada, erros tratados, acesso protegido e testes que rodam a cada pull request.',
      en: 'Input validation, handled errors, protected access and tests that run on every pull request.',
    },
    evidence: {
      pt: 'Valido entrada com Zod, protejo rotas com JWT, bcrypt, Helmet e rate limiting, e cubro a API com testes de integração em Vitest e Supertest rodando no GitHub Actions.',
      en: 'I validate input with Zod, guard routes with JWT, bcrypt, Helmet and rate limiting, and cover the API with integration tests in Vitest and Supertest running on GitHub Actions.',
    },
    tools: ['Zod', 'JWT', 'Helmet', 'Vitest', 'Supertest'],
  },
]

export const experienceSection = {
  label: { pt: 'Minha trajetória', en: 'My path' },
  title: { pt: 'De suporte na prefeitura a servidor próprio.', en: 'From city-hall IT support to my own server.' },
  intro: {
    pt: 'Não venho de anos de empresa. Venho de projetos que eu levantei do zero, quebrei e arrumei até funcionar direito.',
    en: "I don't come from years at a company. I come from projects I stood up from scratch, broke, and fixed until they ran right.",
  },
}

export const experiences = [
  {
    number: '01',
    category: { pt: 'Suporte e sistemas', en: 'Support and systems' },
    period: { pt: '03/2025 – Atual', en: '03/2025 – present' },
    title: { pt: 'Suporte Técnico de TI e Sistemas — Prefeitura de Guaíba', en: 'IT and Systems Support — Guaíba city hall' },
    description: {
      pt: 'Conduzo a implantação do GLPI, com o modelo de concessões de acesso em PostgreSQL usando validade temporal e histórico não destrutivo. Levanto regras de negócio com RH, compras, protocolo e financeiro no ERP IPM (Atende.Net), reorganizei os centros de custo que quebravam a integridade dos relatórios financeiros e administro contas e permissões no ERP e no Active Directory pelo princípio de menor privilégio.',
      en: 'I lead the GLPI rollout, with the access-grant model in PostgreSQL using temporal validity and non-destructive history. I gather business rules with HR, procurement, records and finance on the IPM ERP (Atende.Net), reorganised the cost centres that were breaking financial report integrity, and manage accounts and permissions in the ERP and Active Directory on least privilege.',
    },
    tags: ['IPM Sistemas', 'PostgreSQL', 'GLPI', 'Active Directory'],
  },
  {
    number: '02',
    category: { pt: 'Projetos autorais', en: 'Personal projects' },
    period: { pt: 'Prática contínua', en: 'Ongoing practice' },
    title: { pt: 'Construção de APIs REST do zero', en: 'Building REST APIs from scratch' },
    description: {
      pt: 'Serviços em Node.js, TypeScript e Express sem boilerplate pronto, em camadas, com PostgreSQL em Docker, schema versionado por migrations, testes de integração em Vitest e Supertest e CI no GitHub Actions.',
      en: 'Services in Node.js, TypeScript and Express with no ready-made boilerplate, in layers, with PostgreSQL in Docker, schema versioned through migrations, integration tests in Vitest and Supertest, and CI on GitHub Actions.',
    },
    tags: ['Node.js', 'TypeScript', 'Prisma', 'Vitest'],
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
    category: { pt: 'Formação', en: 'Education' },
    period: { pt: 'Conclusão prevista 09/2027', en: 'Expected 09/2027' },
    title: { pt: 'Análise e Desenvolvimento de Sistemas — Uninter', en: 'Systems Analysis and Development — Uninter' },
    description: {
      pt: 'Graduação em andamento. No dia a dia uso Claude Code e agentes de IA no fluxo de desenvolvimento e integro a API da Anthropic nos meus projetos. Inglês avançado.',
      en: 'Degree in progress. Day to day I use Claude Code and AI agents in my development workflow and integrate the Anthropic API into my projects. Advanced English.',
    },
    tags: ['ADS', 'Claude Code', 'API da Anthropic', 'Inglês avançado'],
  },
]

export const projectsSection = {
  label: { pt: 'Projetos selecionados', en: 'Selected work' },
  title: { pt: 'Projetos que eu construí do zero.', en: 'Projects I built from scratch.' },
  hint: {
    pt: 'Abra o estudo de caso para o raciocínio por trás de cada um.',
    en: 'Open the case study for the reasoning behind each one.',
  },
  caseStudy: { pt: 'Estudo de caso', en: 'Case study' },
  viewCode: { pt: 'Ver no GitHub', en: 'View on GitHub' },
  openCode: { pt: 'Ver o código', en: 'View the code' },
  problem: { pt: 'O problema', en: 'The problem' },
  built: { pt: 'O que construí', en: 'What I built' },
  learned: { pt: 'O que aprendi', en: 'What I learned' },
  otherRepos: { pt: 'Outros repositórios', en: 'Other repositories' },
  fullProfile: { pt: 'Ver perfil completo', en: 'See the full profile' },
}

export const featuredProjects = [
  {
    number: '01',
    title: 'Marcaí',
    icon: 'TypeScript',
    description: {
      pt: 'Gestão de arena esportiva: API REST para reservas de quadras, pedidos de bar e estoque, em camadas com Prisma e PostgreSQL em Docker. Monorepo com tipos, schemas Zod e regras de negócio compartilhados com o front-end React.',
      en: 'Sports arena management: a REST API for court bookings, bar orders and stock, layered with Prisma and PostgreSQL in Docker. A monorepo sharing types, Zod schemas and business rules with the React front-end.',
    },
    tags: ['TypeScript', 'Express 5', 'Prisma', 'PostgreSQL', 'React', 'Vitest'],
    url: `${GITHUB_USER}/marcai`,
    endpoint: {
      method: 'POST',
      path: '/reservas',
      status: '409 Conflict',
      lines: ['"erro": "quadra já reservada",', '"quadra": 2,', '"inicio": "19:00"'],
    },
    caseStudy: {
      problem: {
        pt: 'Uma arena vende horário de quadra e consumo de bar ao mesmo tempo. Duas reservas no mesmo horário ou duas pessoas editando o mesmo estoque quebram o caixa e a agenda.',
        en: 'An arena sells court time and bar orders at the same time. Two bookings in the same slot, or two people editing the same stock, break both the schedule and the till.',
      },
      built: {
        pt: 'Regras no back-end: reserva sobreposta na mesma quadra devolve 409, cada pedido dá baixa e devolução no estoque, e uma trava otimista impede edição concorrente. Dashboard com ocupação, faturamento do dia e reservas futuras calculados no fuso America/Sao_Paulo. 11 arquivos de testes de API com Vitest e Supertest e schema em 4 migrations do Prisma.',
        en: 'Rules on the back-end: an overlapping booking on the same court returns 409, every order deducts and restores stock, and optimistic locking blocks concurrent edits. A dashboard with occupancy, daily revenue and upcoming bookings computed in the America/Sao_Paulo time zone. 11 API test files with Vitest and Supertest and the schema in 4 Prisma migrations.',
      },
    },
  },
  {
    number: '02',
    title: 'VitalTrack',
    icon: 'TypeScript',
    description: {
      pt: 'App full-stack de treinos, refeições e hidratação para iOS, Android e Web, com API REST própria em TypeScript. JWT com bcrypt (12 salt rounds), Helmet e rate limiting no login, e SQLite com 9 tabelas, índices e triggers.',
      en: 'A full-stack workout, meal and hydration app for iOS, Android and Web, with its own TypeScript REST API. JWT with bcrypt (12 salt rounds), Helmet and login rate limiting, and SQLite with 9 tables, indexes and triggers.',
    },
    tags: ['TypeScript', 'Express', 'SQLite', 'React Native', 'Expo', 'JWT'],
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
        pt: 'API própria em Node.js, Express e TypeScript com JWT, bcrypt, Helmet e rate limiting nas rotas de login. SQLite com 9 tabelas, índices nas colunas de busca, triggers de atualização e acesso por prepared statements, e cálculo automático de calorias e macros por porção.',
        en: 'My own API in Node.js, Express and TypeScript with JWT, bcrypt, Helmet and rate limiting on the login routes. SQLite with 9 tables, indexes on search columns, update triggers and prepared-statement access, plus automatic calorie and macro calculation per portion.',
      },
      learned: {
        pt: 'Tipagem forte não é burocracia: metade dos bugs que eu caçava em JavaScript nunca chegaram a existir aqui.',
        en: "Strong typing isn't bureaucracy: half the bugs I used to hunt in JavaScript never existed here.",
      },
    },
  },
  {
    number: '03',
    title: 'API Livraria',
    icon: 'Prisma',
    description: {
      pt: 'API REST com CRUD de livros, autores e editoras em camadas. Escrita protegida por JWT e bcrypt, paginação e busca parcial em todas as listagens, e erros do Prisma mapeados para 404, 409 e 400.',
      en: 'A layered REST API with CRUD for books, authors and publishers. JWT- and bcrypt-guarded writes, pagination and partial search on every listing, and Prisma errors mapped to 404, 409 and 400.',
    },
    tags: ['Node.js', 'Express 5', 'PostgreSQL', 'Prisma', 'Docker', 'JWT', 'Zod'],
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
    number: '04',
    title: 'Din-Din',
    icon: 'PostgreSQL',
    description: {
      pt: 'Controle financeiro: API REST de despesas e categorias com SQL direto no PostgreSQL (node-postgres com pool de conexões) e validação com Zod, testada com Vitest e Supertest. Front-end em React e Vite com indicadores e filtros.',
      en: 'Expense tracking: a REST API for expenses and categories with raw SQL on PostgreSQL (node-postgres with a connection pool) and Zod validation, tested with Vitest and Supertest. React and Vite front-end with indicators and filters.',
    },
    tags: ['Node.js', 'Express 5', 'PostgreSQL', 'React', 'Vite', 'Vitest', 'Supertest'],
    url: `${GITHUB_USER}/Din-Din`,
    endpoint: {
      method: 'GET',
      path: '/despesas?status=pendente',
      status: '200 OK',
      lines: ['"total": 1250.4,', '"pendente": 3,', '"data": [ … ]'],
    },
    caseStudy: {
      problem: {
        pt: 'Saber quanto foi gasto, quanto já foi pago e o que ainda está pendente, sem planilha e sem um ORM escondendo o SQL.',
        en: 'Knowing how much was spent, how much is already paid and what is still pending, without a spreadsheet and without an ORM hiding the SQL.',
      },
      built: {
        pt: 'Despesas e categorias com SQL direto no PostgreSQL via node-postgres e pool de conexões, validação com Zod e testes automatizados de validators, controllers e rotas com Vitest e Supertest. No front-end, indicadores de total, pago, pendente e média, com filtros por texto, categoria e status.',
        en: 'Expenses and categories with raw SQL on PostgreSQL through node-postgres and a connection pool, Zod validation, and automated tests for validators, controllers and routes with Vitest and Supertest. On the front-end, total, paid, pending and average indicators, with filters by text, category and status.',
      },
    },
  },
  {
    number: '05',
    title: 'Token Monitor',
    icon: 'SQLite',
    description: {
      pt: 'Painel de consumo de agentes de IA: servidor Node.js que coleta eventos de uso, grava em SQLite e atualiza o painel em tempo real por Server-Sent Events, com cotas por agente e alertas por webhook.',
      en: 'An AI agent usage dashboard: a Node.js server that collects usage events, stores them in SQLite and updates the dashboard in real time over Server-Sent Events, with per-agent quotas and webhook alerts.',
    },
    tags: ['Node.js', 'SQLite', 'SSE', 'Docker'],
    url: `${GITHUB_USER}/token-monitor`,
    endpoint: {
      method: 'GET',
      path: '/events',
      status: '200 · text/event-stream',
      lines: ['"agente": "reviewer",', '"tokens": 1840,', '"cota": "72%"'],
    },
    caseStudy: {
      problem: {
        pt: 'Vários agentes de IA rodando ao mesmo tempo gastam tokens sem ninguém ver. Sem um registro central, a conta só aparece no fim do mês.',
        en: 'Several AI agents running at once spend tokens with no one watching. Without a central record, the bill only shows up at the end of the month.',
      },
      built: {
        pt: 'Servidor Node.js que coleta eventos de uso, grava em SQLite e envia atualizações ao painel por Server-Sent Events. Cotas de tokens por agente com alertas via webhook, relatório semanal agendado por e-mail, SDK de integração, importação automática de histórico e imagem Docker própria.',
        en: 'A Node.js server that collects usage events, stores them in SQLite and pushes updates to the dashboard over Server-Sent Events. Per-agent token quotas with webhook alerts, a scheduled weekly email report, an integration SDK, automatic history import and its own Docker image.',
      },
    },
  },
]

export const repositories = [
  {
    name: 'ToDoList',
    icon: 'MongoDB',
    description: {
      pt: 'API RESTful de tarefas em MVC, com cinco endpoints CRUD, schemas do Mongoose, middlewares próprios e tratamento global de erros.',
      en: 'A task REST API in MVC, with five CRUD endpoints, Mongoose schemas, custom middleware and global error handling.',
    },
    language: 'JavaScript',
    stack: ['Express', 'MongoDB'],
    url: `${GITHUB_USER}/ToDoList`,
  },
  {
    name: 'portfolio',
    icon: 'React',
    description: {
      pt: 'Este site. CI a cada pull request e deploy automático no GitHub Pages ao mesclar na main, com skip link, navegação por teclado e prefers-reduced-motion.',
      en: 'This site. CI on every pull request and automatic deploy to GitHub Pages on merge to main, with a skip link, keyboard navigation and prefers-reduced-motion.',
    },
    language: 'JavaScript',
    stack: ['React', 'Vite', 'GitHub Actions'],
    url: `${GITHUB_USER}/portfolio`,
  },
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
]

export const resume = {
  // BASE_URL respeita o base '/portfolio/' do Vite; caminho absoluto dava 404 no GitHub Pages.
  path: `${import.meta.env.BASE_URL}curriculo-rafael-andriotti.pdf`,
  available: true,
  label: { pt: 'Currículo', en: 'Résumé' },
  title: { pt: 'Tudo isso em duas páginas.', en: 'All of it on two pages.' },
  description: {
    pt: 'APIs REST em Node.js, TypeScript e Express, PostgreSQL com Prisma, testes automatizados, Docker e CI/CD, e visão de negócio construída no suporte a sistemas ERP.',
    en: 'REST APIs in Node.js, TypeScript and Express, PostgreSQL with Prisma, automated tests, Docker and CI/CD, and business sense built supporting ERP systems.',
  },
  highlights: [
    { pt: 'APIs REST em camadas, JWT e validação com Zod', en: 'Layered REST APIs, JWT and Zod validation' },
    { pt: 'Node.js · TypeScript · Express · React', en: 'Node.js · TypeScript · Express · React' },
    { pt: 'PostgreSQL · Prisma · Vitest · Docker · GitHub Actions', en: 'PostgreSQL · Prisma · Vitest · Docker · GitHub Actions' },
  ],
  view: { pt: 'Visualizar currículo', en: 'View résumé' },
  download: { pt: 'Baixar PDF', en: 'Download PDF' },
  note: { pt: 'PDF · 2 páginas', en: 'PDF · 2 pages' },
  role: { pt: 'Desenvolvedor Back-end', en: 'Back-end Developer' },
  rows: [
    {
      label: { pt: 'Experiência', en: 'Experience' },
      value: { pt: 'Suporte Técnico de TI e Sistemas · Prefeitura de Guaíba · 03/2025 – Atual', en: 'IT and Systems Support · Guaíba city hall · 03/2025 – present' },
    },
    {
      label: { pt: 'Formação', en: 'Education' },
      value: { pt: 'ADS · Uninter · previsão 09/2027', en: 'Systems Analysis · Uninter · expected 09/2027' },
    },
    {
      label: { pt: 'Idiomas', en: 'Languages' },
      value: { pt: 'Português nativo · Inglês avançado', en: 'Portuguese (native) · English (advanced)' },
    },
  ],
}

export const contact = {
  email: 'rafael.rebelo47@gmail.com',
  phone: '51 99995-9163',
  github: GITHUB_USER,
  linkedin: 'https://www.linkedin.com/in/rafaelandriotti/',
  title: { pt: 'Fale comigo.', en: 'Get in touch.' },
  description: {
    pt: 'O jeito mais rápido é por e-mail. Também estou no LinkedIn e no GitHub.',
    en: "Email is the fastest way. I'm also on LinkedIn and GitHub.",
  },
  cta: { pt: 'Enviar um e-mail', en: 'Send an email' },
}

export const footer = {
  note: { pt: 'Rafael Andriotti · Guaíba, RS', en: 'Rafael Andriotti · Guaíba, Brazil' },
}

export const ui = {
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  headerCta: { pt: 'Contato', en: 'Contact' },
  contactNav: { pt: 'Contato', en: 'Contact' },
  close: { pt: 'Fechar', en: 'Close' },
  theme: { pt: 'Alternar tema', en: 'Toggle theme' },
  menu: { pt: 'Menu', en: 'Menu' },
}
