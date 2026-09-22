# Portfólio Pessoal

Meu portfólio pessoal, em **React + Vite + Tailwind CSS**, publicado em
https://gisellebalieiro.com.br.

Todo o conteúdo (sobre mim, tech stack, experiências, projetos e certificados) vem da API
`portfolio-api` e é editado pelo painel em `/admin` — não precisa mexer em código nem
fazer deploy para publicar uma novidade.

## Tecnologias

- **React 19 + Vite** — base da aplicação
- **Tailwind CSS** — estilização e design responsivo
- **React Router** — site público em `/` e painel em `/admin`
- **Framer Motion** — transições entre as abas

## Rodando local

```bash
npm install
cp .env.example .env.local   # ajuste as URLs
npm run dev
```

| Variável                | Para que serve                                                     |
| ----------------------- | ------------------------------------------------------------------ |
| `VITE_AUTH_API_URL`     | Onde fica a rota de login (`POST /user`, projeto `ia-rag-api`)      |
| `VITE_CONTENT_API_URL`  | Onde fica a API de conteúdo (projeto `portfolio-api`)               |

## Painel `/admin`

- O login usa a mesma conta da `ia-rag-api`; só entra quem tem `role: admin`.
- O token fica no `localStorage` e vale 7 dias.
- Dá para criar, editar, reordenar (setas) e remover itens, além de subir imagens
  direto pelo painel (vão para o Cloudinary).

Se a API estiver fora do ar, o site **não quebra**: ele cai para o conteúdo de reserva em
`src/content/defaults.js`. Esse arquivo é só o retrato do conteúdo no momento em que o
painel foi criado — quem manda no site publicado é a API.
