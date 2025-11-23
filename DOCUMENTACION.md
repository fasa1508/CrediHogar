# 📱 CREDIHOGAR - Catálogo de Productos

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completo-success)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📋 Índice

1. [Descripción General](#-descripción-general)
2. [Características Principales](#-características-principales)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Instalación y Configuración](#-instalación-y-configuración)
6. [Guía de Uso](#-guía-de-uso)
7. [Componentes Principales](#-componentes-principales)
8. [Personalización](#-personalización)
9. [Despliegue](#-despliegue)
10. [Solución de Problemas](#-solución-de-problemas)
11. [Mejoras Futuras](#-mejoras-futuras)

---

## 🎯 Descripción General

**CrediHogar** es una aplicación web moderna de catálogo de productos diseñada para facilitar la venta de productos del hogar a través de WhatsApp. La aplicación permite a los clientes explorar productos de manera visual y realizar pedidos directamente por WhatsApp con un solo clic.

### Objetivo Principal

Crear una experiencia de compra **simple, rápida y optimizada para dispositivos móviles**, permitiendo que los clientes vean productos atractivamente presentados y contacten al vendedor de forma inmediata.

### Público Objetivo

- **Clientes**: Personas buscando productos para el hogar (muebles, electrodomésticos, electrónica)
- **Administradores**: Dueños del negocio que necesitan gestionar el catálogo fácilmente

---

## ✨ Características Principales

### Para Clientes

✅ **Catálogo Visual Atractivo**
- Visualización de productos con imágenes de alta calidad
- Información clara: nombre, precio, descripción y categoría
- Diseño tipo tarjeta (card) moderno y profesional

✅ **Filtrado por Categorías**
- Exploración fácil por tipo de producto
- Contador de productos por categoría
- Navegación intuitiva con iconos

✅ **Vista Detallada de Productos**
- Modal con galería de imágenes
- Descripción completa del producto
- Precio destacado
- Botón directo de compra por WhatsApp

✅ **Integración con WhatsApp**
- Botón "Comprar por WhatsApp" en cada producto
- Mensaje automático pre-configurado con información del producto
- Apertura directa de WhatsApp Web o App

✅ **Diseño 100% Responsive**
- Optimizado para dispositivos móviles (Mobile First)
- Adaptable a tablets y escritorio
- Navegación táctil optimizada

### Para Administradores

🔐 **Panel de Administración**
- Modo administrador activable con un clic
- Interfaz protegida (configurable con autenticación)

➕ **Gestión Completa de Productos**
- Agregar nuevos productos
- Editar productos existentes
- Eliminar productos
- Marcar productos como destacados

📸 **Gestión de Imágenes**
- Agregar múltiples imágenes por URL
- Vista previa en miniatura
- Primera imagen como imagen principal

📦 **Organización por Categorías**
- Crear nuevas categorías automáticamente
- Sugerencias de categorías existentes
- Filtrado automático

💾 **Almacenamiento Local**
- Productos guardados en localStorage
- Datos persistentes entre sesiones
- Sin necesidad de backend inicial

---

## 🛠 Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.2.0 | Framework principal para UI |
| **Vite** | 5.0.8 | Build tool y dev server rápido |
| **CSS3** | - | Estilos modernos y responsivos |
| **Google Fonts** | - | Tipografía Poppins |

### Herramientas y Metodologías

- **Context API**: Gestión de estado global
- **React Hooks**: useState, useEffect, useContext
- **CSS Variables**: Sistema de diseño coherente
- **Mobile First**: Diseño priorizando móviles
- **LocalStorage**: Persistencia de datos
- **ES6+**: JavaScript moderno

---

## 📁 Estructura del Proyecto

```
crediHogar/
│
├── public/                          # Archivos públicos estáticos
│
├── src/                             # Código fuente principal
│   ├── components/                  # Componentes React
│   │   ├── Header/                  # Encabezado de la app
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── CategoryFilter/          # Filtro de categorías
│   │   │   ├── CategoryFilter.jsx
│   │   │   └── CategoryFilter.css
│   │   │
│   │   ├── ProductCard/             # Tarjeta de producto
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   │
│   │   ├── ProductGrid/             # Grid de productos
│   │   │   ├── ProductGrid.jsx
│   │   │   └── ProductGrid.css
│   │   │
│   │   ├── ProductDetail/           # Modal de detalle
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ProductDetail.css
│   │   │
│   │   └── AdminPanel/              # Panel de administración
│   │       ├── AdminPanel.jsx
│   │       └── AdminPanel.css
│   │
│   ├── context/                     # Context API
│   │   └── ProductContext.jsx       # Estado global de productos
│   │
│   ├── utils/                       # Funciones utilitarias
│   │   └── helpers.js               # Helpers y validaciones
│   │
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos del App
│   ├── main.jsx                     # Punto de entrada
│   └── index.css                    # Estilos globales
│
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración de Vite
└── DOCUMENTACION.md                 # Este archivo

```

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js**: Versión 16 o superior
- **npm**: Versión 7 o superior (viene con Node.js)
- Editor de código (recomendado: VS Code)

### Paso 1: Clonar o Descargar el Proyecto

```bash
# Si usas Git
git clone [URL_DEL_REPOSITORIO]
cd crediHogar

# O simplemente navega a la carpeta del proyecto
cd c:\Users\andro\Desktop\crediHogar
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Este comando instalará:
- React y React-DOM
- Vite y sus plugins
- Dependencias de desarrollo necesarias

### Paso 3: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en:
```
http://localhost:3000
```

### Paso 4: Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Paso 5: Vista Previa de Producción

```bash
npm run preview
```

---

## 📖 Guía de Uso

### Para Clientes (Usuarios Finales)

#### 1. Explorar el Catálogo

1. Al abrir la app, verás todos los productos disponibles
2. Usa los botones de categorías para filtrar productos específicos
3. Cada tarjeta muestra:
   - Imagen del producto
   - Nombre
   - Categoría
   - Descripción breve
   - Precio
   - Botón "Ver más"

#### 2. Ver Detalles de un Producto

1. Haz clic en cualquier producto o en "Ver más"
2. Se abrirá un modal con:
   - Galería de imágenes (si hay múltiples)
   - Descripción completa
   - Precio destacado
   - Botón "Comprar por WhatsApp"

#### 3. Comprar por WhatsApp

1. En el detalle del producto, haz clic en "Comprar por WhatsApp"
2. Se abrirá WhatsApp con un mensaje automático:
   ```
   Hola, estoy interesado en el producto: [Nombre del Producto]
   
   Precio: $X.XXX.XXX
   
   ¿Está disponible?
   ```
3. Simplemente presiona enviar y espera la respuesta del vendedor

#### 4. Contacto General

- Usa el botón "Contacto" en el header para comunicarte directamente
- O el botón flotante 💬 en la esquina inferior derecha

### Para Administradores (Dueños de la Tienda)

#### 1. Activar Modo Administrador

1. Haz clic en el botón "Admin" en el header
2. El botón cambiará a "Admin ON" con color verde
3. Aparecerá un mensaje de bienvenida y el panel de administración

#### 2. Agregar un Nuevo Producto

1. Completa el formulario en el panel de administración:
   - **Nombre**: Nombre descriptivo del producto
   - **Descripción**: Detalles, características, materiales
   - **Precio**: En pesos colombianos (COP)
   - **Categoría**: Escoge existente o crea una nueva
   - **Imágenes**: Agrega URLs de imágenes (al menos una)
   - **Destacado**: Marca si quieres destacar el producto

2. Haz clic en "Crear Producto"
3. El producto aparecerá inmediatamente en el catálogo

#### 3. Editar un Producto Existente

1. Con el modo administrador activo, verás botones "Editar" y "Eliminar" en cada producto
2. Haz clic en "✏️ Editar"
3. El formulario se llenará con los datos actuales
4. Modifica lo que necesites
5. Haz clic en "Actualizar Producto"

#### 4. Eliminar un Producto

1. Haz clic en "🗑️ Eliminar" en la tarjeta del producto
2. Confirma la eliminación en el mensaje de confirmación
3. El producto se eliminará permanentemente

#### 5. Gestionar Imágenes

**Agregar imágenes:**
1. En el formulario, pega la URL de la imagen
2. Haz clic en "➕ Agregar"
3. Repite para agregar más imágenes

**Eliminar imágenes:**
1. Haz clic en "Eliminar" junto a la imagen que quieres quitar

**Notas sobre imágenes:**
- Usa URLs públicas de imágenes (https://...)
- Servicios recomendados: Unsplash, Imgur, Cloudinary
- La primera imagen será la principal
- Tamaño recomendado: 800x800px mínimo

#### 6. Desactivar Modo Administrador

1. Haz clic nuevamente en "Admin ON"
2. Los botones de edición/eliminación desaparecerán
3. El catálogo volverá a la vista de cliente

---

## 🧩 Componentes Principales

### 1. Header (Encabezado)

**Ubicación**: `src/components/Header/`

**Responsabilidades:**
- Mostrar el logo y nombre de la marca
- Botón para activar/desactivar modo administrador
- Botón de contacto por WhatsApp

**Props**: Ninguna (usa Context API)

**Personalización:**
```jsx
// Cambiar número de WhatsApp
const WHATSAPP_NUMBER = '573001234567'; // Reemplaza con tu número
```

---

### 2. CategoryFilter (Filtro de Categorías)

**Ubicación**: `src/components/CategoryFilter/`

**Responsabilidades:**
- Mostrar todas las categorías disponibles
- Filtrar productos por categoría
- Mostrar contador de productos por categoría

**Características:**
- Botón "Todos" para ver todos los productos
- Categorías dinámicas basadas en productos
- Iconos personalizables por categoría

**Personalizar iconos:**
```javascript
const categoryIcons = {
  'Todos': '🏠',
  'Muebles': '🛋️',
  'Electrodomésticos': '🔌',
  'Electrónica': '📱',
  'TuCategoría': '🎨' // Agrega tu categoría
};
```

---

### 3. ProductCard (Tarjeta de Producto)

**Ubicación**: `src/components/ProductCard/`

**Responsabilidades:**
- Mostrar información resumida del producto
- Imagen, nombre, precio, descripción breve
- Abrir detalle al hacer clic
- Botones de edición/eliminación en modo admin

**Props:**
- `product`: Objeto con datos del producto
- `onEdit`: Función para editar el producto

**Estructura del objeto product:**
```javascript
{
  id: 1,
  name: "Nombre del Producto",
  description: "Descripción completa...",
  price: 899000,
  category: "Categoría",
  images: ["url1", "url2"],
  featured: true/false
}
```

---

### 4. ProductGrid (Cuadrícula de Productos)

**Ubicación**: `src/components/ProductGrid/`

**Responsabilidades:**
- Renderizar todas las tarjetas de productos
- Aplicar filtros de categoría
- Mostrar estados vacíos y de carga

**Características:**
- Grid responsivo (ajuste automático de columnas)
- Animaciones de entrada
- Mensajes personalizados si no hay productos

---

### 5. ProductDetail (Detalle del Producto)

**Ubicación**: `src/components/ProductDetail/`

**Responsabilidades:**
- Modal con información completa del producto
- Galería de imágenes con miniaturas
- Botón de compra por WhatsApp

**Características:**
- Cierre con tecla ESC
- Cierre al hacer clic fuera del modal
- Bloqueo de scroll mientras está abierto
- Navegación entre imágenes

---

### 6. AdminPanel (Panel de Administración)

**Ubicación**: `src/components/AdminPanel/`

**Responsabilidades:**
- Formulario para agregar/editar productos
- Validación de datos
- Gestión de imágenes múltiples

**Validaciones incluidas:**
- Nombre: mínimo 3 caracteres
- Descripción: mínimo 10 caracteres
- Precio: mayor a 0
- Categoría: obligatoria
- Imágenes: al menos una

---

### 7. ProductContext (Contexto de Estado)

**Ubicación**: `src/context/ProductContext.jsx`

**Responsabilidades:**
- Gestión de estado global de productos
- Funciones CRUD (Crear, Leer, Actualizar, Eliminar)
- Persistencia en localStorage
- Filtrado de productos

**Funciones disponibles:**
```javascript
const {
  products,              // Array de todos los productos
  selectedProduct,       // Producto seleccionado (detalle)
  setSelectedProduct,    // Función para seleccionar
  activeCategory,        // Categoría activa
  setActiveCategory,     // Cambiar categoría
  isAdminMode,          // Estado del modo admin
  setIsAdminMode,       // Activar/desactivar admin
  addProduct,           // Agregar producto
  updateProduct,        // Actualizar producto
  deleteProduct,        // Eliminar producto
  getCategories,        // Obtener categorías
  getFilteredProducts,  // Productos filtrados
  getFeaturedProducts   // Productos destacados
} = useProducts();
```

---

## 🎨 Personalización

### Cambiar Colores de la Marca

Edita `src/index.css` en la sección `:root`:

```css
:root {
  /* Colores principales */
  --primary-color: #2563eb;      /* Azul principal */
  --primary-dark: #1e40af;       /* Azul oscuro */
  --primary-light: #3b82f6;      /* Azul claro */
  --secondary-color: #0ea5e9;    /* Azul cielo */
  
  /* Personaliza aquí tus colores */
  --primary-color: #TU_COLOR;
}
```

### Cambiar Tipografía

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Selecciona tu tipografía favorita
3. Reemplaza en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;600&display=swap" rel="stylesheet">
```

4. Actualiza en `src/index.css`:

```css
body {
  font-family: 'TuFuente', sans-serif;
}
```

### Configurar Número de WhatsApp

**En Header.jsx:**
```javascript
const WHATSAPP_NUMBER = '573001234567'; // Tu número aquí
```

**En helpers.js:**
```javascript
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
  // Cambiar el número por defecto
}
```

**En App.jsx (botón flotante):**
```javascript
onClick={() => window.open('https://wa.me/TU_NUMERO?text=...', '_blank')}
```

### Personalizar Mensajes de WhatsApp

Edita `src/utils/helpers.js`:

```javascript
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
  const message = `
    ¡Hola! 👋
    
    Estoy interesado en: *${product.name}*
    Precio: ${formatCurrency(product.price)}
    
    ¿Puedes darme más información?
  `.trim();
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
```

### Agregar Logo Personalizado

1. Coloca tu logo en `public/logo.png`
2. Edita `src/components/Header/Header.jsx`:

```jsx
<div className="logo-icon">
  <img src="/logo.png" alt="Logo" style={{width: '100%'}} />
</div>
```

### Cambiar Información del Footer

Edita `src/App.jsx` en la sección del footer:

```jsx
<div className="footer-section">
  <h3>Contacto</h3>
  <p>📱 WhatsApp: TU_NUMERO</p>
  <p>📧 Email: TU_EMAIL</p>
  <p>📍 Ubicación: TU_CIUDAD</p>
</div>
```

---

## 🌐 Despliegue

### Opción 1: Netlify (Recomendado)

1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Conecta tu repositorio de GitHub
3. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Haz clic en "Deploy"

### Opción 2: Vercel

1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Importa tu proyecto
3. Vercel detectará automáticamente la configuración de Vite
4. Haz clic en "Deploy"

### Opción 3: GitHub Pages

1. Instala el paquete gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega en `package.json`:
```json
{
  "homepage": "https://tu-usuario.github.io/credihogar",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Despliega:
```bash
npm run deploy
```

### Opción 4: Servidor Propio

1. Construye el proyecto:
```bash
npm run build
```

2. Sube la carpeta `dist/` a tu servidor web
3. Configura tu servidor (Apache/Nginx) para servir archivos estáticos

---

## 🔧 Solución de Problemas

### Problema: "npm: command not found"

**Solución:** Instala Node.js desde [nodejs.org](https://nodejs.org/)

---

### Problema: Las imágenes no se cargan

**Causas posibles:**
1. URL inválida o no pública
2. Servidor de imágenes bloqueando peticiones (CORS)

**Soluciones:**
- Verifica que la URL sea accesible en el navegador
- Usa servicios confiables (Unsplash, Cloudinary, Imgur)
- Considera subir imágenes a tu propio servidor

---

### Problema: Los productos no se guardan

**Causa:** LocalStorage deshabilitado o lleno

**Solución:**
1. Verifica que localStorage esté habilitado en el navegador
2. Limpia localStorage si está lleno:
```javascript
localStorage.clear();
```

---

### Problema: El modo administrador no funciona

**Solución:**
- Asegúrate de hacer clic en el botón "Admin" en el header
- Verifica que el estado se esté actualizando correctamente
- Revisa la consola del navegador por errores

---

### Problema: WhatsApp no se abre

**Causas posibles:**
1. Número de teléfono mal configurado
2. WhatsApp no instalado en dispositivo móvil

**Solución:**
- Verifica el formato del número: `[código país][número]`
- Ejemplo correcto: `573001234567` (Colombia)
- En escritorio, abrirá WhatsApp Web

---

## 🚀 Mejoras Futuras

### Corto Plazo

- [ ] Autenticación real para modo administrador
- [ ] Búsqueda de productos por nombre
- [ ] Ordenar productos (precio, nombre, fecha)
- [ ] Productos en oferta/descuento
- [ ] Vista de cuadrícula/lista alternativa

### Mediano Plazo

- [ ] Backend con API (Node.js/Express)
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Subida de imágenes directa (sin URLs)
- [ ] Carrito de compras
- [ ] Wishlist/Favoritos
- [ ] Compartir productos en redes sociales

### Largo Plazo

- [ ] Pagos en línea integrados
- [ ] Sistema de usuarios/cuentas
- [ ] Historial de pedidos
- [ ] Sistema de notificaciones
- [ ] App móvil nativa (React Native)
- [ ] Análisis y estadísticas de ventas
- [ ] Soporte multiidioma
- [ ] Modo oscuro

---

## 📝 Notas Importantes

### Seguridad

⚠️ **Modo Administrador Actual:**
- El modo administrador actual NO tiene autenticación real
- Cualquier persona puede activarlo desde el navegador
- Es una versión de desarrollo/demo

**Para producción:**
1. Implementa autenticación con usuario/contraseña
2. Usa JWT o sesiones para proteger rutas
3. Valida permisos en el backend
4. Implementa un backend seguro

### Almacenamiento

📦 **LocalStorage:**
- Los datos se guardan en el navegador del usuario
- Se pierden si se limpia el caché/localStorage
- Límite aproximado: 5-10 MB por dominio

**Para producción:**
- Implementa un backend con base de datos
- Los datos estarán centralizados y seguros
- Sincronización entre dispositivos

### Imágenes

🖼️ **Gestión de Imágenes:**
- Actualmente se usan URLs externas
- Dependencia de servicios de terceros

**Recomendación para producción:**
- Implementa subida de imágenes a tu propio servidor
- Usa servicios de almacenamiento en la nube (AWS S3, Cloudinary)
- Optimiza imágenes para web (compresión, formatos modernos)

---

## 📞 Soporte y Contacto

¿Necesitas ayuda o tienes preguntas sobre el proyecto?

- 📧 **Email**: [tu-email@ejemplo.com]
- 💬 **WhatsApp**: [Tu número]
- 🐛 **Reportar bugs**: [URL del repositorio/issues]
- 📖 **Wiki**: [URL de documentación adicional]

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 🙏 Agradecimientos

Gracias por usar **CrediHogar**. Esperamos que esta aplicación te ayude a hacer crecer tu negocio y brindar una excelente experiencia a tus clientes.

**¡Éxito en tus ventas!** 🎉🛒

---

**Versión de la documentación**: 1.0.0  
**Última actualización**: Noviembre 2025  
**Autor**: Equipo CrediHogar
