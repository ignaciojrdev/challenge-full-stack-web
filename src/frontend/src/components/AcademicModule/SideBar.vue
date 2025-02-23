<template>
    <aside class="sidebar">
      <div class="logo">EdTech</div>
      <h2 class="module-title">Academic Module</h2>
      <ul>
        <li @click="navigateTo('students')">Students</li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(view) {
        this.$emit("change-view", view);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background: #ccc;
    padding: 15px;
    min-height: 100vh;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  .logo-bold {
    color: black;
    font-weight: bold;
  }
  .module-title {
    background: black;
    color: white;
    padding: 5px;
    text-align: center;
    font-size: 14px; /* Reduzi o tamanho */
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .sidebar li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  </style>
  