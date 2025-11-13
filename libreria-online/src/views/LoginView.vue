<template>
  <div class="login-container">
    <div class="login-card">
      <div class="text-center mb-4">
        <i class="bi bi-book-fill login-icon"></i>
        <h2 class="mt-3">Librería Virtual</h2>
        <p class="text-muted">Sistema de Gestión de Inventario</p>
      </div>

      <!-- Alerta de error -->
      <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="bi bi-exclamation-circle-fill me-2"></i>
        {{ errorMessage }}
        <button type="button" class="btn-close" @click="errorMessage = ''"></button>
      </div>

      <!-- Formulario de login -->
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">
            <i class="bi bi-person-fill me-2"></i>Usuario
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="credentials.username"
            placeholder="Ingrese su usuario"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            <i class="bi bi-lock-fill me-2"></i>Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="credentials.password"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
        </button>
      </form>

      

      <div class="mt-3 text-center">
        <small class="text-muted">
          <i class="bi bi-info-circle me-1"></i>
          Este es un sistema educativo con autenticación simulada
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import usuariosData from '@/data/usuarios.json'

export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.errorMessage = ''

      // Simular delay de red
      setTimeout(() => {
        const user = usuariosData.usuarios.find(
          u => u.username === this.credentials.username && 
               u.password === this.credentials.password
        )

        if (user) {
          // Guardar autenticación en localStorage
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('currentUser', JSON.stringify(user))
          
          // Redireccionar al dashboard
          this.$router.push('/dashboard')
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos. Por favor, intente nuevamente.'
        }
        
        this.loading = false
      }, 800)
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 100%;
}

.login-icon {
  font-size: 4rem;
  color: #667eea;
}

.form-label {
  font-weight: 600;
  color: #333;
}

.form-control {
  border-radius: 10px;
  padding: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
  }
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
}
</style>