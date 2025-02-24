const express = require("express");
const LoginController = require("../../controllers/LoginController");

const LoginRoutes = express.Router();

LoginRoutes.get("/login", (req, res) => LoginController.getUsers(req, res));
LoginRoutes.post("/login", (req, res) => LoginController.login(req, res));

module.exports = LoginRoutes;
