# ⚙️ CONFIGURACIÓN PERSONALIZADA - CrediHogar

Este archivo te ayudará a personalizar rápidamente tu aplicación CrediHogar para tu negocio.

---

## 🔧 CONFIGURACIONES OBLIGATORIAS

### 1. 📱 Número de WhatsApp

**⚠️ MUY IMPORTANTE - Cambia tu número en estos 3 archivos:**

#### Archivo 1: `src/components/Header/Header.jsx`
```javascript
// Línea ~10
const WHATSAPP_NUMBER = '573001234567'; // ⬅️ CAMBIA AQUÍ
```

#### Archivo 2: `src/utils/helpers.js`
```javascript
// Línea ~25
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
  // ⬅️ CAMBIA EL NÚMERO DEFAULT
```

#### Archivo 3: `src/App.jsx`
```javascript
// Línea ~82
onClick={() => window.open('https://wa.me/573001234567?text=...', '_blank')}
// ⬅️ CAMBIA AQUÍ
```

**Formato correcto del número:**
```
✅ Correcto: 573001234567
    [57] = Código de país (Colombia)
    [300] = Código de operador
    [1234567] = Número

❌ Incorrecto: 
    +57 300 123 4567
    300-123-4567
    (300) 123-4567
```

**Códigos de país comunes:**
- Colombia: 57
- México: 52
- Argentina: 54
- Perú: 51
- Chile: 56
- España: 34
- USA: 1

---

### 2. 🏢 Información de tu Negocio

#### Archivo: `src/components/Header/Header.jsx`
```javascript
// Líneas ~25-30
<div className="logo-text">
  <h1>CrediHogar</h1>           {/* ⬅️ Nombre de tu negocio */}
  <p>Tu hogar, tu crédito</p>   {/* ⬅️ Tu slogan/tagline */}
</div>
```

#### Archivo: `src/App.jsx` (Footer)
```javascript
// Líneas ~50-55
<div className="footer-section">
  <h3>🏠 CrediHogar</h3>
  <p>Tu tienda de confianza...</p>  {/* ⬅️ Descripción de tu negocio */}
</div>

// Líneas ~67-72
<div className="footer-section">
  <h3>Contacto</h3>
  <p>📱 WhatsApp: +57 300 123 4567</p>    {/* ⬅️ Tu WhatsApp */}
  <p>📧 Email: info@credihogar.com</p>    {/* ⬅️ Tu email */}
  <p>📍 Ubicación: Colombia</p>           {/* ⬅️ Tu ciudad/país */}
</div>
```

---

## 🎨 PERSONALIZACIÓN VISUAL

### 3. 🌈 Colores de tu Marca

#### Archivo: `src/index.css` (líneas 11-20)

```css
:root {
  /* ⬅️ CAMBIA ESTOS COLORES */
  --primary-color: #2563eb;      /* Color principal (azul) */
  --primary-dark: #1e40af;       /* Versión oscura (hover) */
  --primary-light: #3b82f6;      /* Versión clara (highlights) */
  --secondary-color: #0ea5e9;    /* Color secundario */
  
  /* Otros colores que puedes cambiar */
  --success-color: #10b981;      /* Verde (confirmaciones) */
  --warning-color: #f59e0b;      /* Naranja (advertencias) */
  --danger-color: #ef4444;       /* Rojo (errores/eliminar) */
}
```

**Herramientas para elegir colores:**
- https://coolors.co/ (generador de paletas)
- https://color.adobe.com/ (Adobe Color)
- https://paletton.com/ (paletas armónicas)

**Consejo:** Usa la regla 60-30-10
- 60% → Color primario
- 30% → Color secundario
- 10% → Color de acento

---

### 4. 🖼️ Logo Personalizado

**Opción A: Usar tu logo (recomendado)**

1. Guarda tu logo como: `public/logo.png`
2. Edita `src/components/Header/Header.jsx`:

```javascript
// Línea ~24
<div className="logo-icon">
  <img src="/logo.png" alt="Logo" style={{width: '40px', height: '40px'}} />
</div>
```

**Opción B: Cambiar el emoji**

```javascript
<div className="logo-icon">
  🏡  {/* ⬅️ Cambia por otro emoji */}
</div>
```

**Emojis sugeridos para negocios:**
- 🏠 Casa
- 🏡 Casa con jardín
- 🛋️ Muebles
- 🏪 Tienda
- 🛒 Carrito de compras
- 💼 Negocio

---

### 5. 🔤 Tipografía (Fuente)

#### Archivo: `index.html`

**Cambiar a otra fuente de Google Fonts:**

