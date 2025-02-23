<template>
    <table class="student-table">
      <thead>
        <tr>
          <th @click="$emit('sort', 'ra')">Registro Acadêmico</th>
          <th @click="$emit('sort', 'name')">Nome</th>
          <th @click="$emit('sort', 'cpf')">CPF</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.ra">
          <td>{{ student.ra }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.cpf }}</td>
          <td>
            <a href="#" @click.prevent="$emit('edit', student)">[Editar]</a>
            <a href="#" @click.prevent="$emit('delete', student)">[Excluir]</a>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      students: Array
    },
    emits: ["sort", "edit", "delete"]
  };
  </script>
  
  <style scoped>
  .student-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .student-table th,
  .student-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  .student-table th {
    background: #eee;
    cursor: pointer;
  }
  .student-table a {
    color: blue;
    text-decoration: none;
    margin-right: 10px;
  }
  </style>
  