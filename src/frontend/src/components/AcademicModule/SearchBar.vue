<template>
  <v-container class="search-bar" fluid>
    <v-text-field
      v-model="query"
      placeholder="Type here"
      variant="outlined"
      density="comfortable"
      color="primary"
      hide-details
      class="search-input"
    />

    <v-btn color="primary" @click="$emit('search', query)">Search</v-btn>
    <v-btn color="orange" @click="$emit('register')">Register student</v-btn>
  </v-container>
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

.search-input {
  flex: 1;
  background: white;
  border-radius: 5px;
}
</style>
