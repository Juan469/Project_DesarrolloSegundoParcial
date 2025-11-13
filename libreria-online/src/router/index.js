// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ClientsView from '../views/ClientsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    children: [
      {
        path: '',
        redirect: '/dashboard/productos'
      },
      {
        path: 'productos',
        name: 'Productos',
        component: ProductView
      },
      {
        path: 'clientes',
        name: 'Clientes',
        component: ClientsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  
  // Si intenta ir al dashboard sin estar autenticado
  if (to.path.includes('/dashboard') && !isAuthenticated) {
    next('/login')
  } 
  // Si está en login y está autenticado, permitir estar en login también
  else {
    next()
  }
})

export default router