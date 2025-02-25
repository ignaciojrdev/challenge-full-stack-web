const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/LoginRepositories");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const authenticateUser = (username, password) => {
  if (!username || !password) {
    throw new Error("Invalid User or Password.");
  }

  const user = authRepository.findUserByUsername(username);

  if (!user || user.password !== password) {
    throw new Error("Invalid User or Password.");
  }

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

const registerUser = async (username, password, type = "common", email = null) => {
  if (!username || !password) {
    throw new Error("Username and password are required.");
  }

  const existingUser = await authRepository.findUserByUsername(username);
  if (existingUser) {
    throw new Error("Username already exists.");
  }

  const existingEmail = await authRepository.findUserByEmail(email);
  if (existingEmail) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Criptografando a senha

  const newUser = await authRepository.createUser(username, hashedPassword, type, email);
  return newUser;
};

module.exports = { 
  authenticateUser,
  registerUser 
};