<template>
  <v-container class="form-container" id="form-container" fluid>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field v-model="email" label="E-mail" type="email" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary" block>Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  <LoadingSpinner />
</template>

<script>
import { useAuthStore } from '../../stores/auth.js';
import router from "../../router/index.js";
import { showToast } from "../../utils/generics/toast.js";
import LoadingSpinner from "../../utils/spinners/LoadingSpinner.vue";
import { eventBus } from "../../events/eventBus.js";

export default {
  setup() {
    const auth = useAuthStore();
    return { auth, router };
  },
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        this.showSpinner();
        if (!this.isValidLoginForm()) {
          this.showMessageLoginError();
          return;
        }

        this.auth.setToken("sdnkfosdnkofsno");
        this.auth.setUser({ email: this.email });
        this.showMessageLoginSuccess();
        setTimeout(() => {
          this.hideSpinner();
          this.router.push('/');
        }, 2000);
      } catch (e) {
        this.hideSpinner();
        this.showMessageGenericError();
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
    showMessageGenericError() {
      showToast.error("Something is wrong!");
    },
    showSpinner() {
      eventBus.emit("show-spinner", document.body);
    },
    hideSpinner() {
      eventBus.emit("hide-spinner");
    }
  },
  components: {
    LoadingSpinner
  },
};
</script>

<style scoped>
  @import "../../assets/auth.css";
</style>
