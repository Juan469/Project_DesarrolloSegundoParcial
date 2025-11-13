<template>
  <div class="products-container">
    <!-- Header -->
    <div class="products-header">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">
            <i class="bi bi-book-half me-2"></i>
            Gestión de Libros
          </h2>
          <p class="text-muted mb-0">Administra el catálogo de la librería</p>
        </div>
        <button class="btn btn-primary" @click="showCreateModal">
          <i class="bi bi-plus-circle me-2"></i>
          Nuevo Libro
        </button>
      </div>

      <!-- Filtros y búsqueda -->
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Buscar libros..."
              v-model="searchQuery"
            />
          </div>
        </div>
        <div class="col-md-3">
          <select class="form-select" v-model="selectedCategory">
            <option value="">Todas las categorías</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select" v-model="viewMode">
            <option value="grid">
              <i class="bi bi-grid-3x3"></i> Vista en Cuadrícula
            </option>
            <option value="table">
              <i class="bi bi-table"></i> Vista en Tabla
            </option>
          </select>
        </div>
      </div>

      <!-- Estadísticas rápidas -->
      <div class="row mb-4">
        <div class="col-md-3">
          <div class="stat-card">
            <div class="stat-icon bg-primary">
              <i class="bi bi-book"></i>
            </div>
            <div>
              <h4>{{ filteredProducts.length }}</h4>
              <small>Total Libros</small>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <div class="stat-icon bg-success">
              <i class="bi bi-tags"></i>
            </div>
            <div>
              <h4>{{ categories.length }}</h4>
              <small>Categorías</small>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <div class="stat-icon bg-warning">
              <i class="bi bi-currency-dollar"></i>
            </div>
            <div>
              <h4>${{ averagePrice }}</h4>
              <small>Precio Promedio</small>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <div class="stat-icon bg-info">
              <i class="bi bi-star-fill"></i>
            </div>
            <div>
              <h4>{{ averageRating }}</h4>
              <small>Rating Promedio</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3 text-muted">Cargando catálogo...</p>
    </div>

    <!-- Vista en Cuadrícula -->
    <div v-else-if="viewMode === 'grid'" class="row g-4">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="col-md-6 col-lg-4 col-xl-3"
      >
        <ProductCardComponent
          :product="product"
          @view-details="viewProductDetails"
          @edit="editProduct"
          @delete="deleteProduct"
        />
      </div>
      
      <div v-if="filteredProducts.length === 0" class="col-12">
        <div class="alert alert-info text-center">
          <i class="bi bi-info-circle me-2"></i>
          No se encontraron libros con los criterios de búsqueda.
        </div>
      </div>
    </div>

    <!-- Vista en Tabla -->
    <div v-else class="table-responsive">
      <table class="table table-hover">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Rating</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>
              <img :src="product.image" alt="Libro" class="table-img" />
            </td>
            <td>{{ product.title }}</td>
            <td>
              <span class="badge bg-primary">{{ product.category }}</span>
            </td>
            <td class="text-success fw-bold">${{ product.price }}</td>
            <td>
              <i class="bi bi-star-fill text-warning"></i>
              {{ product.rating?.rate || 'N/A' }}
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-primary" @click="viewProductDetails(product)">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-outline-warning" @click="editProduct(product)">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-outline-danger" @click="deleteProduct(product)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="filteredProducts.length === 0" class="alert alert-info text-center">
        <i class="bi bi-info-circle me-2"></i>
        No se encontraron libros con los criterios de búsqueda.
      </div>
    </div>

    <!-- Modal: Ver Detalles -->
    <div class="modal fade" id="detailsModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">
              <i class="bi bi-info-circle me-2"></i>
              Detalles del Libro
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="selectedProduct">
            <div class="row">
              <div class="col-md-4">
                <img :src="selectedProduct.image" alt="Libro" class="img-fluid rounded" />
              </div>
              <div class="col-md-8">
                <h4>{{ selectedProduct.title }}</h4>
                <p class="text-muted">{{ selectedProduct.category }}</p>
                <hr>
                <p>{{ selectedProduct.description }}</p>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <h3 class="text-primary mb-0">${{ selectedProduct.price }}</h3>
                  <div>
                    <i class="bi bi-star-fill text-warning"></i>
                    {{ selectedProduct.rating?.rate }} ({{ selectedProduct.rating?.count }} reseñas)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Crear/Editar -->
    <div class="modal fade" id="formModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" :class="isEditMode ? 'bg-warning' : 'bg-success'">
            <h5 class="modal-title text-white">
              <i :class="isEditMode ? 'bi bi-pencil-square' : 'bi bi-plus-circle'" class="me-2"></i>
              {{ isEditMode ? 'Editar Libro' : 'Nuevo Libro' }}
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveProduct">
              <div class="mb-3">
                <label class="form-label">Título *</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.title"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Autor *</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.author"
                  placeholder="Nombre del autor"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Precio (COP) *</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input
                    type="number"
                    class="form-control"
                    v-model="formData.price"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Categoría *</label>
                <select class="form-select" v-model="formData.category" required>
                  <option value="">Seleccionar categoría</option>
                  <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Descripción *</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="formData.description"
                  required
                ></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">URL de Imagen</label>
                <input
                  type="url"
                  class="form-control"
                  v-model="formData.image"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              <div class="d-flex gap-2">
                <button type="submit" class="btn btn-primary flex-fill">
                  <i class="bi bi-save me-2"></i>
                  Guardar
                </button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import { Modal } from 'bootstrap'

