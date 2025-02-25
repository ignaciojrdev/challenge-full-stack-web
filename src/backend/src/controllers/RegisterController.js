const authService = require("../services/LoginServices");

const register = async (req, res) => {
    try {
      const { username, password, type, email } = req.body;
      await authService.registerUser(username, password, type, email);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

module.exports = { register };