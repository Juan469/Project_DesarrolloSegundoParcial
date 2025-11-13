<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h5 class="mb-0">
        <i class="bi bi-list-ul me-2"></i>
        Menú Principal
      </h5>
    </div>

    <nav class="sidebar-nav">
      <router-link
        to="/dashboard/productos"
        class="sidebar-item"
        active-class="active"
      >
        <i class="bi bi-book me-3"></i>
        <span>Gestión de Libros</span>
      </router-link>

      <router-link
        to="/dashboard/clientes"
        class="sidebar-item"
        active-class="active"
      >
        <i class="bi bi-people me-3"></i>
        <span>Clientes</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <small class="text-muted">
        <i class="bi bi-shield-check me-2"></i>
        Librería Virtual v1.0
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #2d3748 0%, #1a202c 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  overflow-y: auto;
}

.sidebar-header {
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.sidebar-header h5 {
  font-weight: 600;
  font-size: 1.1rem;
}

.sidebar-nav {
  flex: 1;
  padding: 20px 0;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  border-left: 3px solid transparent;
}

.sidebar-item i {
  font-size: 1.2rem;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-left-color: #667eea;
}

.sidebar-item.active {
  background: rgba(102, 126, 234, 0.2);
  color: white;
  border-left-color: #667eea;
  font-weight: 600;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: relative;
    top: 0;
    min-height: auto;
  }
}
</style>