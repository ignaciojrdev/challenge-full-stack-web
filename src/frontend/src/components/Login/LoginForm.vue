<template>
  <v-container class="form-container" id="form-container" fluid>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field v-model="username" label="Username" type="text" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary" block>Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { useAuthStore } from '../../stores/auth.js';
import router from "../../router/index.js";
import { showToast } from "../../utils/generics/toast.js";
import { eventBus } from "../../events/eventBus.js";
import axios from 'axios';
export default {
  setup() {
    const auth = useAuthStore();
    return { auth, router };
  },
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        if (!this.isValidLoginForm()) {
          this.showMessageLoginError();
          return;
        }

        this.showSpinner();
        
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
          username: this.username, 
          password: this.password
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.auth.setToken(response.data.token);
        this.showMessageLoginSuccess();
        setTimeout(() => {
          this.hideSpinner();
          this.router.push('/');
        }, 2000);
      } catch (e) {
        this.hideSpinner();
        if(e.response)
          return this.showMessageGenericError(e.response.data.message);
        return this.showMessageGenericError(e.message);
      }
    },
    isValidLoginForm() {
      return this.isValidEmail() && this.isValidPassword();
    },
    isValidEmail() {
      return this.email !== "";
    },
    isValidPassword() {
      return this.password !== "";
    },
    showMessageLoginSuccess() {
      showToast.success("Logged in with success!");
    },
    showMessageLoginError() {
      showToast.error("Wrong email or password!");
    },
    showMessageGenericError(message = '') {
      showToast.error("Something is wrong! " + message);
    },
    showSpinner() {
      eventBus.emit("show-spinner", document.body);
    },
    hideSpinner() {
      eventBus.emit("hide-spinner");
    }
  }
};
</script>

<style scoped>
  @import "../../assets/auth.css";
</style>
