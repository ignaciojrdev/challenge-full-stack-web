const express = require("express");
require("reflect-metadata");
const cors = require("cors");

const AppDataSource = require("./config/database");

const LoginRoutes = require("./routes/Login/Login");
const RegisterRoutes = require("./routes/Register/Register");
const StudentsRoutes = require("./routes/AcademicModule/Students/Students");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // origem do front
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/login", LoginRoutes);
app.use("/register", RegisterRoutes);
app.use("/students", StudentsRoutes);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

AppDataSource.initialize()
  .then(() => console.log("📦 Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = app;
