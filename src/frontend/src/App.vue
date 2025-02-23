<template>
  <v-app>
    <v-main>
      <v-container>
        <HeaderBar />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useAuthStore } from './stores/auth'
  import HeaderBar from './components/Header/HeaderBar.vue'

  onMounted(() => {
    const authStore = useAuthStore();
    authStore.initializeAuth()
  })
</script>
