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
| `--ink` | `#1d1d1b` | Texto, bordas e fundos escuros |
| `--paper` | `#f5f2ea` | Fundo padrão |
| `--coral` | `#ff6846` | Destaque primário |
| `--coral-text` | `#b93c22` | Destaque em texto (contraste AA) |
| `--blue` | `#4778ff` | Destaque secundário |
| `--lime` | `#c8ff4d` | Destaque terciário |
| `--line` | `rgba(29, 29, 27, .18)` | Divisórias sutis |
| `--mono` | stack monoespaçada do sistema | Mockups de endpoint |

## Acessibilidade

- Skip link para o conteúdo principal
- Menu mobile com `aria-expanded`, fechamento por `Escape` e retorno de foco
- Faixa de tecnologias com botão de pausa e respeito a `prefers-reduced-motion`
- Elementos puramente decorativos marcados com `aria-hidden`
