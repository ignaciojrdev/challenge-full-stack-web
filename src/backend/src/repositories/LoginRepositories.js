const AppDataSource = require("../config/database");
const { User } = require("../entities/User");

const userRepository = AppDataSource.getRepository(User);

const findUserByUsername = async (username) => {
  return await userRepository.findOne({ where: { username } });
};

const findUserByEmail = async (email) => {
  return await userRepository.findOne({ where: { email } });
};

const createUser = async (username, password, type, email) => {
  const user = userRepository.create({ username, password, type, email });
  return await userRepository.save(user);
};

module.exports = { findUserByUsername, findUserByEmail, createUser };