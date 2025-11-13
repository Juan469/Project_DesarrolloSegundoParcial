// src/services/api.js

// Datos simulados de libros para la librería
let MOCK_BOOKS = [
  {
    id: 1,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: 45000,
    category: "Literatura",
    description: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
    rating: { rate: 4.8, count: 1205 },
    stock: 15
  },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    price: 38000,
    category: "Clásicos",
    description: "La obra cumbre de la literatura española que narra las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546112331i/3836.jpg",
    rating: { rate: 4.5, count: 892 },
    stock: 20
  },
  {
    id: 3,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 25000,
    category: "Infantil",
    description: "Una fábula filosófica sobre un pequeño príncipe que viaja por el universo aprendiendo lecciones de vida.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg",
    rating: { rate: 4.9, count: 2340 },
    stock: 30
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    price: 42000,
    category: "Ciencia Ficción",
    description: "Una distopía sobre un régimen totalitario que controla todos los aspectos de la vida humana.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    rating: { rate: 4.7, count: 1567 },
    stock: 18
  },
  {
    id: 5,
    title: "Harry Potter y la Piedra Filosofal",
    author: "J.K. Rowling",
    price: 52000,
    category: "Fantasía",
    description: "El inicio de la saga del joven mago Harry Potter y sus aventuras en el Colegio Hogwarts de Magia y Hechicería.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
    rating: { rate: 4.9, count: 3421 },
    stock: 25
  },
  {
    id: 6,
    title: "Orgullo y Prejuicio",
    author: "Jane Austen",
    price: 35000,
    category: "Romance",
    description: "Una novela romántica que explora las costumbres de la sociedad inglesa del siglo XIX.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    rating: { rate: 4.6, count: 978 },
    stock: 12
  },
  {
    id: 7,
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: 48000,
    category: "Thriller",
    description: "Un thriller que combina arte, religión y misterio en una búsqueda por descubrir antiguos secretos.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
    rating: { rate: 4.4, count: 1823 },
    stock: 22
  },
  {
    id: 8,
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    price: 65000,
    category: "Historia",
    description: "Una breve historia de la humanidad que explora cómo el Homo sapiens llegó a dominar el mundo.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271.jpg",
    rating: { rate: 4.8, count: 2156 },
    stock: 16
  },
  {
    id: 9,
    title: "Crónica de una Muerte Anunciada",
    author: "Gabriel García Márquez",
    price: 32000,
    category: "Literatura",
    description: "Una crónica sobre un asesinato que todos sabían que iba a ocurrir pero nadie impidió.",
    image: "https://wmagazin.com/wp-content/uploads/2021/04/Cronicadeunamuerteanunciada-Colombia-1-633x1024.jpg",
    rating: { rate: 4.3, count: 654 },
    stock: 14
  },
  {
    id: 10,
    title: "El Hobbit",
    author: "J.R.R. Tolkien",
    price: 58000,
    category: "Fantasía",
    description: "La aventura de Bilbo Bolsón, un hobbit que se une a un grupo de enanos para recuperar su tesoro.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    rating: { rate: 4.7, count: 1892 },
    stock: 19
  },
  {
    id: 11,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    price: 55000,
    category: "Misterio",
    description: "Una novela sobre libros, amor y secretos oscuros en la Barcelona de posguerra.",
    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg",
    rating: { rate: 4.6, count: 1345 },
    stock: 17
  },
  {
    id: 12,
    title: "El Alquimista",
    author: "Paulo Coelho",
    price: 28000,
    category: "Autoayuda",
    description: "La historia de Santiago, un pastor andaluz que emprende un viaje en busca de su Leyenda Personal.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    rating: { rate: 4.5, count: 2789 },
    stock: 28
  }
]

export default {
  // Obtener todos los libros
  async getProducts() {
    // Simulamos una llamada a la API con delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: [...MOCK_BOOKS] }) // Devolver una copia del array
      }, 500)
    })
  },

  // Obtener un libro por ID
  async getProduct(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const book = MOCK_BOOKS.find(b => b.id === parseInt(id))
        resolve({ data: book })
      }, 300)
    })
  },

  // Crear un nuevo libro
  async createProduct(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBook = {
          ...product,
          id: Math.max(...MOCK_BOOKS.map(b => b.id), 0) + 1,
          rating: { rate: 0, count: 0 },
          stock: product.stock || 10
        }
        MOCK_BOOKS.push(newBook)
        resolve({ data: newBook })
      }, 500)
    })
  },

  // Actualizar un libro existente
  async updateProduct(id, product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = MOCK_BOOKS.findIndex(b => b.id === parseInt(id))
        if (index !== -1) {
          MOCK_BOOKS[index] = { ...MOCK_BOOKS[index], ...product }
          resolve({ data: MOCK_BOOKS[index] })
        }
      }, 500)
    })
  },

  // Eliminar un libro
  async deleteProduct(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = MOCK_BOOKS.findIndex(b => b.id === parseInt(id))
        if (index !== -1) {
          MOCK_BOOKS.splice(index, 1)
        }
        resolve({ data: { success: true } })
      }, 300)
    })
  },

  // Obtener categorías
  async getCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = [...new Set(MOCK_BOOKS.map(b => b.category))]
        resolve({ data: categories })
      }, 200)
    })
  },

  // Obtener libros por categoría
  async getProductsByCategory(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const books = MOCK_BOOKS.filter(b => b.category === category)
        resolve({ data: books })
      }, 300)
    })
  }
}