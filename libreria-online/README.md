# 📚 Librería Virtual - Sistema de Gestión de Inventario

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Educativo-yellow)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)

> **⚠️ PROYECTO EDUCATIVO**  
> Este proyecto fue desarrollado con fines académicos para el curso de Desarrollo de Aplicaciones Web. La autenticación y gestión de datos son simuladas y **NO deben usarse en producción**.

---

## 📖 Descripción del Proyecto

**Librería Virtual** es una aplicación web modular desarrollada con **Vue.js 3** y **Bootstrap 5.3** que simula un sistema de gestión de inventario para una librería. El proyecto implementa las mejores prácticas de desarrollo frontend, incluyendo componentización, modularización y consumo de APIs.

### 🎯 Objetivo Educativo

Demostrar el dominio de:
- Arquitectura modular con Vue.js
- Componentes reutilizables
- Sistema de rutas con Vue Router
- Consumo de datos mediante API simulada
- Diseño responsivo con Bootstrap
- Gestión de estado con localStorage
- Buenas prácticas de desarrollo

---

## ✨ Características Principales

### 🔐 Sistema de Autenticación
- Login con validación de credenciales
- Sesión persistente con localStorage
- Protección de rutas privadas
- **⚠️ Solo para propósitos educativos - No usar en producción**

### 📚 Gestión de Libros (CRUD Completo)
- ✅ **Listar** libros con búsqueda y filtros
- ✅ **Crear** nuevos libros con formulario validado
- ✅ **Editar** información de libros existentes
- ✅ **Eliminar** libros con confirmación
- ✅ **Ver detalles** completos de cada libro
- ✅ **Calificar** libros con sistema de estrellas

### 📊 Características Adicionales
- Búsqueda en tiempo real
- Filtrado por categorías
- Vista en cuadrícula y tabla
- Estadísticas en tiempo real (total, precio promedio, rating)
- Sistema de calificación con estrellas
- Diseño 100% responsivo
- Interfaz moderna y amigable

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vue.js** | 3.x | Framework JavaScript progresivo |
| **Vue Router** | 4.x | Sistema de enrutamiento SPA |
| **Bootstrap** | 5.3 | Framework CSS para diseño responsivo |
| **Bootstrap Icons** | 1.11 | Biblioteca de iconos |
| **JavaScript ES6+** | - | Lenguaje de programación |

---

## 🚀 Instalación y Configuración

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **Git**

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/libreria-virtual.git
cd libreria-virtual
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run serve
```

4. **Acceder a la aplicación**
```
http://localhost:8080
```

5. **Compilar para producción** (opcional)
```bash
npm run build
```

---

## 👥 Credenciales de Prueba

Para acceder al sistema, utiliza uno de estos usuarios de prueba:

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| `admin` | `admin123` | Administrador |
| `vendedor` | `vend123` | Vendedor |

> **⚠️ IMPORTANTE:** Este sistema de autenticación es **solo educativo** y no representa un sistema de seguridad real. Las contraseñas están almacenadas en texto plano en un archivo JSON local sin ningún tipo de encriptación.

---

## 📁 Estructura del Proyecto
```
libreria-virtual/
├── public/
│   └── index.html                 # HTML principal
├── src/
│   ├── assets/                    # Recursos estáticos
│   ├── components/                # Componentes reutilizables
│   │   ├── NavbarComponent.vue    # Barra de navegación superior
│   │   ├── SidebarComponent.vue   # Menú lateral
│   │   ├── FooterComponent.vue    # Pie de página
│   │   └── ProductCardComponent.vue # Tarjeta de producto
│   ├── views/                     # Vistas/Páginas
│   │   ├── LoginView.vue          # Página de login
│   │   ├── DashboardView.vue      # Dashboard principal
│   │   ├── ProductView.vue        # Gestión de productos
│   │   └── ClientsView.vue        # Vista de clientes (placeholder)
│   ├── router/
│   │   └── index.js               # Configuración de rutas
│   ├── services/
│   │   └── api.js                 # Servicio de API simulada
│   ├── data/
│   │   └── usuarios.json          # Base de datos local de usuarios
│   ├── App.vue                    # Componente raíz
│   └── main.js                    # Punto de entrada
├── package.json                   # Dependencias del proyecto
├── jsconfig.json                  # Configuración de JavaScript
└── README.md                      # Este archivo
```

---

## 🏗️ Arquitectura y Modularización

### Principios Aplicados

1. **Separación de Responsabilidades**
   - Cada componente tiene una función específica
   - Las vistas coordinan múltiples componentes
   - Los servicios manejan la lógica de datos

2. **Componentización**
   - Componentes pequeños y reutilizables
   - Comunicación mediante props y eventos
   - Single File Components (SFC)

3. **Modularización**
   - Código organizado por funcionalidad
   - Servicios centralizados para API
   - Configuración separada del código

### Componentes Reutilizables

#### NavbarComponent
```vue
<NavbarComponent />
```
- **Propósito:** Barra de navegación superior
- **Características:** Logo, información de usuario, botón de logout

#### SidebarComponent
```vue
<SidebarComponent />
```
- **Propósito:** Menú lateral de navegación
- **Características:** Enlaces a diferentes secciones, indicador de ruta activa

#### FooterComponent
```vue
<FooterComponent />
```
- **Propósito:** Pie de página con información
- **Características:** Copyright, créditos

#### ProductCardComponent
```vue
<ProductCardComponent 
  :product="libro"
  @view-details="verDetalles"
  @edit="editar"
  @delete="eliminar"
