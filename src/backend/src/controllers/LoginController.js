const authService = require("../services/LoginServices");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.loginUser(username, password);
    res.json({ "token": token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const auth = async (req, res) => {
  res.json({ message: "Success"});
};

module.exports = { login, auth };