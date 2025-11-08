<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card p-4 shadow-lg border-0" style="width: 400px;">
      <h2 class="text-center mb-4 text-primary">📚 Acceso a la Librería</h2>
      
      <div v-if="error" class="alert alert-danger" role="alert">
        Usuario o contraseña incorrectos.
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-2">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: false,
    };
  },
  methods: {
    handleLogin() {
      this.error = false;
      // Llama al servicio de autenticación para validar
      if (authService.login(this.username, this.password)) {
        // Redirige al Dashboard
        this.$router.push('/dashboard/libros'); 
      } else {
        this.error = true;
      }
    }
  }
};
</script>