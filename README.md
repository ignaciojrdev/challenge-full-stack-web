# Projeto

## Descrição
Este repositório contém o backend e frontend de um sistema desenvolvido com Node.js, Express, TypeORM, PostgreSQL, Vue 3 e Vuetify.

## Tecnologias Utilizadas
### Backend
- **Node.js**: Runtime JavaScript para o backend.
- **Express**: Framework minimalista para APIs.
- **TypeORM**: ORM para manipulação de banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **JWT (jsonwebtoken)**: Autenticação com tokens.
- **Bcrypt.js**: Hash de senhas.
- **Cors**: Controle de acessos entre domínios.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Jest e Supertest**: Testes automatizados.

### Frontend
- **Vue 3**: Framework JavaScript para criação da interface.
- **Vuetify**: Biblioteca de componentes UI baseada no Material Design.
- **Vue Router**: Gerenciamento de rotas.
- **Pinia**: Gerenciamento de estado.
- **Axios**: Consumo de APIs.
- **Mitt**: Event Emitter para comunicação entre componentes.
- **Vite**: Ferramenta para build e desenvolvimento.
- **JS-Cookie**: Manipulação de cookies.
- **Vue3-toastify**: Notificações no frontend.
- **V-Mask e Vue-the-mask**: Máscaras para formulários.
- **Spin.js**: Indicadores de carregamento.

## Instalação e Configuração

### Backend
1. Clone o repositório e acesse o diretório do backend:
   ```sh
   git clone <repo_url>
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/database
   JWT_SECRET=seu_token_secreto
   ```
4. Execute a aplicação:
   ```sh
   npm start
   ```

### Frontend
1. Acesse o diretório do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Scripts

### Backend
- `npm start` – Inicia o servidor.
- `npm test` – Executa os testes.

### Frontend
- `npm run dev` – Inicia o servidor de desenvolvimento.
- `npm run build` – Gera a versão de produção.
- `npm run preview` – Visualiza o build gerado.

## Estrutura do Projeto
```
📦 projeto
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 entities
 ┃ ┃ ┣ 📂 middlewares
 ┃ ┃ ┣ 📂 repositories
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ index.ts
 ┃ ┣ package.json
 ┃ ┣ tsconfig.json
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 router
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┣ 📂 utils
 ┃ ┣ package.json
 ┃ ┣ vite.config.js
 ┣ README.md
```

## Contribuição
1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT.
