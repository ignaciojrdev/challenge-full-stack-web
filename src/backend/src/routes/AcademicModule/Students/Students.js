const express = require("express");
const StudentController = require("../../../controllers/StudentController");
const authenticateToken = require("../../../middlewares/auth");

const StudentsRoutes = express.Router();

StudentsRoutes.get("/", authenticateToken, StudentController.getAll);
StudentsRoutes.post("/", authenticateToken, StudentController.create);
StudentsRoutes.put("/:ra", authenticateToken, StudentController.update);
StudentsRoutes.delete("/:ra", authenticateToken, StudentController.deleteStudent);

module.exports = StudentsRoutes;