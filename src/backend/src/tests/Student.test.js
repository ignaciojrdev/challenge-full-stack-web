const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");
const AppDataSource = require("../config/database");
const StudentService = require("../services/StudentServices");

jest.mock("../services/StudentServices");

describe("Student API Endpoints", () => {
  let token;

  beforeAll(async () => {
    await AppDataSource.initialize();
    token = jwt.sign({ username: "testuser" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create a new student", async () => {
    const studentData = { name: "John Doe", email: "john@example.com", cpf: "12345678900" };
    const createdStudent = { id: 1, ...studentData, ra: "123456" };
    
    jest.spyOn(StudentService, "createStudent").mockResolvedValue(createdStudent);

    const response = await request(app)
      .post("/students")
      .set("Authorization", `Bearer ${token}`)
      .send(studentData);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdStudent);
    expect(StudentService.createStudent).toHaveBeenCalledWith(studentData.name, studentData.email, studentData.cpf);
  });

  test("should return all students", async () => {
    const students = [
      { id: 1, name: "John Doe", email: "john@example.com", cpf: "12345678900", ra: "123456" },
      { id: 2, name: "Jane Doe", email: "jane@example.com", cpf: "09876543211", ra: "654321" },
    ];

    jest.spyOn(StudentService, "getAllStudents").mockResolvedValue(students);

    const response = await request(app)
      .get("/students")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(students);
    expect(StudentService.getAllStudents).toHaveBeenCalled();
  });

  test("should update a student", async () => {
    const ra = "123456";
    const updateData = { name: "John Updated" };
    const updatedStudent = { id: 1, name: "John Updated", email: "john@example.com", cpf: "12345678900", ra };
    
    jest.spyOn(StudentService, "updateStudent").mockResolvedValue(updatedStudent);

    const response = await request(app)
      .put(`/students/${ra}`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedStudent);
    expect(StudentService.updateStudent).toHaveBeenCalledWith(ra, updateData);
  });

  test("should delete a student", async () => {
    const ra = "123456";
    jest.spyOn(StudentService, "deleteStudent").mockResolvedValue();

    const response = await request(app)
      .delete(`/students/${ra}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(204);
    expect(StudentService.deleteStudent).toHaveBeenCalledWith(ra);
  });
});