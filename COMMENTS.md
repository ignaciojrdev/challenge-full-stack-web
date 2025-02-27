# Projeto: Arquitetura MVC com SPA e API RESTful

## Descrição

Este projeto segue uma arquitetura baseada no padrão MVC, onde:

- O backend gerencia a lógica de negócio, a persistência de dados e a exposição de APIs RESTful ou GraphQL.
- O frontend atua como a camada de View, consumindo os dados via API para exibir informações ao usuário e gerenciar interações.
- A separação entre frontend e backend é mais pronunciada, proporcionando maior desacoplamento e flexibilidade no desenvolvimento.

Tecnicamente, ainda podemos considerar esse modelo como MVC, embora ele esteja mais próximo de uma arquitetura desacoplada, combinando um backend baseado em MVC com um frontend SPA.

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

## Melhorias Planejadas
Se houvesse mais tempo, as seguintes melhorias seriam implementadas:

- **Dockerização completa**: Incluir o frontend em um container Docker para facilitar a implantação e padronização do ambiente.
- **Testes automatizados mais abrangentes**: Aumentar a cobertura de testes, incluindo testes de unidade no frontend e testes e2e para garantir integração entre backend e frontend.
- **Documentação aprimorada**: Criar uma documentação mais detalhada com exemplos de uso das APIs e um guia de instalação para novos desenvolvedores. Ex: Swagger;
- **Melhorias de segurança**: Implementar rate limiting, logging estruturado e auditoria de acessos.
- **Melhoria na gestão de erros**: Padronizar as mensagens de erro no backend e frontend para melhor experiência do usuário.
- **Melhoria na performance do backend**: Implementar cache para redução de carga no banco de dados, utilizando Redis ou similar.
- **Melhoria na usabilidade do frontend**: Revisar e refinar a UX/UI com base em feedbacks dos usuários.

## Requisitos Entregues
Todos os requisitos obrigatórios foram atendidos com sucesso.
