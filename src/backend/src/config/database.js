require("dotenv").config();
const { DataSource } = require("typeorm");
const { User } = require("../entities/User");
const { Student } = require("../entities/Student");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false, // ⚠️ Somente para desenvolvimento
  logging: true,
  entities: [User, Student],
});

AppDataSource.initialize()
  .then(() => console.log("📦 Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = AppDataSource;
