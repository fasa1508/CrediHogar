# 🚀 GUÍA RÁPIDA DE INICIO - CrediHogar

## ⚡ Inicio Inmediato (3 Pasos)

### 1️⃣ Instalar Dependencias
```bash
npm install
```

### 2️⃣ Iniciar Aplicación
```bash
npm run dev
```

### 3️⃣ Abrir en Navegador
```
http://localhost:3000
```

---

## 📱 CONFIGURACIÓN ESENCIAL

### 🔧 Cambiar Número de WhatsApp

**Archivos a modificar:**

1. **src/components/Header/Header.jsx** (línea ~10)
```javascript
const WHATSAPP_NUMBER = '573001234567'; // ⬅️ TU NÚMERO AQUÍ
```

2. **src/utils/helpers.js** (línea ~25)
```javascript
export const generateWhatsAppLink = (product, phoneNumber = '573001234567') => {
                                                            // ⬅️ TU NÚMERO AQUÍ
```

3. **src/App.jsx** (línea ~82)
```javascript
onClick={() => window.open('https://wa.me/573001234567?text=...', '_blank')}
                                            // ⬅️ TU NÚMERO AQUÍ
```

**Formato del número:**
- ✅ Correcto: `573001234567` (código país + número, SIN espacios ni guiones)
- ❌ Incorrecto: `+57 300 123 4567` o `300-123-4567`

---

### 🎨 Cambiar Colores de Marca

**Archivo:** `src/index.css` (líneas 11-14)

```css
:root {
  --primary-color: #2563eb;     /* Color principal (azul) */
  --primary-dark: #1e40af;      /* Azul oscuro */
  --primary-light: #3b82f6;     /* Azul claro */
  --secondary-color: #0ea5e9;   /* Color secundario */
}
```

**Herramienta recomendada para elegir colores:**
- https://coolors.co/
- https://color.adobe.com/

---

### 🏠 Cambiar Nombre y Logo

**Archivo:** `src/components/Header/Header.jsx` (líneas 25-30)

```jsx
<div className="logo-text">
  <h1>CrediHogar</h1>           {/* ⬅️ Cambia aquí */}
  <p>Tu hogar, tu crédito</p>   {/* ⬅️ Y aquí */}
</div>
```

**Para agregar logo personalizado:**
1. Guarda tu logo en: `public/logo.png`
2. Reemplaza el emoji en Header.jsx:
```jsx
<div className="logo-icon">
  <img src="/logo.png" alt="Logo" style={{width: '40px'}} />
</div>
```

---

## 📦 CÓMO USAR LA APLICACIÓN

### 👤 Modo Cliente (Usuario Normal)

1. **Ver productos** → Solo navega, todo es visible
2. **Filtrar** → Haz clic en los botones de categoría
3. **Ver detalle** → Clic en cualquier producto
4. **Comprar** → Botón verde "Comprar por WhatsApp"

### 🔐 Modo Administrador

1. **Activar:** Clic en botón "Admin" en el header → Cambiará a "Admin ON" (verde)
2. **Agregar producto:** Completa el formulario que aparece arriba
3. **Editar producto:** Botón "✏️ Editar" en cada tarjeta
4. **Eliminar producto:** Botón "🗑️ Eliminar" en cada tarjeta
5. **Desactivar:** Clic nuevamente en "Admin ON"

---

## 📸 AGREGAR IMÁGENES DE PRODUCTOS

### Opción 1: Usar URLs de Unsplash (Gratis)

1. Ve a: https://unsplash.com/
2. Busca una imagen (ej: "sofa")
3. Clic derecho en la imagen → "Copiar dirección de imagen"
4. Pega la URL en el campo de imágenes

**Ejemplo de URL válida:**
```
https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80
```

### Opción 2: Usar Imgur (Gratis)

1. Ve a: https://imgur.com/
2. Sube tu imagen
3. Clic derecho → "Copiar enlace de imagen"
4. Pega en el formulario