export default {
  name: 'ProductView',
  components: {
    ProductCardComponent
  },
  data() {
    return {
      products: [],
      categories: [],
      loading: true,
      searchQuery: '',
      selectedCategory: '',
      viewMode: 'grid',
      selectedProduct: null,
      isEditMode: false,
      formData: {
        title: '',
        author: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        stock: 10
      },
      detailsModal: null,
      formModal: null
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    },
    averagePrice() {
      if (this.products.length === 0) return 0
      const total = this.products.reduce((sum, p) => sum + parseFloat(p.price), 0)
      return (total / this.products.length).toFixed(2)
    },
    averageRating() {
      if (this.products.length === 0) return 0
      const total = this.products.reduce((sum, p) => sum + (p.rating?.rate || 0), 0)
      return (total / this.products.length).toFixed(1)
    }
  },
  async mounted() {
    await this.loadProducts()
    await this.loadCategories()
    
    // Inicializar modales de Bootstrap
    this.detailsModal = new Modal(document.getElementById('detailsModal'))
    this.formModal = new Modal(document.getElementById('formModal'))
  },
  methods: {
    async loadProducts() {
      try {
        this.loading = true
        const response = await api.getProducts()
        this.products = response.data
        console.log('Productos cargados:', this.products.length)
      } catch (error) {
        console.error('Error al cargar productos:', error)
        alert('Error al cargar el catálogo de libros')
      } finally {
        this.loading = false
      }
    },

    async loadCategories() {
      try {
        const response = await api.getCategories()
        this.categories = response.data
      } catch (error) {
        console.error('Error al cargar categorías:', error)
      }
    },

    viewProductDetails(product) {
      this.selectedProduct = product
      this.detailsModal.show()
    },

    showCreateModal() {
      this.isEditMode = false
      this.resetForm()
      this.formModal.show()
    },

    editProduct(product) {
      this.isEditMode = true
      this.formData = { ...product }
      this.formModal.show()
    },

    async saveProduct() {
      try {
        if (this.isEditMode) {
          await api.updateProduct(this.formData.id, this.formData)
          alert('Libro actualizado exitosamente')
        } else {
          const response = await api.createProduct(this.formData)
          console.log('Libro creado:', response.data)
          alert('Libro creado exitosamente')
        }
        
        this.formModal.hide()
        this.resetForm()
        
        // Recargar productos DESPUÉS de cerrar el modal
        await this.loadProducts()
      } catch (error) {
        console.error('Error al guardar:', error)
        alert('Error al guardar el libro')
      }
    },

    async deleteProduct(product) {
      if (confirm(`¿Está seguro de eliminar "${product.title}"?`)) {
        try {
          await api.deleteProduct(product.id)
          this.products = this.products.filter(p => p.id !== product.id)
          alert('Libro eliminado exitosamente')
        } catch (error) {
          console.error('Error al eliminar:', error)
          alert('Error al eliminar el libro')
        }
      }
    },

    resetForm() {
      this.formData = {
        title: '',
        author: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        stock: 10
      }
    }
  }
}
</script>

<style scoped lang="scss">
.products-container {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.products-header {
  h2 {
    color: #2d3748;
    font-weight: 700;
  }
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
  }

  h4 {
    margin: 0;
    font-weight: 700;
    color: #2d3748;
  }

  small {
    color: #718096;
    font-size: 0.85rem;
  }
}

.table-img {
  width: 50px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
}

.input-group-text {
  background: white;
  border-right: none;
}

.form-control {
  border-left: none;

  &:focus {
    border-color: #ced4da;
    box-shadow: none;
  }
}
</style>