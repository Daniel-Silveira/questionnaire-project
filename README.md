# Projeto de Questionários

Este repositório contém três projetos relacionados à criação e gerenciamento de questionários: uma aplicação web, uma API e um aplicativo desktop. Cada projeto tem seu propósito específico no processo de criação, cadastro e resposta aos questionários.

## Projetos

### 1\. Web

A aplicação web é responsável por fornecer uma interface intuitiva para cadastrar perguntas e usuários, gerenciando o processo de criação de questionários.

#### Inicialização

`cd web && npm install && npm run dev`

#### Tecnologias Utilizadas

- React
- Tailwind CSS
- React Query
- Axios

### 2\. API

A API é a ponte entre a aplicação web e o aplicativo desktop, lidando com a persistência de dados e fornecendo serviços essenciais.

#### Inicialização

Certifique-se de ter o Node.js e o PostgreSQL instalados. Configure as variáveis de ambiente no arquivo `.env` na pasta `api` e execute:

`cd api && npm install && npm run start:dev`

#### Tecnologias Utilizadas

- NestJS
- Sequelize
- PostgreSQL

### 3\. Desktop

O aplicativo desktop permite que os usuários façam login e respondam aos questionários criados por meio da aplicação web.

#### Inicialização

`cd desktop && npm install && npm run dev`

#### Tecnologias Utilizadas

- React
- Electron
- Tailwind CSS
- Axios
