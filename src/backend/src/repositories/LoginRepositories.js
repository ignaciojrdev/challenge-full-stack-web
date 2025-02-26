const AppDataSource = require("../config/database");
const { User } = require("../entities/User");

const userRepository = AppDataSource.getRepository(User);

const findUserByUsername = async (username) => {
  return await userRepository.findOne({ where: { username } });
};

const createUser = async (username, password, email) => {
  const user = userRepository.create({ username, password, email });
  return await userRepository.save(user);
};

module.exports = { findUserByUsername, createUser };