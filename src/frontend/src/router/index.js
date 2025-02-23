// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AcademicModule from '../views/AcademicModule.vue';
import { useAuthStore } from '../stores/auth.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/Login', component: LoginView },
  { path: '/Academic', component: AcademicModule, meta: { requiresAuth: true }},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    next("/");
  } else {
    next();
  }
});

export default router;