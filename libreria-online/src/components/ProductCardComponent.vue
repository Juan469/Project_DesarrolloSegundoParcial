<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" @error="handleImageError" />
      <div class="product-badge">
        <span class="badge bg-primary">{{ product.category }}</span>
      </div>
    </div>

    <div class="product-body">
      <h5 class="product-title" :title="product.title">
        {{ truncateTitle(product.title) }}
      </h5>
      
      <p class="product-author text-muted mb-2">
        <i class="bi bi-person-fill me-1"></i>
        {{ product.author || 'Autor desconocido' }}
      </p>
      
      <div class="product-rating mb-2">
        <i v-for="star in 5" :key="star" 
           :class="star <= Math.round(product.rating?.rate || 0) ? 'bi-star-fill' : 'bi-star'"
           class="bi text-warning">
        </i>
        <small class="text-muted ms-2">({{ product.rating?.count || 0 }})</small>
      </div>

      <p class="product-description">
        {{ truncateDescription(product.description) }}
      </p>

      <div class="product-price">
        <h4 class="mb-0">${{ product.price }}</h4>
      </div>

      <div class="product-actions">
        <button 
          class="btn btn-sm btn-outline-primary"
          @click="$emit('view-details', product)"
        >
          <i class="bi bi-eye me-1"></i>
          Ver Detalles
        </button>
        <button 
          class="btn btn-sm btn-outline-warning"
          @click="$emit('edit', product)"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <button 
          class="btn btn-sm btn-outline-danger"
          @click="$emit('delete', product)"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncateTitle(title) {
      return title.length > 50 ? title.substring(0, 50) + '...' : title
    },
    truncateDescription(description) {
      if (!description) return 'Sin descripción disponible'
      return description.length > 100 ? description.substring(0, 100) + '...' : description
    },
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/200x300?text=Sin+Imagen'
    }
  }
}
</script>

<style scoped lang="scss">
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}

.product-image {
  position: relative;
  height: 250px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;

    .badge {
      border-radius: 20px;
      padding: 5px 12px;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.7rem;
    }
  }
}

.product-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 10px;
  min-height: 50px;
}

.product-rating {
  i {
    font-size: 0.9rem;
  }
}

.product-description {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1;
}

.product-price {
  margin-bottom: 15px;
  color: #667eea;
  font-weight: 700;
}

.product-actions {
  display: flex;
  gap: 8px;

  .btn {
    flex: 1;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>