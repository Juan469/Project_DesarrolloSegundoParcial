<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-truncate">{{ book.title }}</h5>
      <p class="card-text text-muted">Categoría: {{ book.category }}</p>
      <p class="card-text fw-bold text-success fs-5">${{ book.price }}</p>
      <button class="btn btn-sm btn-outline-primary w-100">Detalles</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCardComponent',
  // Requerimiento: Definición de la prop 'book'
  props: {
    book: {
      type: Object,
      required: true // Indica que este componente SIEMPRE debe recibir un objeto 'book'
    }
  }
}
</script>