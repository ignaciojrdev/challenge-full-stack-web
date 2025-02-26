<template>
  <v-container class="form-container" id="form-container" fluid>
    <v-card>
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleRegister">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="E-mail" type="email" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary" block>Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script>
  import { useAuthStore } from '../../stores/auth.js';
  import  router  from "../../router/index.js";
  import { showToast }  from "../../utils/generics/toast.js";
  import { eventBus } from "../../events/eventBus.js";
  import axios from 'axios';
  export default {
    setup(){
      const auth = useAuthStore();
      return { auth, router }
    },
    name: "RegisterForm",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        successMessage: ""
      };
    },
    methods: {
      async handleRegister() {
        try{
          if(!this.isValidRegisterForm()){
            this.showMessageRegisterError;
            return;
          }
          this.showSpinner();

          await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
            username: this.name, 
            password: this.password, 
            type: this.type,
            email: this.email
          },
          {
            withCredentials: true, // Inclui cookies na requisição (importante para algumas APIs)
            headers: {
              "Content-Type": "application/json",
            },
          });
          this.showMessageRegisterSuccess();
          setTimeout(() => {
            this.hideSpinner();
            this.$emit("redirectLogin", true);
          }, 2000);
        }catch(e){
          this.hideSpinner();
          if(e.response)
            return this.showMessageGenericError(e.response.data.message);
          return this.showMessageGenericError(e.message);
        }
      },
      isValidRegisterForm(){
        return this.isValidUser() && this.isValidPassword();
      },
      isValidUser(){
        return (this.name != "");
      },
      isValidPassword(){
        return (this.password != "");
      },
      showMessageRegisterSuccess() {
        showToast.success("Registered with success!");
      },
      showMessageRegisterError() {
        showToast.error("Wrong email or password!");
      },
      showMessageGenericError(message = '') {
        showToast.error("Something is wrong! " + message);
      },
      showSpinner(){
        eventBus.emit("show-spinner", document.body);
      },
      hideSpinner(){
        eventBus.emit("hide-spinner");
      },
    }
  };
  </script>
  
<style scoped>
  @import "../../assets/auth.css";
</style>
  