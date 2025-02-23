<template>
  <aside class="sidebar">
    <div class="logo">EdTech</div>
    <h2 class="module-title">Academic Module</h2>
    <ul>
      <li 
        v-for="item in menuItems" 
        :key="item.view" 
        @click="navigateTo(item.view)" 
        :class="{ active: selectedView === item.view }"
      >
        {{ item.label }}
        <span class="arrow" v-if="selectedView === item.view">➜</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      selectedView: "students", // Define a primeira opção como selecionada por padrão
      menuItems: [
        { label: "Students", view: "students" }
      ]
    };
  },
  methods: {
    navigateTo(view) {
      this.selectedView = view;
      this.$emit("change-view", view);
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #2c3e50;
  padding: 15px;
  min-height: 100vh;
  color: white;
}
.logo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.module-title {
  background: #1a252f;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 12px;
  cursor: pointer;
  transition: background 0.3s, padding 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
}
.sidebar li:hover {
  background: rgba(255, 255, 255, 0.1);
}
.sidebar li.active {
  background: #34495e;
  font-weight: bold;
  padding-left: 15px;
}
.sidebar li .arrow {
  opacity: 0;
  transform: translateX(-5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-size: 18px;
}
.sidebar li.active .arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>
