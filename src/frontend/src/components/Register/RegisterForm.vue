<template>
    <div class="form-container" id="form-container">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="name" placeholder="Nome" required />
        <input type="email" v-model="email" placeholder="E-mail" required />
        <input type="password" v-model="password" placeholder="Senha" required />
        <button type="submit">Submit</button>
      </form>
    </div>
    <LoadingSpinner />
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
        eventBus.emit("show-spinner", document.getElementById('form-container'));
      },
      hideSpinner(){
        eventBus.emit("hide-spinner");
      }
    },
    components:{
      LoadingSpinner
    },
  };
  </script>
  
<style scoped>
  @import "../../assets/auth.css";
</style>
  