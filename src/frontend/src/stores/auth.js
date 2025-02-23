// stores/auth.js
import { defineStore } from 'pinia'
import router from '../router'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '', // buscar no cookie
    user: null
  }),
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token) // salvar no cookie
    },
    setUser(user) {
      this.user = user
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')  // excluir no cookie
      router.push('/');
    },
    getToken(){
      return this.token
    },
    isAuthenticated(){
      return !!this.token
    }
  }
})
