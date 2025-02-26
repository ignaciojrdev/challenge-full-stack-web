const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");
const AppDataSource = require("../config/database");
const authenticateToken = require("../middlewares/auth");

describe("Authentication Middleware", () => {
  let token;

  beforeAll(async () => {
    await AppDataSource.initialize();
    token = jwt.sign({ username: "testuser" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  test("should allow access with a valid token", async () => {
    const req = { headers: { authorization: `Bearer ${token}` } };
    const res = {};
    const next = jest.fn();

    authenticateToken(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test("should deny access if no token is provided", async () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Denied access. Token is required." });
  });

  test("should deny access if token is invalid", async () => {
    const req = { headers: { authorization: "Bearer invalidtoken" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid/expired Token." });
  });
});