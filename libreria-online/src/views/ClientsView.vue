<template>
  <div class="clients-container">
    <div class="clients-header mb-4">
      <h2 class="mb-1">
        <i class="bi bi-people-fill me-2"></i>
        Gestión de Clientes
      </h2>
      <p class="text-muted">Administra la base de clientes de la librería</p>
    </div>

    <div class="alert alert-info">
      <i class="bi bi-info-circle me-2"></i>
      <strong>Próximamente:</strong> Módulo de gestión de clientes en desarrollo.
      Esta sección permitirá registrar, editar y administrar la información de los clientes.
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="feature-card">
          <div class="feature-icon bg-primary">
            <i class="bi bi-person-plus"></i>
          </div>
          <h5>Registro de Clientes</h5>
          <p class="text-muted">Sistema de registro completo con datos personales y de contacto.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="feature-card">
          <div class="feature-icon bg-success">
            <i class="bi bi-cart-check"></i>
          </div>
          <h5>Historial de Compras</h5>
          <p class="text-muted">Seguimiento detallado de todas las transacciones realizadas.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="feature-card">
          <div class="feature-icon bg-warning">
            <i class="bi bi-star"></i>
          </div>
          <h5>Programa de Puntos</h5>
          <p class="text-muted">Sistema de fidelización con recompensas y beneficios.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsView'
}
</script>

<style scoped lang="scss">
.clients-container {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.clients-header {
  h2 {
    color: #2d3748;
    font-weight: 700;
  }
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: white;
  }

  h5 {
    font-weight: 600;
    margin-bottom: 10px;
    color: #2d3748;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }
}
</style>