const users = [
    { id: 1, username: "admin", password: "123456" }, // Simulação de banco de dados
  ];
  
  const findUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };
  
  module.exports = { findUserByUsername };
  