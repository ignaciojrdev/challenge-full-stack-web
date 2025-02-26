import { defineStore } from 'pinia'
import router from '../router'
import Cookies from 'js-cookie'
import { eventBus } from "../events/eventBus.js";
import { showToast }  from "../utils/generics/toast.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('token') || ''
  }),
  actions: {
    setToken(token) {
      this.token = token
      Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' })
    },
    logout() {
      this.token = ''
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

        const response = await fetch(`${import.meta.env.VITE_API_URL}/login/auth`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          this.showMessageCookieAuthError();
          this.hideSpinner();
          return this.logout()
        }
        
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
      showToast.error("You are not authenticated. Log in to see another modules.");
    }
  }
})
