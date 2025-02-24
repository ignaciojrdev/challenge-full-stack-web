const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/authRepository");
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

module.exports = { authenticateUser };