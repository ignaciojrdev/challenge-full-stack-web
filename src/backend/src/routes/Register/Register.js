const express = require("express");
const RegisterController = require("../../controllers/RegisterController");

const RegisterRoutes = express.Router();

RegisterRoutes.get("/Register", (req, res) => RegisterController.getUsers(req, res));
RegisterRoutes.post("/Register", (req, res) => RegisterController.createUser(req, res));

module.exports = RegisterRoutes;
