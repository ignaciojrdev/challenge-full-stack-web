import { defineStore } from 'pinia'
import router from '../router'
import Cookies from 'js-cookie'
import { eventBus } from "../events/eventBus.js";
import { showToast }  from "../utils/generics/toast.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('token') || '', 
    user: null
  }),
  actions: {
    setToken(token) {
      this.token = token
      Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' })
    },
    setUser(user) {
      this.user = user
    },
    logout() {
      this.token = ''
      this.user = null
      Cookies.remove('token')
      router.push('/')
    },
    getToken() {
      return this.token
    },
    isAuthenticated() {
      return !!this.token
    },
    async initializeAuth() {
      const token = Cookies.get('token')
      if(!token){
        this.logout();
        return this.showMessageCookieNotFound();
      }
      try {
        this.showSpinner();
        this.token = token
        // Simulação de requisição para obter o usuário logado (substitua pela API real)
        /*const response = await fetch('/api/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (response.ok) {
          const userData = await response.json()
          this.setUser(userData)
        } else {
          this.logout() // Remove token inválido
        }*/
        //criar backend aqui
        this.user = {"email": "tetse@gmail.com"}
        setTimeout(() => {
          this.showMessageCookieAuthSuccess();
          this.hideSpinner();
        }, 2000);
      } catch (error) {
        this.showMessageCookieAuthError();
        this.hideSpinner();
        this.logout()
      }
    },
    showSpinner(){
      eventBus.emit("show-spinner", document.body);
    },
    hideSpinner(){
      eventBus.emit("hide-spinner");
    },
    showMessageCookieNotFound() {
      showToast.warning("To see other modules, Log in.");
    },
    showMessageCookieAuthSuccess() {
      showToast.success("Authenticated!");
    },
    showMessageCookieAuthError() {
      showToast.success("Something wrong with your authentication. Log in again.");
    }
  }
})