/>
```
- **Props:** `product` (Object)
- **Events:** `view-details`, `edit`, `delete`
- **Propósito:** Tarjeta visual para mostrar información de un libro

---

## 🔌 API Simulada

### Implementación

El proyecto utiliza una **API simulada** implementada en `src/services/api.js` que simula llamadas HTTP con Promises y delays para replicar el comportamiento de una API real.
```javascript
// Ejemplo de uso
import api from '@/services/api'

// Obtener todos los libros
const response = await api.getProducts()
const libros = response.data

// Crear un nuevo libro
const nuevoLibro = {
  title: "El Quijote",
  author: "Cervantes",
  price: 35000,
  category: "Clásicos"
}
await api.createProduct(nuevoLibro)
```

### Operaciones Disponibles

| Método | Función | Descripción |
|--------|---------|-------------|
| `getProducts()` | GET | Obtener todos los libros |
| `getProduct(id)` | GET | Obtener un libro específico |
| `createProduct(data)` | POST | Crear un nuevo libro |
| `updateProduct(id, data)` | PUT | Actualizar un libro |
| `deleteProduct(id)` | DELETE | Eliminar un libro |
| `getCategories()` | GET | Obtener todas las categorías |

### Datos de Ejemplo

El sistema incluye 12 libros precargados con información real:
- Títulos clásicos y contemporáneos
- Autores reconocidos
- Precios en pesos colombianos (COP)
- Imágenes reales de portadas
- Categorías: Literatura, Clásicos, Fantasía, Thriller, etc.

---

## 🛣️ Sistema de Rutas

### Configuración de Rutas
```javascript
/                           → Redirige a /login
/login                      → Vista de inicio de sesión
/dashboard                  → Dashboard principal
/dashboard/productos        → Gestión de libros
/dashboard/clientes         → Vista de clientes (opcional)
```

### Protección de Rutas

El sistema implementa **navigation guards** para proteger rutas privadas:
```javascript
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  
  if (to.path.includes('/dashboard') && !isAuthenticated) {
    next('/login') // Redirige al login si no está autenticado
  } else {
    next()
  }
})
```

---

## 🎨 Diseño y Estilos

### Paleta de Colores
```css
--primary-color: #667eea;    /* Morado principal */
--secondary-color: #764ba2;  /* Morado oscuro */
--success-color: #48bb78;    /* Verde */
--warning-color: #ed8936;    /* Naranja */
--danger-color: #f56565;     /* Rojo */
```

### Diseño Responsivo

La aplicación está optimizada para todos los dispositivos:

- 📱 **Móvil** (< 768px): Layout vertical, menú colapsable
- 💻 **Tablet** (768px - 1024px): Layout adaptado
- 🖥️ **Desktop** (> 1024px): Layout completo con sidebar fijo

---

## 💻 Buenas Prácticas Implementadas

### 1. Código Limpio
- ✅ Nombres descriptivos y consistentes
- ✅ Código DRY (Don't Repeat Yourself)
- ✅ Comentarios donde es necesario
- ✅ Indentación y formato consistente

### 2. Convenciones de Nomenclatura
- **Componentes:** PascalCase (`ProductCardComponent.vue`)
- **Variables/Funciones:** camelCase (`loadProducts()`)
- **Clases CSS:** kebab-case (`.product-card`)

### 3. Manejo de Errores
```javascript
try {
  const response = await api.getProducts()
  this.products = response.data
} catch (error) {
  console.error('Error al cargar:', error)
  alert('Error al cargar el catálogo')
}
```

### 4. Estados de Carga
- Spinners durante operaciones asíncronas
- Mensajes informativos al usuario
- Feedback visual de acciones

---

## 📊 Funcionalidades Detalladas

### Vista de Login
- Formulario con validación
- Mensajes de error con Bootstrap alerts
- Usuarios de prueba visibles
- Redirección automática tras login exitoso
- Diseño atractivo con gradientes

### Dashboard Principal
- Navbar fijo en la parte superior
- Sidebar con navegación persistente
- Área de contenido dinámica
- Footer con información

### Gestión de Productos
- **Listado:** Tarjetas con información completa
- **Búsqueda:** Filtro en tiempo real por título o descripción
- **Filtros:** Por categoría
- **Vistas:** Cuadrícula o tabla
- **Estadísticas:** Total, precio promedio, rating promedio
- **CRUD completo:**
  - ➕ Crear libro con formulario validado
  - ✏️ Editar información existente
  - 🗑️ Eliminar con confirmación
  - 👁️ Ver detalles completos
  - ⭐ Calificar con sistema de estrellas (1-5)

### Sistema de Calificación
- Interfaz interactiva con estrellas
- Hover effect para previsualizar
- Cálculo automático de promedio ponderado
- Contador de reseñas
- Actualización en tiempo real

---

## ⚠️ Limitaciones Educativas

Este proyecto tiene las siguientes limitaciones por ser educativo:



### 💾 Persistencia de Datos
- Los datos se guardan solo en memoria
- Se pierden al recargar la página (excepto sesión)
- No hay base de datos real
- Sin respaldo o sincronización

###  API
- API simulada, no real
- Sin conexión a servidor backend
- Sin validaciones del lado del servidor



---

##  Trabajo Colaborativo

### Estructura de Commits

Este proyecto sigue la convención de commits semánticos:
```bash
feat: nueva funcionalidad
fix: corrección de bug
style: cambios de estilo/formato
docs: documentación
refactor: refactorización de código
chore: tareas de mantenimiento
```

### Ejemplo de Commits Realizados
```bash
git log --oneline
chore: configuración inicial del proyecto
feat: implementar sistema de autenticación
feat: crear componentes reutilizables
feat: integrar API para gestión de libros
feat: agregar sistema de calificación con estrellas
style: mejorar diseño responsivo
docs: completar documentación del proyecto
```

---

## Contexto Académico

### Información del Curso
- **Materia:** Desarrollo de Aplicaciones Web
- **Nivel:** Universitario
- **Tipo:** Proyecto de Parcial
- **Enfoque:** Modularización, componentización y consumo de APIs

### Objetivos de Aprendizaje Alcanzados

✅ **Modularización:** Separación clara de responsabilidades  
✅ **Componentización:** Componentes reutilizables con props y eventos  
✅ **Routing:** Sistema de navegación con protección de rutas  
✅ **API:** Consumo de datos mediante servicios centralizados  
✅ **Bootstrap:** Diseño responsivo y componentes UI  
✅ **Vue.js 3:** Uso de Composition API y reactividad  
✅ **Git/GitHub:** Control de versiones y trabajo colaborativo  

---

##  Autores

- **Estudiante 1:** Juan Jose Quintero Sanchez-192456
- **Estudiante 2:** Kelly Jacome Jacome
---

##  Referencias

- [Vue.js 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📄 Licencia

Este proyecto es de carácter educativo desarrollado para el curso de Desarrollo de Aplicaciones Web - 2025
