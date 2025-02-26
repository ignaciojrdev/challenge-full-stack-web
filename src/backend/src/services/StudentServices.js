const StudentRepository = require("../repositories/StudentRepositories");

const getAllStudents = async () => {
  return await StudentRepository.findAllStudents();
};

const createStudent = async (name, email, cpf) => {
  if (!name || !email || !cpf) {
    throw new Error("All fields are required.");
  }
  const existingName = await StudentRepository.findStudentByName(name);
  const existingEmail = await StudentRepository.findStudentByEmail(email);
  const existingCpf = await StudentRepository.findStudentByCPF(cpf);
  if (existingName || existingEmail || existingCpf) {
    throw new Error("Name, Email or CPF already registered.");
  }

  return await StudentRepository.createStudent(name, email, cpf);
};

const updateStudent = async (ra, data) => {
  return await StudentRepository.updateStudent(ra, data);
};

const deleteStudent = async (ra) => {
  return await StudentRepository.deleteStudent(ra);
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