### Opción 3: Usar URLs de tu sitio web

Si tienes un sitio web con imágenes:
```
https://www.tusitioweb.com/imagenes/producto.jpg
```

---

## 🏗️ CONSTRUIR PARA PRODUCCIÓN

### Generar archivos optimizados:
```bash
npm run build
```

Los archivos se crearán en la carpeta `dist/`

### Vista previa local:
```bash
npm run preview
```

---

## 🌐 PUBLICAR EN INTERNET

### Netlify (MÁS FÁCIL - Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a: https://www.netlify.com/
3. Clic en "Add new site" → "Import from Git"
4. Selecciona tu repositorio
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clic en "Deploy"
7. ¡Listo! Tu sitio estará en: `tu-app.netlify.app`

### Vercel (También fácil)

1. Ve a: https://vercel.com/
2. Importa tu proyecto de GitHub
3. Auto-detecta la configuración
4. Deploy!

---

## ⚠️ PROBLEMAS COMUNES

### ❌ Error: "npm: command not found"
**Solución:** Instala Node.js desde https://nodejs.org/

### ❌ Las imágenes no aparecen
**Solución:** 
- Verifica que la URL sea pública y accesible
- Prueba abriendo la URL directamente en el navegador
- Usa URLs de Unsplash o Imgur (más confiables)

### ❌ Los productos no se guardan
**Solución:**
- Los productos se guardan en localStorage (navegador local)
- Si limpias el caché, se borrarán
- Para persistencia real, necesitas un backend

### ❌ WhatsApp no se abre
**Solución:**
- Verifica el formato del número (sin espacios ni guiones)
- Formato correcto: `573001234567`
- En móvil abre la app, en escritorio abre WhatsApp Web

---

## 📞 PERSONALIZAR INFORMACIÓN DE CONTACTO

### Footer
**Archivo:** `src/App.jsx` (líneas 65-70)

```jsx
<div className="footer-section">
  <h3>Contacto</h3>
  <p>📱 WhatsApp: +57 300 123 4567</p>     {/* ⬅️ Cambia aquí */}
  <p>📧 Email: info@credihogar.com</p>     {/* ⬅️ Y aquí */}
  <p>📍 Ubicación: Colombia</p>            {/* ⬅️ Y aquí */}
</div>
```

---

## 🎯 ESTRUCTURA DE UN PRODUCTO

Cada producto tiene estos campos:

```javascript
{
  name: "Sofá Moderno 3 Puestos",              // Obligatorio
  description: "Sofá cómodo y elegante...",    // Obligatorio
  price: 899000,                               // Obligatorio (número)
  category: "Muebles",                         // Obligatorio
  images: [                                    // Obligatorio (mínimo 1)
    "https://imagen1.jpg",
    "https://imagen2.jpg"
  ],
  featured: true                               // Opcional (destacado)
}
```

---

## 📚 DOCUMENTACIÓN COMPLETA

Para información más detallada:
- **DOCUMENTACION.md** → Guía completa de 500+ líneas
- **README.md** → Información general del proyecto

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

Antes de lanzar tu app, asegúrate de:

- [ ] Cambiar número de WhatsApp en 3 archivos
- [ ] Personalizar nombre de la marca
- [ ] Ajustar colores a tu marca
- [ ] Cambiar información de contacto en footer
- [ ] Agregar tus productos reales
- [ ] Probar en móvil
- [ ] Verificar que WhatsApp funcione
- [ ] Construir con `npm run build`
- [ ] Desplegar en Netlify/Vercel

---

## 🆘 NECESITAS AYUDA?

- 📖 Lee: `DOCUMENTACION.md` (información detallada)
- 🐛 Problemas técnicos: Abre un Issue en GitHub
- 💬 Consultas: [Tu email de contacto]

---

**¡Éxito con tu tienda CrediHogar!** 🎉

Última actualización: Noviembre 2025
