const express = require("express");
const RegisterController = require("../../controllers/RegisterController");

const RegisterRoutes = express.Router();

RegisterRoutes.post("/", (req, res) => RegisterController.register(req, res));

module.exports = RegisterRoutes;
