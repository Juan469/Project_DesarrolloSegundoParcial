<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary-gradient">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <i class="bi bi-book-fill me-2"></i>
        <span class="fw-bold">Librería Online</span>
      </a>

      <div class="ms-auto d-flex align-items-center">
        <div class="user-info me-3">
          <i class="bi bi-person-circle me-2"></i>
          <span class="text-white">{{ currentUser.nombre }}</span>
        </div>
        <button class="btn btn-outline-light btn-sm" @click="handleLogout">
          <i class="bi bi-box-arrow-right me-1"></i>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  computed: {
    currentUser() {
      const user = localStorage.getItem('currentUser')
      return user ? JSON.parse(user) : { nombre: 'Usuario' }
    }
  },
  methods: {
    handleLogout() {
      if (confirm('¿Está seguro que desea cerrar sesión?')) {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('currentUser')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.bg-primary-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-brand i {
  font-size: 1.8rem;
}

.user-info {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.btn-outline-light {
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-outline-light:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}
</style>