<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fs-4" href="#">📚 Sistema de Librería</a>
      <div class="d-flex">
        <span class="navbar-text me-3 text-white">
          Bienvenido, Administrador
        </span>
        <button class="btn btn-outline-light btn-sm" @click="logout">Salir</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    methods: {
        logout() {
            this.$router.push('/login');
        }
    }
}
</script>