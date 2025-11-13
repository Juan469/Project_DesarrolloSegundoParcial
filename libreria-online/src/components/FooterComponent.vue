<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="mb-0">
            <i class="bi bi-book-fill me-2"></i>
            © 2025 <strong>Librería Online</strong>. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-md-end mt-2 mt-md-0">
          <small class="text-muted">
            Desarrollado con 
            <i class="bi bi-heart-fill text-danger mx-1"></i>
            por estudiantes de Desarrollo Web
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: #f8f9fa;
  padding: 15px 0;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.footer p {
  color: #495057;
  font-size: 0.9rem;
}

.footer small {
  font-size: 0.85rem;
}
</style>