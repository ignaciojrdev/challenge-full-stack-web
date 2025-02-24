<template>
    <v-container class="fill-height text-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-img 
            src="https://source.unsplash.com/500x300/?funny,cat" 
            max-width="100%" 
            class="mb-5 mx-auto"
            alt="Imagem engraçada para 404"
          ></v-img>
          <h1 class="text-h3 font-weight-bold">404</h1>
          <p class="text-h6">Oops! Parece que você se perdeu... 🤔</p>
          <v-btn color="primary" to="/" class="mt-5" size="large">
            Voltar para a página inicial
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
  export default {
    name: "NotFound",
  };
</script>
  
<style scoped>
  .fill-height {
    min-height: 100vh;
  }
</style>
  