const StudentService = require("../services/StudentServices");

const getAll = async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, cpf } = req.body;
    const student = await StudentService.createStudent(name, email, cpf);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { ra } = req.params;
    const updatedStudent = await StudentService.updateStudent(ra, req.body);
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { ra } = req.params;
    await StudentService.deleteStudent(ra);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAll, create, update, deleteStudent };
