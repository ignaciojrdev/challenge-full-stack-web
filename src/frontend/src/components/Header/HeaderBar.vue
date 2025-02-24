<template>
  <div>
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

    <button @click="toggleMenu" class="menu-button">
      ☰
    </button>

    <nav :class="{ open: isOpen }">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link v-if="!auth.user" to="/Login" @click="closeMenu">Login</router-link>
      <router-link v-if="auth.user" to="/Academic" @click="closeMenu">Academic Module</router-link>
      <button v-if="auth.user" class="logout-button" @click="logoutMenu">Logout</button>
    </nav>
  </div>
</template>

<script>
  import { useAuthStore } from '../../stores/auth.js';
  import router from "../../router/index.js";
  export default {
    setup(){
      const auth = useAuthStore();
      return { auth, router }
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu(event) {
        this.isOpen = !this.isOpen;
        event.target.blur();
      },
      closeMenu(event) {
        this.isOpen = false;
        event?.target?.blur();
      },
      logoutMenu(event) {
        this.isOpen = false;
        event?.target?.blur();
        this.auth.logout();
      }
    }
  };
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9098;
  }

  .menu-button {
    position: fixed;
    top: 15px;
    left: 15px;
    background: #2c3e50;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s, transform 0.2s;
    z-index: 10001;
    outline: none;
  }

  .menu-button:hover {
    background: #1abc9c;
  }

  .menu-button:active {
    transform: scale(0.95);
  }

  nav {
    position: fixed;
    top: 0;
    left: -220px;
    width: 200px;
    height: 100vh;
    background: #2c3e50;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    transition: left 0.3s ease-in-out;
    z-index: 9099;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  }

  nav.open {
    left: 0;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 15px 20px;
    transition: background 0.3s, transform 0.2s;
  }

  nav a:hover {
    background: #34495e;
  }

  nav a.router-link-exact-active {
    background: #1abc9c;
  }

  .logout-button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    padding: 15px 20px;
    cursor: pointer;
    text-align: left;
    width: 100%;
    transition: background 0.3s;
  }

  .logout-button:hover {
    background: #34495e;
  }

  .logout-button:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    .menu-button {
      font-size: 20px;
      padding: 8px 12px;
    }

    nav {
      width: 180px;
    }
  }
</style>