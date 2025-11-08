import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 🎨 Importar Bootstrap CSS (Requerimiento de diseño)
import 'bootstrap/dist/css/bootstrap.css' 
// Importar Bootstrap JS (necesario para modales, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

createApp(App).use(router).mount('#app')