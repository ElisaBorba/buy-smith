# ⚔️ BuySmith
Esta aplicação foi desenvolvida para vender e gerenciar itens medievais, como espadas e armaduras. BuySmith foi criado com TypeScript e Sequelize para proporcionar uma experiência de compra segura e eficiente. E para assegurar a qualidade da aplicação, foi desenvolvido testes unitários para as camadas de controllers e services.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* TypeScript
* MySQL
* JWT Authentication
* Sequelize
* Docker

### Estrutura do Projeto
```
├── src/
│   ├── controllers/
│   ├── database/
│   │   ├── config/
│   │   ├── migrations/
│   │   ├── models/
│   │   ├── seeders/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── app.ts
│   └── server.ts
└── tests/ 
```
### JWT Authentication
Para acessar rotas protegidas, é necessário adicionar o token JWT no header da requisição:
`Bearer <JWT_TOKEN>`

### Como Executar
1️⃣ Instale as dependências:
```
npm install
```
2️⃣ Inicializando com docker:
```
docker-compose up -d --build
```
🎲 Inicie a aplicação, execute as migrations e popula o banco de dados:
```
npm run db:reset
```
### 🧪 Execução dos Testes Localmente
```
npm run test:local
```
