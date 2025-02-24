<template>
  <v-app>
    <v-main>
      <v-container>
        <HeaderBar />
        <router-view />
        <LoadingSpinner />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { onMounted, defineComponent } from 'vue';
  import { useAuthStore } from './stores/auth';
  import HeaderBar from './components/Header/HeaderBar.vue';
  import LoadingSpinner from './utils/spinners/LoadingSpinner.vue';

  export default defineComponent({
    components: {
      HeaderBar,
      LoadingSpinner
    },
    setup() {
      const authStore = useAuthStore();
      onMounted(() => {
        authStore.initializeAuth();
      });
    }
  });
</script>
