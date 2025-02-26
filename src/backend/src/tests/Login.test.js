const request = require("supertest");
const app = require("../app.js");
const authRepository = require("../repositories/LoginRepositories");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AppDataSource = require("../config/database");

jest.mock("../repositories/LoginRepositories", () => ({
  findUserByUsername: jest.fn(),
  createUser: jest.fn(),
}));

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Login API", () => {
  const mockUser = {
    username: "testuser",
    password: bcrypt.hashSync("password123", 10),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should log in successfully and return a token", async () => {
    authRepository.findUserByUsername.mockResolvedValue(mockUser);
    
    const response = await request(app).post("/login").send({
      username: "testuser",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(jwt.verify(response.body.token, process.env.JWT_SECRET)).toBeTruthy();
  });

  test("Should fail when logging in with the wrong password", async () => {
    authRepository.findUserByUsername.mockResolvedValue(mockUser);
    
    const response = await request(app).post("/login").send({
      username: "testuser",
      password: "wrongpassword",
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid User or Password.");
  });

  test("Should fail when logging in with a non-existent user", async () => {
    authRepository.findUserByUsername.mockResolvedValue(null);
    
    const response = await request(app).post("/login").send({
      username: "nonexistent",
      password: "password123",
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid User or Password.");
  });

  test("Should fail when logging in without providing credentials", async () => {
    const response = await request(app).post("/login").send({});
    
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid User or Password.");
  });
});