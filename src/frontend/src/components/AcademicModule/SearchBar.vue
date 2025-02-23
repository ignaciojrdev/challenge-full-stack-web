<template>
  <div class="search-bar">
    <input type="text" placeholder="Digite sua busca" v-model="query" />
    <button class="btn-primary" @click="$emit('search', query)">Pesquisar</button>
    <button class="btn-secondary" @click="$emit('register')">Cadastrar Aluno</button>
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: String
  },
  data() {
    return {
      query: this.searchQuery
    };
  },
  watch: {
    searchQuery(newValue) {
      this.query = newValue;
    }
  },
  emits: ["search", "register"]
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background: #2c3e50;
  padding: 12px;
  border-radius: 8px;
  gap: 10px;
}
.search-bar input {
  flex: 1;
  padding: 10px;
  border: 2px solid #34495e;
  border-radius: 5px;
  background: #1a252f;
  color: white;
  outline: none;
  transition: border-color 0.3s;
}
.search-bar input::placeholder {
  color: #95a5a6;
}
.search-bar input:focus {
  border-color: #3498db;
}
.btn-primary,
.btn-secondary {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s, transform 0.2s;
}
.btn-primary {
  background: #3498db;
  color: white;
}
.btn-primary:hover {
  background: #2980b9;
  transform: scale(1.05);
}
.btn-secondary {
  background: #e67e22;
  color: white;
}
.btn-secondary:hover {
  background: #d35400;
  transform: scale(1.05);
}
</style>
