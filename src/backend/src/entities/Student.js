const { EntitySchema } = require("typeorm");

const Student = new EntitySchema({
  name: "Student",
  tableName: "students",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    ra: {
      type: "int",
      unique: true,
      generated: "increment",
    },
    name: {
      type: "varchar",
      unique: true,
    },
    email: {
      type: "varchar",
      unique: true,
    },
    cpf: {
      type: "varchar",
      unique: true,
    },
  },
});

module.exports = { Student };
