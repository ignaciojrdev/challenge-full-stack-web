const authService = require("../services/authService");

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    const token = authService.authenticateUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { login };