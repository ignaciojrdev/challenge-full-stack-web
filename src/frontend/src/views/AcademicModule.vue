<template>
  <div class="container">
    <Sidebar @changeView="setView" />

    <main class="content">
      <div class="header">
        <h2 v-if="currentView === 'students'">Consulta de alunos</h2>
        <h2 v-if="currentView === 'courses'">Consulta de cursos</h2>
      </div>

      <SearchBar 
        v-if="currentView === 'students'"
        :searchQuery="searchQuery" 
        @search="search" 
        @register="registerStudent" 
      />

      <StudentTable 
        v-if="currentView === 'students'"
        :students="filteredStudents"
        @sort="sortTable"
        @edit="editStudent"
        @delete="deleteStudent"
      />

      <div v-if="currentView === 'students' && enrolledStudents.length">
        <h3>Alunos Matriculados</h3>
        <ul class="enrolled-list">
          <li v-for="student in enrolledStudents" :key="student.ra">
            {{ student.name }} (RA: {{ student.ra }})
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/AcademicModule/Sidebar.vue";
import SearchBar from "../components/AcademicModule/SearchBar.vue";
import StudentTable from "../components/AcademicModule/StudentTable.vue";

export default {
  components: {
    Sidebar,
    SearchBar,
    StudentTable
  },
  data() {
    return {
      currentView: "students",
      searchQuery: "",
      students: [
        { ra: "101235", name: "Paula Souza", cpf: "121.999.999-99" },
        { ra: "111687", name: "João Silva", cpf: "122.999.999-99" },
        { ra: "111365", name: "Marina Miranda", cpf: "123.999.999-99" },
        { ra: "101299", name: "Maurício Souza", cpf: "124.999.999-99" }
      ],
      enrolledStudents: [], // Lista de alunos matriculados
      sortKey: "",
      sortOrder: 1
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
    search(query) {
      this.searchQuery = query;
      console.log("Pesquisa realizada:", this.searchQuery);
    },
    registerStudent() {
      if (this.students.length > 0) {
        const student = this.students.shift(); // Pega o primeiro aluno da lista e matricula
        this.enrolledStudents.push(student);
        console.log("Aluno matriculado:", student);
      } else {
        console.log("Nenhum aluno disponível para matrícula.");
      }
    },
    editStudent(student) {
      console.log("Editando aluno:", student);
    },
    deleteStudent(student) {
      this.students = this.students.filter(s => s.ra !== student.ra);
      console.log("Excluído aluno:", student);
    },
    sortTable(key) {
      this.sortOrder = this.sortKey === key ? -this.sortOrder : 1;
      this.sortKey = key;
      this.students.sort((a, b) => {
        if (a[key] < b[key]) return -1 * this.sortOrder;
        if (a[key] > b[key]) return 1 * this.sortOrder;
        return 0;
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  font-family: Arial, sans-serif;
}
.content {
  flex: 1;
  padding: 20px;
}
.header {
  background: #ddd;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.enrolled-list {
  list-style: none;
  padding: 0;
}
.enrolled-list li {
  padding: 5px;
  background: #e3f2fd;
  margin: 5px 0;
  border-radius: 4px;
}
</style>
