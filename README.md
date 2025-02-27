# Projeto EdTech - Full Stack

## Descrição
Este repositório contém o backend e frontend de um sistema desenvolvido com Node.js, Express, TypeORM, PostgreSQL, Vue 3 e Vuetify.

## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados no seu computador:

- **Node.js** (versão recomendada: 16 ou superior) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Docker** e **Docker Compose** - [Download](https://www.docker.com/)
- **NPM** ou **Yarn** para gerenciamento de pacotes****

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

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/database
   JWT_SECRET=seu_token_secreto
   ```

### Frontend
1. Acesse o diretório do frontend dentro do projeto:
   ```sh
   cd frontend
   ```
2. Configure as variáveis de ambiente no arquivo `.env` (Use o .envExample para facilitar sua vida):
   ```env
   VITE_API_URL=http://localhost:3000
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

### Backend
1. Vá até a raiz do projeto e e acesse o diretório do backend:
   ```sh
   cd backend
   ```
2. Configure as variáveis de ambiente no arquivo `.env` (Use o .envExample para facilitar sua vida):
   ```env
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=meu_banco
   DB_HOST=db
   DB_PORT=5432
   DB_USER=user
   DB_PASS=password
   DB_NAME=meu_banco
   
   PORT=3000
   NODE_ENV=development
   DATABASE_URL=postgresql://user:password@db:5432/meu_banco
   JWT_SECRET=supersecretkey
   ```
3. Inicie os containers do banco e backend via Docker Compose, ele irá importar as dependências do projeto (Lembre-se de iniciar o docker desktop primeiro):
   ```sh
      docker-compose up -d
   ```

## Estrutura do Projeto
```
📦 projeto
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 config
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 entities
 ┃ ┃ ┣ 📂 middlewares
 ┃ ┃ ┣ 📂 repositories
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 tests
 ┃ ┃ ┣ app.js
 ┃ ┃ ┣ server.js
 ┃ ┣ package.json
 ┃ ┣ .env
 ┃ ┣ .gitignore
 ┃ ┣ dockerfile
 ┃ ┣ docker-compose.yml

 ┣ 📂 frontend
 ┃ ┣ 📂 public
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 router
 ┃ ┃ ┣ 📂 stores
 ┃ ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📂 views
 ┃ ┃ ┣ App.vue
 ┃ ┃ ┣ main.js
 ┃ ┃ ┣ style.css
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
