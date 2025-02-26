<template>
  <v-container fluid class="container">
    <Sidebar @changeView="setView" />

    <v-main class="content">
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
        :nameProp="studentName" 
        :emailProp="studentEmail" 
        :raProp="studentRa" 
        :cpfProp="studentCpf" 
        :editing="editingModal"
        :deleting="deleteModal"
        @fetchStudents="this.fetchStudents()"
      />
    </v-main>
  </v-container>
</template>

<script>
import Sidebar from "../components/AcademicModule/Sidebar.vue";
import SearchBar from "../components/AcademicModule/SearchBar.vue";
import StudentTable from "../components/AcademicModule/StudentTable.vue";
import StudentModal from "../components/AcademicModule/StudentModal.vue";
import { useAuthStore } from '../stores/auth.js';
import axios from "axios";

export default {
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
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
      students: [],
      sortKey: "",
      sortOrder: 1,
      showModalEditOrRegisterStudent: false,
      studentId: null,
      studentName: "",
      studentEmail: "",
      studentRa: "",
      studentCpf: "",
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
    async fetchStudents() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/students`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.auth.getToken()}`,
            "Content-Type": "application/json"
          }
        });
        this.students = response.data;
      } catch (error) {
        console.error("Erro ao buscar estudantes:", error);
      }
    },
    setView(view) {
      this.currentView = view;
    },
    search(query) {
      this.searchQuery = query;
    },
    registerStudent() {
      this.showModalEditOrRegisterStudent = true;
      this.studentId = null;
      this.studentName = "";
      this.studentEmail = "";
      this.studentRa = "";
      this.studentCpf = "";
      this.editingModal = false;
      this.deleteModal = false;
    },
    editStudent(student) {
      this.showModalEditOrRegisterStudent = true;
      this.studentId = student.id;
      this.studentName = student.name;
      this.studentEmail = student.email;
      this.studentRa = student.ra;
      this.studentCpf = student.cpf;
      this.editingModal = true;
      this.deleteModal = false;
    },
    deleteStudent(student) {
      this.showModalEditOrRegisterStudent = true;
      this.studentId = student.id;
      this.studentName = student.name;
      this.studentEmail = student.email;
      this.studentRa = student.ra;
      this.studentCpf = student.cpf;
      this.editingModal = false;
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
  mounted() {
    this.fetchStudents();
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
</style>
