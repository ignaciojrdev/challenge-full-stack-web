const express = require("express");
const LoginController = require("../../controllers/LoginController");
const authenticateToken = require("../../middlewares/auth");

const LoginRoutes = express.Router();

LoginRoutes.post("/", (req, res) => LoginController.login(req, res));
LoginRoutes.get("/auth", authenticateToken, (req, res) => LoginController.auth(req, res));

module.exports = LoginRoutes;
