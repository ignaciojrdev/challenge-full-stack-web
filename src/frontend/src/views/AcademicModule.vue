<template>
  <v-container fluid class="container">
    <Sidebar @changeView="setView" />

    <v-main class="content">
      <v-card class="header mb-4">
        <v-card-title>
          {{ "Consulta de alunos" }}
        </v-card-title>
      </v-card>

      <SearchBar
        :searchQuery="searchQuery"
        @search="search"
        @register="registerStudent"
      />

      <StudentTable
        :students="filteredStudents"
        @sort="sortTable"
        @edit="editStudent"
        @delete="deleteStudent"
      />

      <StudentModal 
        v-model:show="showModalEditOrRegisterStudent" 
        :nameProp="this.studentName" 
        :emailProp="this.studentEmail" 
        :raProp="this.studentRa" 
        :cpfProp="this.studentCpf" 
        :editing="this.editModal"
        :deleting="this.deleteModal"/>
    </v-main>
  </v-container>
</template>

<script>
import Sidebar from "../components/AcademicModule/Sidebar.vue";
import SearchBar from "../components/AcademicModule/SearchBar.vue";
import StudentTable from "../components/AcademicModule/StudentTable.vue";
import StudentModal from "../components/AcademicModule/StudentModal.vue";

export default {
  components: {
    Sidebar,
    SearchBar,
    StudentTable,
    StudentModal,
  },
  data() {
    return {
      currentView: "students",
      searchQuery: "",
      students: [
        { ra: "101235", name: "Paula Souza", cpf: "121.999.999-99", email: "teste@gmail.com" },
        { ra: "111687", name: "João Silva", cpf: "122.999.999-99", email: "teste@gmail.com" },
        { ra: "111365", name: "Marina Miranda", cpf: "123.999.999-99", email: "teste@gmail.com" },
        { ra: "101299", name: "Maurício Souza", cpf: "124.999.999-99", email: "teste@gmail.com" },
      ],
      sortKey: "",
      sortOrder: 1,
      showModalEditOrRegisterStudent: false,
      studentName: null,
      studentEmail: null,
      studentRa: null,
      studentCpf: null,
      editingModal: false,
      deleteModal: false,
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
    search(query) {
      this.searchQuery = query;
    },
    registerStudent() {
      this.showModalEditOrRegisterStudent = true;
      this.studentName = '';
      this.studentEmail = '';
      this.studentRa = '';
      this.studentCpf = '';
      this.editModal = false;
      this.deleteModal = false;
    },
    editStudent(student) {
      this.showModalEditOrRegisterStudent = true;
      this.studentName = student.name;
      this.studentEmail = student.email;
      this.studentRa = student.ra;
      this.studentCpf = student.cpf;
      this.editModal = true;
      this.deleteModal = false;
    },
    deleteStudent(student) {
      this.showModalEditOrRegisterStudent = true;
      this.studentName = student.name;
      this.studentEmail = student.email;
      this.studentRa = student.ra;
      this.studentCpf = student.cpf;
      this.editModal = false;
      this.deleteModal = true;
    },
    sortTable(key) {
      this.sortOrder = this.sortKey === key ? -this.sortOrder : 1;
      this.sortKey = key;
      this.students.sort((a, b) => {
        if (a[key] < b[key]) return -1 * this.sortOrder;
        if (a[key] > b[key]) return 1 * this.sortOrder;
        return 0;
      });
    },
  },
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
  border-radius: 8px;
}
</style>
