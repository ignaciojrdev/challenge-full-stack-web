const AppDataSource = require("../config/database");
const { Student } = require("../entities/Student");

const studentRepository = AppDataSource.getRepository(Student);

const findAllStudents = async () => {
  return await studentRepository.find();
};

const findStudentById = async (id) => {
  return await studentRepository.findOne({ where: { id } });
};

const findStudentByName = async (name) => {
  return await studentRepository.findOne({ where: { name } });
};

const findStudentByEmail = async (email) => {
  return await studentRepository.findOne({ where: { email } });
};

const findStudentByCPF = async (cpf) => {
  return await studentRepository.findOne({ where: { cpf } });
};

const createStudent = async (name, email, cpf) => {
  const student = studentRepository.create({ name, email, cpf, ra: Math.floor(100000 + Math.random() * 900000).toString() });
  return await studentRepository.save(student);
};

const updateStudent = async (ra, data) => {
  const student = await findStudentById(ra);
  if (!student) throw new Error("Student not found.");

  delete data.ra;
  delete data.cpf;

  await studentRepository.update(ra, data);
  return await findStudentById(ra);
};

const deleteStudent = async (ra) => {
  return await studentRepository.delete(ra);
};

module.exports = {
  findAllStudents,
  findStudentById,
  findStudentByName,
  findStudentByEmail,
  findStudentByCPF,
  createStudent,
  updateStudent,
  deleteStudent
};
