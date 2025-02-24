const express = require("express");
require("reflect-metadata");

const AppDataSource = require("./config/database");

const LoginRoutes = require("./routes/Login/Login");
const RegisterRoutes = require("./routes/Register/Register");
const StudentsRoutes = require("./routes/AcademicModule/Students/Students");

const app = express();
app.use(express.json());

app.use("/login", LoginRoutes);
app.use("/Register", RegisterRoutes);
app.use("/Students", StudentsRoutes);

AppDataSource.initialize()
  .then(() => console.log("📦 Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = app;
