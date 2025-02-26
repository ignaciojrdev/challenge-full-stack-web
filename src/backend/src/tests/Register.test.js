const request = require("supertest");
const app = require("../app");
const AppDataSource = require("../config/database");
const authRepository = require("../repositories/LoginRepositories");

describe("User Registration API", () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    jest.spyOn(authRepository, "findUserByUsername").mockResolvedValue(null);
    jest.spyOn(authRepository, "createUser").mockImplementation((username, password, email) => {
      return Promise.resolve({ id: 1, username, password, email });
    });
  });

  it("Should register a user successfully", async () => {
    const response = await request(app).post("/register").send({
      username: "testuser",
      password: "testpassword",
      email: "test@example.com",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message", "User registered successfully");
  });

  it("Should fail when username is missing", async () => {
    const response = await request(app).post("/register").send({
      password: "testpassword",
      email: "test@example.com",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Username and password are required.");
  });

  it("Should fail when password is missing", async () => {
    const response = await request(app).post("/register").send({
      username: "testuser",
      email: "test@example.com",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Username and password are required.");
  });

  it("Should fail when trying to register a user that already exists", async () => {
    jest.spyOn(authRepository, "findUserByUsername").mockResolvedValue({
      id: 1,
      username: "testuser",
      password: "hashedpassword",
      email: "test@example.com",
    });

    const response = await request(app).post("/register").send({
      username: "testuser",
      password: "testpassword",
      email: "test@example.com",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Username already exists.");
  });
});
