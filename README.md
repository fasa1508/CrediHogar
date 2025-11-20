# 🏠 CrediHogar - Catálogo de Productos

Una aplicación web moderna y responsive para catálogo de productos con integración directa a WhatsApp. Perfecta para negocios que quieren vender de forma simple y efectiva.

![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Estado](https://img.shields.io/badge/Estado-Completo-success)

## ✨ Características

- 📱 **100% Responsive** - Optimizado para móviles, tablets y escritorio
- 🛒 **Integración WhatsApp** - Compra directa con mensaje automático
- 🎨 **Diseño Moderno** - UI/UX profesional con animaciones suaves
- 🔐 **Panel de Administración** - Gestiona productos fácilmente
- 📂 **Categorías Dinámicas** - Filtra productos por tipo
- 🖼️ **Galería de Imágenes** - Múltiples fotos por producto
- ⭐ **Productos Destacados** - Resalta tus mejores productos
- 💾 **Almacenamiento Local** - Sin necesidad de backend inicial

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 16+ instalado
- npm 7+ instalado

### Instalación

```bash
# 1. Clonar o navegar al proyecto
cd crediHogar

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 📖 Uso

### Para Clientes

1. **Explorar productos** - Navega por el catálogo visual
2. **Filtrar por categoría** - Usa los botones de categoría
3. **Ver detalles** - Haz clic en cualquier producto
4. **Comprar** - Botón "Comprar por WhatsApp" envía mensaje automático

### Para Administradores

1. **Activar modo admin** - Clic en botón "Admin" en header
2. **Agregar productos** - Completa el formulario
3. **Editar productos** - Botón "Editar" en cada tarjeta
4. **Eliminar productos** - Botón "Eliminar" en cada tarjeta

## 🎨 Personalización

### Cambiar Número de WhatsApp

Edita en múltiples archivos:

```javascript
// src/components/Header/Header.jsx
const WHATSAPP_NUMBER = '573001234567';

// src/utils/helpers.js
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
  // ...
}
```

### Cambiar Colores

Edita `src/index.css`:

```css
:root {
  --primary-color: #2563eb;  /* Tu color aquí */
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;
}
```

## 📁 Estructura del Proyecto

```
crediHogar/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header/
│   │   ├── CategoryFilter/
│   │   ├── ProductCard/
│   │   ├── ProductGrid/
│   │   ├── ProductDetail/
│   │   └── AdminPanel/
│   ├── context/            # Estado global (Context API)
│   ├── utils/              # Funciones utilitarias
│   ├── App.jsx             # Componente principal
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── DOCUMENTACION.md        # Documentación completa
└── package.json
```

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **Context API** - Gestión de estado
- **CSS3** - Estilos modernos y animaciones
- **LocalStorage** - Persistencia de datos

## 📚 Documentación Completa

Para documentación detallada, consulta [DOCUMENTACION.md](./DOCUMENTACION.md)

Incluye:
- Guía de instalación paso a paso
- Descripción de todos los componentes
- Personalización avanzada
- Guía de despliegue
- Solución de problemas
- Mejoras futuras planificadas

## 🌐 Despliegue

### Netlify (Recomendado)

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Importa proyecto
2. Auto-detecta configuración
3. Deploy!

## ⚠️ Notas Importantes

- **Modo Admin**: Actualmente sin autenticación real. Para producción, implementar login seguro.
- **Almacenamiento**: Usa localStorage (solo navegador). Para producción, implementar backend con base de datos.
- **Imágenes**: Se usan URLs externas. Para producción, considerar almacenamiento propio.

## 🚀 Próximas Mejoras

- [ ] Autenticación de administrador
- [ ] Backend con API REST
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Subida directa de imágenes
- [ ] Búsqueda de productos
- [ ] Carrito de compras
- [ ] Sistema de ofertas/descuentos

## 📄 Licencia

MIT License - Libre para uso comercial y personal

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

¿Preguntas o problemas?

- 📧 Email: info@credihogar.com
- 💬 WhatsApp: +57 317 788 4743
- 🐛 Issues: [GitHub Issues]

---

**Hecho con ❤️ para CrediHogar**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
