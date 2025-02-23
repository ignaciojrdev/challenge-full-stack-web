<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="E-mail" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
  
<script>
  import { useAuthStore } from '../../stores/auth.js';
  import  router  from "../../router/index.js";
  import { showToast }  from "../../utils/generics/toast.js";
  import LoadingSpinner  from "../../utils/spinners/LoadingSpinner.vue";
  import { eventBus } from "../../events/eventBus.js";

  export default {
    setup(){
      const auth = useAuthStore();
      return { auth, router }
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
      async handleRegister() {
        try{
          this.showSpinner();
          if(!this.isValidRegisterForm())
            return this.showMessageRegisterError;

          //criar backend
          this.showMessageRegisterSuccess();
          setTimeout(() => {
            this.router.push('/');
            this.hideSpinner();
          }, 2000);
        }catch(e){
          this.hideSpinner();
          showMessageGenericError();
        }
      },
      isValidLoginForm(){
        return this.isValidEmail() && this.isValidPassword();
      },
      isValidEmail(){
        return (this.email != "");
      },
      isValidPassword(){
        return (this.password != "");
      },
      showMessageLoginSuccess() {
        showToast.success("Logged in with success!");
      },
      showMessageLoginError() {
        showToast.error("Wrong email or password!");
      },
      showSpinner(){
        eventBus.emit("show-spinner", document.getElementById('form-container'));
      },
      hideSpinner(){
        eventBus.emit("hide-spinner");
      }
    },
  };
</script>
  
<style scoped>
  @import "../../assets/auth.css";
</style>
  