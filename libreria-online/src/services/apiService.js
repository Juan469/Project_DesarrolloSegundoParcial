import axios from 'axios';

// Usamos FakeStore API como ejemplo de API REST externa.
const API_URL = 'https://fakestoreapi.com'; 

export default {
    // Listar Libros (GET - Requerimiento CRUD: Read)
    getBooks() {
        return axios.get(`${API_URL}/products?limit=10`); 
    },

    // Crear Libro (POST - Requerimiento CRUD: Create)
    createBook(book) {
        console.log("Simulando creación de libro:", book);
        return axios.post(`${API_URL}/products`, book);
    },

    // Actualizar Libro (PUT - Requerimiento CRUD: Update)
    updateBook(id, book) {
        console.log(`Simulando edición de libro ${id}:`, book);
        return axios.put(`${API_URL}/products/${id}`, book);
    },

    // Eliminar Libro (DELETE - Requerimiento CRUD: Delete)
    deleteBook(id) {
        console.log(`Simulando eliminación de libro ${id}.`);
        return axios.delete(`${API_URL}/products/${id}`);
    }
};