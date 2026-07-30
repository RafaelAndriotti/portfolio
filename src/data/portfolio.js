export const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Trajetória', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Currículo', href: '#curriculo' },
]

export const technologies = [
  'Node.js',
  'Express',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Java',
  'Python',
  'APIs REST',
]

export const skillGroups = [
  {
    title: 'APIs e serviços REST',
    description:
      'Endpoints previsíveis, com contratos claros, status HTTP corretos e respostas consistentes.',
    evidence:
      'Construo APIs em Node.js e Express organizadas em camadas — rotas, validação, controller e acesso a dados.',
    tools: ['Node.js', 'Express', 'TypeScript'],
  },
  {
    title: 'Dados e persistência',
    description:
      'Modelagem relacional e não relacional pensada para consultas eficientes e dados íntegros.',
    evidence:
      'Trabalho com PostgreSQL, MongoDB e SQLite, usando ORMs quando ajudam e SQL direto quando é mais claro.',
    tools: ['PostgreSQL', 'MongoDB', 'Sequelize'],
  },
  {
    title: 'Confiabilidade e segurança',
    description:
      'A parte que o usuário não vê, mas sente: validação de entrada, erros tratados e acesso protegido.',
    evidence:
      'Aplico validação com Zod, autenticação com JWT e hash de senhas, além de tratamento centralizado de erros.',
    tools: ['Zod', 'JWT', 'bcrypt'],
  },
]

export const experiences = [
  {
    number: '01',
    category: 'Projetos autorais',
    period: 'Prática contínua',
    title: 'Construção de APIs REST do zero',
    description:
      'Desenvolvimento de serviços em Node.js e Express sem boilerplate pronto, para entender de fato roteamento, middlewares, validação e o ciclo completo de uma requisição.',
    tags: ['Node.js', 'Express', 'TypeScript'],
  },
  {
    number: '02',
    category: 'Prática técnica',
    period: 'Evolução constante',
    title: 'Modelagem de dados e integrações',
    description:
      'Estruturação de bancos relacionais e não relacionais, com tabelas relacionadas, triggers, paginação e filtros de busca aplicados diretamente nas consultas.',
    tags: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    number: '03',
    category: 'Estudos',
    period: 'Aprendizado contínuo',
    title: 'Fundamentos e múltiplas linguagens',
    description:
      'Base em programação orientada a objetos com Java e automações em Python, reforçando lógica, arquitetura e boas práticas independentes de framework.',
    tags: ['Java', 'Python', 'POO'],
  },
]

const GITHUB_USER = 'https://github.com/RafaelAndriotti'

export const featuredProjects = [
  {
    number: '01',
    title: 'API Livraria',
    description:
      'API REST para gerenciar livros, autores e editoras. CRUD completo com paginação, filtros de busca, validação de entrada e tratamento centralizado de erros que traduz códigos do Postgres em respostas claras.',
    tags: ['Node.js', 'Express 5', 'Supabase', 'Zod'],
    color: 'coral',
    url: `${GITHUB_USER}/API-Livraria`,
    endpoint: {
      method: 'GET',
      path: '/livros?genero=ficcao&page=2',
      status: '200 OK',
      lines: ['"total": 48,', '"page": 2,', '"data": [ … ]'],
    },
  },
  {
    number: '02',
    title: 'VitalTrack',
    description:
      'Aplicação de saúde e treino com back-end próprio em TypeScript. Autenticação por JWT com senhas em bcrypt, cálculo automático de macros e um banco PostgreSQL com nove tabelas relacionadas e triggers de atualização.',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'JWT'],
    color: 'blue',
    url: `${GITHUB_USER}/VitalTrack`,
    endpoint: {
      method: 'POST',
      path: '/auth/login',
      status: '200 OK',
      lines: ['"token": "eyJhbGci…",', '"expiresIn": "7d",', '"user": { … }'],
    },
  },
  {
    number: '03',
    title: 'ToDoList API',
    description:
      'API REST de tarefas organizada em arquitetura MVC, com schemas do Mongoose, middlewares próprios, tratamento global de erros e configuração por variáveis de ambiente.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    color: 'lime',
    url: `${GITHUB_USER}/ToDoList`,
    endpoint: {
      method: 'PUT',
      path: '/tasks/:id',
      status: '200 OK',
      lines: ['"id": "65f1c2…",', '"done": true,', '"updatedAt": "…"'],
    },
  },
]

export const repositories = [
  {
    name: 'meal-prep',
    description:
      'Back-end de planejamento de refeições com Sequelize sobre SQLite, usando migrations e seeders.',
    language: 'JavaScript',
    stack: ['Node.js', 'Sequelize', 'SQLite'],
    url: `${GITHUB_USER}/meal-prep`,
  },
  {
    name: 'Quadro-Kanban',
    description:
      'Quadro de tarefas dividido entre back-end e front-end, com a API respondendo às movimentações do quadro.',
    language: 'JavaScript',
    stack: ['Node.js', 'API REST'],
    url: `${GITHUB_USER}/Quadro-Kanban`,
  },
  {
    name: 'Monitor-de-Atividades',
    description:
      'Painel para registro de atividades com servidor Node.js e persistência local em SQLite.',
    language: 'JavaScript',
    stack: ['Node.js', 'SQLite'],
    url: `${GITHUB_USER}/Monitor-de-Atividades`,
  },
  {
    name: 'bot-promocoes',
    description:
      'Bot que acompanha promoções de jogos na Steam, rodando como serviço automatizado em Node.js.',
    language: 'JavaScript',
    stack: ['Node.js', 'Automação'],
    url: `${GITHUB_USER}/bot-promocoes`,
  },
  {
    name: 'dateLib',
    description:
      'Biblioteca própria para manipulação de datas, escrita para exercitar API pública e casos de borda.',
    language: 'JavaScript',
    stack: ['Biblioteca', 'Datas'],
    url: `${GITHUB_USER}/dateLib`,
  },
  {
    name: 'cofrinhoUninter',
    description:
      'Cofrinho multimoeda em Java, explorando herança e polimorfismo em programação orientada a objetos.',
    language: 'Java',
    stack: ['POO', 'Herança'],
    url: `${GITHUB_USER}/cofrinhoUninter`,
  },
  {
    name: 'restaurante-express',
    description:
      'Sistema de restaurante em Python, construído junto com os estudos da linguagem.',
    language: 'Python',
    stack: ['POO', 'Estudos'],
    url: `${GITHUB_USER}/restaurante-express`,
  },
  {
    name: 'livraria',
    description:
      'Simulação de um sistema de livraria em Python, criada como avaliação na faculdade.',
    language: 'Python',
    stack: ['POO', 'Acadêmico'],
    url: `${GITHUB_USER}/livraria`,
  },
]

export const contact = {
  email: 'rafael.rebelo47@gmail.com',
  github: GITHUB_USER,
  linkedin: '',
}

export const resume = {
  path: '/curriculo-rafael-rebelo.pdf',
  available: false,
}
