<template>
  <v-navigation-drawer app class="sidebar">
    <v-list>
      <v-list-item class="logo">
        EdTech
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-title class="module-title">Academic Module</v-list-item-title>
      <v-list-item
        v-for="item in menuItems"
        :key="item.view"
        @click="navigateTo(item.view)"
        :class="{ 'active': selectedView === item.view }"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item-content>
        <v-icon v-if="selectedView === item.view">mdi-arrow-right</v-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedView: "students",
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
  color: white;
  height: 95vh;
}
.logo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 15px 0;
}
.module-title {
  background: #1a252f;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  margin: 10px;
}
.v-list-item {
  padding: 12px;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 5px;
}
.v-list-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
.v-list-item.active {
  background: #34495e;
  font-weight: bold;
}
</style>
