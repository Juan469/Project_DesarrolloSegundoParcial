<template>
  <div>
    <h1 class="mb-4 text-primary">📚 Gestión de Libros</h1>
    <button class="btn btn-success mb-3">
        Añadir Nuevo Libro (Implementar Modal C)
    </button>
    
    <div v-if="loading" class="alert alert-info">Cargando libros...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <table class="table table-striped table-hover table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title.substring(0, 50) + '...' }}</td>
          <td>${{ book.price }}</td>
          <td>
            <button class="btn btn-sm btn-info me-2">Editar (U)</button>
            <button class="btn btn-sm btn-danger" @click="deleteBook(book.id)">Eliminar (D)</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="mt-5 text-secondary">Muestra de Componentes Reutilizables</h3>
    <div class="row">
        <div class="col-md-3" v-for="book in books.slice(0, 4)" :key="'card-' + book.id">
            <BookCardComponent :book="book" class="mb-4" />
        </div>
    </div>
  </div>
</template>

<script>
import apiService from '../services/apiService';
import BookCardComponent from '../components/BookCardComponent.vue';

export default {
  name: 'BookView',
  components: { BookCardComponent },
  data() {
    return {
      books: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchBooks(); // Carga los datos al iniciar la vista
  },
  methods: {
    // Implementación de Listado (R)
    async fetchBooks() {
      this.loading = true;
      this.error = null;
      try {
        const response = await apiService.getBooks();
        this.books = response.data;
      } catch (err) {
        this.error = 'Error al cargar los libros. (Revisar conexión API)';
      } finally {
        this.loading = false;
      }
    },
    
    // Implementación de Eliminación (D)
    async deleteBook(id) {
        if (!confirm(`¿Deseas eliminar el libro con ID ${id}?`)) return;
        try {
            await apiService.deleteBook(id); 
            alert(`✅ Solicitud DELETE enviada para el ID ${id}.`);
            this.fetchBooks(); // Recargar lista
        } catch (err) {
            alert('❌ Error de conexión al eliminar. (Revisar consola)');
        }
    }
  },
};
</script>