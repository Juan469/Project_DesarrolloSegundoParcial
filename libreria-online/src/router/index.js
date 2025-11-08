import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import BookView from '../views/BookView.vue' // Vista para CRUD de Libros

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    // Rutas hijas que mantienen el Sidebar y Navbar visibles
    children: [
        {
            path: 'libros', // Ruta final: /dashboard/libros
            name: 'Books',
            component: BookView 
        },
        // Aquí podrías agregar otras rutas: 'clientes', 'prestamos', etc.
    ]
  },
  // Redirección por defecto
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router