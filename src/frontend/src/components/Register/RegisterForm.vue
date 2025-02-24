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
        successMessage: "",
      };
    },
    methods: {
      async handleRegister() {
        try{
          this.showSpinner();
          if(!this.isValidRegisterForm())
            return this.showMessageRegisterError;
  
          this.auth.setToken("sdnkfosdnkofsno");
          this.auth.setUser({"email": this.email});
          //criar backend
          this.showMessageRegisterSuccess();
          setTimeout(() => {
            this.hideSpinner();
            this.router.push('/');
          }, 2000);
        }catch(e){
          this.hideSpinner();
          showMessageGenericError();
        }
      },
      isValidRegisterForm(){
        return this.isValidEmail() && this.isValidPassword();
      },
      isValidEmail(){
        return (this.email != "");
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
      showMessageGenericError() {
        showToast.error("Something is wrong! ");
      },
      showSpinner(){
        eventBus.emit("show-spinner", document.body);
      },
      hideSpinner(){
        eventBus.emit("hide-spinner");
      }
    }
  };
  </script>
  
<style scoped>
  @import "../../assets/auth.css";
</style>
  