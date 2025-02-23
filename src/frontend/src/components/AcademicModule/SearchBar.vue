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
    margin: 10px 0;
  }
  .search-bar input {
    flex: 1;
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }
  .btn-primary {
    background: #555;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
  }
  .btn-secondary {
    background: #aaa;
    color: black;
    padding: 8px 12px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
  }
  </style>
  