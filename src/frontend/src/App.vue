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

<script>
import HeaderBar from './components/HeaderBar.vue';
export default {
  components:{
    HeaderBar
  }
}
</script>
