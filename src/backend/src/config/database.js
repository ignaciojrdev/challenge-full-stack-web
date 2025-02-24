require("dotenv").config();
const { DataSource } = require("typeorm");
const { User } = require("../entities/User");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // ⚠️ Somente para desenvolvimento
  logging: true,
  entities: [User],
});

AppDataSource.initialize()
  .then(() => console.log("📦 Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = AppDataSource;
