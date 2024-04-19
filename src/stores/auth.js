import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { csrfCookie, getUser, login, logout, register } from '@/http/auth-api';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null);

  const isLoggedIn = computed(() => !!user.value);

  async function fetchUser() {
    user.value = (await getUser()).data.data;
  }

  async function handleLogin(credentials) {
    await csrfCookie();
    await login(credentials);
    await fetchUser();
  }

  async function handleLogout() {
    await logout();
    user.value = null;
  }

  async function handleRegister(user) {
    await register(user);
    await handleLogin({
      email: user.email,
      password: user.password
    });
  }

  return {
    user,
    isLoggedIn,
    fetchUser,
    handleLogin,
    handleLogout,
    handleRegister
  };
});
