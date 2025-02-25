<template>
    <div class="auth-container">
      <div class="auth-box">
        <div class="toggle-buttons">
          <button @click="isModalLogin = true" :class="{ active: isModalLogin }">Login</button>
          <button @click="isModalLogin = false" :class="{ active: !isModalLogin }">Register</button>
        </div>
  
        <div v-show="isModalLogin">
            <LoginForm />
        </div>
        <div v-show="!isModalLogin">
            <RegisterForm @redirectLogin="redirectLogin"/>
        </div>  
      </div>
    </div>
  </template>
  
<script>
  import LoginForm from "../components/Login/LoginForm.vue";
  import RegisterForm from "../components/Register/RegisterForm.vue";
  
  export default {
    components: {
        LoginForm,
        RegisterForm
    },
    data() {
      return {
        isModalLogin: true
      };
    },
    methods:{
      redirectLogin(){
        this.isModalLogin = true
      }
    }
  };
</script>
  
<style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #ecf0f1;
  }
  
  .auth-box {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .toggle-buttons {
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
  }
  
  button.active {
    background: #2c3e50;
    color: white;
  }
  
  button:not(.active) {
    background: #bdc3c7;
  }
</style>
  