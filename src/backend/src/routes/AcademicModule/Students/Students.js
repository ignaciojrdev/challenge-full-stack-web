const express = require("express");
const StudentsController = require("../../../controllers/StudentController");
const authenticateToken = require("../../../middlewares/auth");

const StudentsRoutes = express.Router();

StudentsRoutes.get("/", authenticateToken, (req, res) => StudentsController.getUsers(req, res));
StudentsRoutes.post("/", authenticateToken, (req, res) => StudentsController.createUser(req, res));

module.exports = StudentsRoutes;
