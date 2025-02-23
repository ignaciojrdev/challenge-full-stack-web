<template>
  <table class="student-table">
    <thead>
      <tr>
        <th @click="sortBy('ra')">
          Academic record 
          <span v-if="sortedColumn === 'ra'" class="arrow">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
        </th>
        <th @click="sortBy('name')">
          Name
          <span v-if="sortedColumn === 'name'" class="arrow">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
        </th>
        <th @click="sortBy('cpf')">
          CPF
          <span v-if="sortedColumn === 'cpf'" class="arrow">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in sortedStudents" :key="student.ra">
        <td>{{ student.ra }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.cpf }}</td>
        <td>
          <button class="btn-edit" @click="$emit('edit', student)">Edit</button>
          <button class="btn-delete" @click="$emit('delete', student)">Delete</button>
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
  data() {
    return {
      sortedColumn: "ra",
      sortOrder: "asc"
    };
  },
  computed: {
    sortedStudents() {
      return [...this.students].sort((previous, next) => {
        const previousValue = previous[this.sortedColumn];
        const nextValue = next[this.sortedColumn];

        if (typeof previousValue === "string") {
          return this.sortOrder === "asc"
            ? previousValue.localeCompare(nextValue)
            : nextValue.localeCompare(previousValue);
        } else {
          return this.sortOrder === "asc" ? previousValue - nextValue : nextValue - previousValue;
        }
      });
    }
  },
  methods: {
    sortBy(column) {
      if (this.sortedColumn === column) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortedColumn = column;
        this.sortOrder = "asc";
      }
    }
  },
  emits: ["edit", "delete"]
};
</script>

<style scoped>
.student-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #2c3e50;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.student-table th,
.student-table td {
  padding: 12px;
  text-align: left;
}
.student-table th {
  background: #34495e;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  position: relative;
}
.student-table th:hover {
  background: #3b5370;
}
.student-table th .arrow {
  margin-left: 5px;
  font-size: 14px;
}
.student-table tbody tr {
  transition: background 0.3s;
}
.student-table tbody tr:nth-child(even) {
  background: #1f2a36;
}
.student-table tbody tr:nth-child(odd) {
  background: #253341;
}
.student-table tbody tr:hover {
  background: #3b5370;
}
.btn-edit,
.btn-delete {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}
.btn-edit {
  background: #3498db;
  color: white;
  margin-right: 5px;
}
.btn-edit:hover {
  background: #2980b9;
  transform: scale(1.05);
}
.btn-delete {
  background: #e74c3c;
  color: white;
}
.btn-delete:hover {
  background: #c0392b;
  transform: scale(1.05);
}
</style>
