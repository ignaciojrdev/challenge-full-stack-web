<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="students"
        :sort-by.sync="sortedColumn"
        class="student-table"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Student List</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn icon color="primary" @click="$emit('edit', item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="$emit('delete', item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    students: Array
  },
  data() {
    return {
      sortedColumn: [{ key: "ra", order: "asc" }],
      headers: [
        { title: "Academic Record", key: "ra", sortable: true },
        { title: "Name", key: "name", sortable: true },
        { title: "CPF", key: "cpf", sortable: true },
        { title: "E-mail", key: "email", sortable: true },
        { title: "Actions", key: "actions", sortable: false }
      ]
    };
  },
  emits: ["edit", "delete"]
};
</script>

<style scoped>
.student-table {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
