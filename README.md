# Portfólio — Rafael Andriotti

Site pessoal de portfólio de um desenvolvedor back-end, construído com React e Vite.

## Stack

- **React 19** — componentes de interface
- **Vite 8** — build e servidor de desenvolvimento
- **Oxlint** — análise estática
- CSS puro com custom properties (sem framework de estilo)

## Rodando o projeto

```bash
npm install
```

```bash
npm run dev
```

Outros scripts:

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Roda o Oxlint |
| Push em `main` | Dispara deploy automático no GitHub Pages |

## Deploy

O deploy no GitHub Pages é automático a cada push na branch `main`, via workflow
`Deploy to GitHub Pages`.

## Estrutura

```
src/
├── assets/            # Imagens usadas na interface
├── components/
│   ├── sections/      # Uma seção da página por arquivo
│   └── *.jsx          # Componentes compartilhados (Header, Footer, ícones)
├── data/portfolio.js  # Todo o conteúdo do site em um só lugar
├── App.css            # Estilos de componentes e seções
└── index.css          # Reset, fontes e design tokens
```

## Editando o conteúdo

Praticamente todo o texto do site vive em [`src/data/portfolio.js`](src/data/portfolio.js).
Os componentes só consomem esses dados, então dá para atualizar o portfólio sem
mexer em JSX.

| Export | Onde aparece |
| --- | --- |
| `navigation` | Menu do cabeçalho |
| `technologies` | Faixa animada de tecnologias |
| `skillGroups` | Seção "Habilidades" |
| `experiences` | Seção "Trajetória" |
| `featuredProjects` | Cards grandes de projeto, com o mockup de endpoint |
| `repositories` | Grid de "Outros repositórios" |
| `contact` | E-mail, GitHub e LinkedIn (campo vazio esconde o link) |
| `resume` | Caminho do PDF do currículo e sua disponibilidade |

### Publicando o currículo

Coloque o PDF em `public/` e ajuste o export `resume`:

```js
export const resume = {
  path: '/curriculo-rafael-rebelo.pdf',
  available: true,
}
```

Enquanto `available` for `false`, os botões aparecem desabilitados com o aviso
"Currículo em atualização".

## Design tokens

Definidos em `:root` dentro de [`src/index.css`](src/index.css):

| Token | Valor | Uso |
| --- | --- | --- |
| `--sans` | IBM Plex Sans | Títulos e texto corrido |
| `--mono` | IBM Plex Mono | Rótulos, números, tags e mockups de endpoint |
| `--ink` | `#1d1d1b` | Texto, bordas e fundos escuros |
| `--paper` | `#f5f2ea` | Fundo padrão |
| `--coral` | `#ff6846` | Destaque primário e traço de ênfase |
| `--coral-text` | `#b93c22` | Destaque em texto (contraste AA) |
| `--blue` | `#4778ff` | Destaque secundário |
| `--lime` | `#c8ff4d` | Destaque terciário |
| `--line` | `rgba(29, 29, 27, .18)` | Divisórias sutis |

Regras que mantêm o visual coeso:

- **Uma família só**, em dois cortes: IBM Plex Sans para leitura, IBM Plex Mono
  para tudo que é técnico ou numérico.
- **Sem rotação.** Nenhum elemento é inclinado.
- **Cantos retos** em botões, tags e cards. Círculo só em indicadores de status.
- **Sombra dura de 8px** (`8px 8px 0`), sempre no mesmo offset, nunca desfocada.
- **Ênfase por traço**, com `background-image` em `h1 em`/`h2 em` — não por troca
  de família tipográfica.

## Acessibilidade

- Skip link para o conteúdo principal
- Menu mobile com `aria-expanded`, fechamento por `Escape` e retorno de foco
- Faixa de tecnologias com botão de pausa e respeito a `prefers-reduced-motion`
- Elementos puramente decorativos marcados com `aria-hidden`
