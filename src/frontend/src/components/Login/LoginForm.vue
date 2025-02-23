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
  import { useAuthStore } from '../../stores/auth';
  import  router  from "../../router/index.js";
  import { showToast }  from "../../utils/generics/toast";
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
      handleLogin() {
        if(!this.isValidLoginForm())
          return this.showMessageLoginError();
        
        this.auth.setToken("sdkjndlknsdklfnlkdlf");
        this.auth.setUser({"email": this.email});
        this.showMessageLoginSuccess();
        setTimeout(() => {
          this.router.push('/');
        }, 4000);
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
      }
    },
  };
</script>
  
<style scoped>
  @import "../../assets/auth.css";
</style>
  