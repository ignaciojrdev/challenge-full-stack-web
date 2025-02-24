const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      unique: true,
    },
    email: {
      type: "varchar",
      unique: true,
      nullable: true,
    },
    password: {
      type: "varchar",
    },
    type: {
      type: "enum",
      enum: ["Student", "Admin"],
      default: "Student",
    },
  },
});

module.exports = { User };