1. Ve a: https://fonts.google.com/
2. Selecciona tu fuente favorita
3. Reemplaza en `index.html` (línea ~8):

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;600;700&display=swap" rel="stylesheet">
```

4. Actualiza en `src/index.css` (línea ~28):

```css
body {
  font-family: 'TuFuente', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Fuentes recomendadas para e-commerce:**
- **Poppins** (actual) → Moderna y limpia
- **Montserrat** → Profesional
- **Roboto** → Neutra y legible
- **Open Sans** → Versátil
- **Lato** → Elegante

---

## 📦 CONFIGURACIÓN DE PRODUCTOS

### 6. 🗂️ Categorías Personalizadas

#### Archivo: `src/components/CategoryFilter/CategoryFilter.jsx`

```javascript
// Líneas ~25-35
const categoryIcons = {
  'Todos': '🏠',
  'Muebles': '🛋️',
  'Electrodomésticos': '🔌',
  'Electrónica': '📱',
  
  // ⬅️ AGREGA TUS CATEGORÍAS AQUÍ:
  'Decoración': '🎨',
  'Cocina': '🍳',
  'Jardín': '🌱',
  'TuCategoría': '🔥', // Usa cualquier emoji
};
```

**Emojis por industria:**

**Hogar/Muebles:**
- 🛋️ Sofás
- 🛏️ Camas
- 🪑 Sillas
- 🚪 Puertas

**Electrónica:**
- 📱 Celulares
- 💻 Computadoras
- 📺 TVs
- 🎧 Audio

**Cocina:**
- 🍳 Sartenes
- 🍽️ Vajilla
- ☕ Cafeteras
- 🥘 Ollas

**Ropa:**
- 👔 Formal
- 👕 Casual
- 👗 Vestidos
- 👟 Zapatos

---

### 7. 📝 Productos Iniciales

#### Archivo: `src/context/ProductContext.jsx` (líneas ~25-70)

**Puedes editar o eliminar los productos de ejemplo:**

```javascript
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Tu Producto',              // ⬅️ Nombre
    description: 'Descripción...',     // ⬅️ Descripción
    price: 899000,                     // ⬅️ Precio (número)
    category: 'Tu Categoría',          // ⬅️ Categoría
    images: [                          // ⬅️ URLs de imágenes
      'https://ejemplo.com/imagen.jpg'
    ],
    featured: true                     // ⬅️ true = destacado
  },
  // Agrega más productos...
];
```

**Para empezar con catálogo vacío:**

Reemplaza todo el array por:
```javascript
const SAMPLE_PRODUCTS = [];
```

---

## 💬 MENSAJES DE WHATSAPP

### 8. 📲 Personalizar Mensaje Automático

#### Archivo: `src/utils/helpers.js` (líneas 25-30)

```javascript
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
  const message = `
    Hola, estoy interesado en el producto: *${product.name}*
    
    Precio: ${formatCurrency(product.price)}
    
    ¿Está disponible?
  `;
  
  // ⬅️ PERSONALIZA EL MENSAJE AQUÍ
  // Ejemplos:
  
  // Más formal:
  // const message = `
  //   Buenos días, quisiera información sobre:
  //   📦 Producto: *${product.name}*
  //   💰 Precio: ${formatCurrency(product.price)}
  //   
  //   ¿Tienen disponibilidad?
  //   Gracias.
  // `;
  
  // Más casual:
  // const message = `
  //   Hola! 👋
  //   Me interesa este producto:
  //   ${product.name} - ${formatCurrency(product.price)}
  //   ¿Lo tienen?
  // `;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
```

---

## 🔒 SEGURIDAD (Modo Admin)

### 9. 🔐 Proteger Modo Administrador (Futuro)

**Actualmente:** Cualquiera puede activar el modo admin (botón sin protección)

**Para producción, necesitarás:**

1. **Backend con autenticación**
2. **Sistema de login (usuario/contraseña)**
3. **JWT o sesiones**

**Opción temporal (básica):**

```javascript
// En src/components/Header/Header.jsx
const handleAdminToggle = () => {
  if (!isAdminMode) {
    const password = prompt('Ingresa la contraseña de administrador:');
    if (password === 'TU_PASSWORD_AQUI') { // ⚠️ NO es seguro
      setIsAdminMode(true);
    } else {
      alert('❌ Contraseña incorrecta');
    }
  } else {
    setIsAdminMode(false);
  }
};
```

**⚠️ ADVERTENCIA:** Esto NO es seguro para producción. Implementa autenticación real con backend.

---

## 📊 ANALYTICS Y SEO

### 10. 📈 Google Analytics (Opcional)

#### Archivo: `index.html` (antes de `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-GA-ID');
</script>
```

---

### 11. 🔍 Meta Tags SEO

#### Archivo: `index.html` (en `<head>`)

```html
<!-- ⬅️ PERSONALIZA ESTOS META TAGS -->
<meta name="description" content="CrediHogar - Los mejores productos para tu hogar con crédito fácil" />
<meta name="keywords" content="muebles, electrodomésticos, crédito, hogar" />
<meta name="author" content="Tu Nombre" />

<!-- Open Graph (Facebook/WhatsApp) -->
<meta property="og:title" content="CrediHogar - Tu tienda de confianza" />
<meta property="og:description" content="Productos para tu hogar con crédito fácil" />
<meta property="og:image" content="https://tusitioweb.com/imagen-preview.jpg" />
<meta property="og:url" content="https://tusitioweb.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CrediHogar" />
<meta name="twitter:description" content="Productos para tu hogar" />
<meta name="twitter:image" content="https://tusitioweb.com/imagen-preview.jpg" />
```

---

## ⚙️ CONFIGURACIÓN AVANZADA

### 12. 🌐 Cambiar Puerto del Servidor

#### Archivo: `vite.config.js`

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // ⬅️ Cambia el puerto aquí (default: 3000)
    open: true,        // Auto-abrir navegador
    host: true         // Exponer en red local
  }
})
```

---

### 13. 💾 Tamaño del localStorage

**Verificar cuánto espacio usa tu catálogo:**

Abre la consola del navegador (F12) y ejecuta:

```javascript
// Ver tamaño actual
const size = new Blob([localStorage.getItem('credihogar_products')]).size;
console.log(`Tamaño: ${(size / 1024).toFixed(2)} KB`);

// Límite aproximado: 5-10 MB
```

**Si necesitas más espacio:**
- Considera usar IndexedDB
- O implementar un backend con base de datos

---

## 📱 CONFIGURACIÓN DE IMÁGENES

### 14. 🖼️ Optimizar Imágenes

**Servicios gratuitos para hospedar imágenes:**

1. **Unsplash** (https://unsplash.com/)
   - Gratis, alta calidad
   - Click derecho → Copiar URL de imagen

2. **Imgur** (https://imgur.com/)
   - Upload gratis
   - Genera URLs directas

3. **Cloudinary** (https://cloudinary.com/)
   - 25 GB/mes gratis
   - Redimensionamiento automático
   - CDN rápido

**Formato de URL recomendado:**
```
✅ Directo a la imagen:
https://images.unsplash.com/photo-xxxxx.jpg?w=800&q=80

❌ Evitar:
https://unsplash.com/photos/xxxxx (página web, no imagen)
```

---

## 🚀 CHECKLIST PRE-LANZAMIENTO

Marca cada item antes de publicar tu app:

```
📱 CONFIGURACIÓN BÁSICA:
  [ ] Cambié el número de WhatsApp en los 3 archivos
  [ ] Actualicé el nombre del negocio
  [ ] Personalicé el footer con mis datos
  [ ] Cambié el logo o emoji

🎨 PERSONALIZACIÓN VISUAL:
  [ ] Ajusté los colores a mi marca
  [ ] Elegí una tipografía adecuada
  [ ] Verifiqué que se vea bien en móvil
  [ ] Probé todos los botones y links

📦 PRODUCTOS:
  [ ] Agregué mis productos reales
  [ ] Todas las imágenes cargan correctamente
  [ ] Los precios son correctos
  [ ] Las categorías tienen sentido

💬 WHATSAPP:
  [ ] El mensaje automático está personalizado
  [ ] El link de WhatsApp funciona en móvil
  [ ] El link de WhatsApp funciona en escritorio
  [ ] El botón flotante funciona

🔒 SEGURIDAD:
  [ ] Decidí cómo proteger el modo admin
  [ ] Configuré variables de entorno (si aplica)
  [ ] Revisé que no haya datos sensibles en el código

🌐 SEO Y ANALYTICS:
  [ ] Actualicé los meta tags
  [ ] Agregué Google Analytics (opcional)
  [ ] Configuré Open Graph para compartir

🚀 DEPLOYMENT:
  [ ] Probé el build: npm run build
  [ ] Verifiqué que no haya errores
  [ ] Elegí plataforma de hosting (Netlify/Vercel)
  [ ] Configuré dominio personalizado (opcional)

✅ PRUEBAS FINALES:
  [ ] Probé en Chrome
  [ ] Probé en Safari (si tienes Mac)
  [ ] Probé en Edge
  [ ] Probé en móvil Android
  [ ] Probé en móvil iOS (si tienes iPhone)
  [ ] El flujo completo funciona: ver → filtrar → detalle → WhatsApp
```

---

## 🆘 ¿NECESITAS AYUDA?

Si tienes dudas sobre alguna configuración:

1. **Lee primero:** `DOCUMENTACION.md` (guía completa)
2. **Quick start:** `GUIA-RAPIDA.md` (comandos básicos)
3. **Código:** Todos los archivos están comentados

**Errores comunes:**
- WhatsApp no abre → Revisa el formato del número
- Imágenes no cargan → Verifica que las URLs sean públicas
- Admin no funciona → Asegúrate de hacer clic en el botón

---

## 📞 SOPORTE

- 📖 Documentación: `DOCUMENTACION.md`
- 🚀 Guía rápida: `GUIA-RAPIDA.md`
- 📝 Historial: `BITACORA.md`
- 💬 Contacto: [tu-email@ejemplo.com]

---

**¡Listo! Tu CrediHogar está casi configurado.** 🎉

Sigue el checklist y tendrás tu tienda online funcionando en minutos.

**¡Éxito con tu negocio!** 🚀

---

*Última actualización: Noviembre 2025*
