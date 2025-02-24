const express = require("express");
const StudentsController = require("../../../controllers/StudentController");
const authenticateToken = require("../../../middlewares/authMiddleware");

const StudentsRoutes = express.Router();

StudentsRoutes.get("/Students", authenticateToken, (req, res) => StudentsController.getUsers(req, res));
StudentsRoutes.post("/users", authenticateToken, (req, res) => StudentsController.createUser(req, res));

module.exports = StudentsRoutes;
