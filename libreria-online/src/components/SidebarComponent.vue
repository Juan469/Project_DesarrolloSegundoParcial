<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light border-end" style="width: 250px;">
    <h4 class="text-center border-bottom pb-2 mb-3 text-primary">Menú Admin</h4>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard/libros" class="nav-link" active-class="active" aria-current="page">
          Gestión de Libros
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/usuarios" class="nav-link" active-class="active">
           Gestión de Usuarios
        </router-link>
      </li>
    </ul>
    <div class="mt-auto border-top pt-3">
        <button @click="logout" class="btn btn-outline-danger btn-sm w-100">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SidebarComponent',
    methods: {
        logout() {
            this.$router.push('/login');
        }
    }
};
</script>