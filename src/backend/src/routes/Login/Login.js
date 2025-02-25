const express = require("express");
const LoginController = require("../../controllers/LoginController");

const LoginRoutes = express.Router();

LoginRoutes.get("/", (req, res) => LoginController.getUsers(req, res));
LoginRoutes.post("/", (req, res) => LoginController.login(req, res));

module.exports = LoginRoutes;
