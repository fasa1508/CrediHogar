# 🔐 CREDENCIALES DE ADMINISTRADOR

## 📍 Ubicación del Archivo

**Archivo:** `src/components/LoginAdmin/LoginAdmin.jsx`  
**Líneas:** 8-11

---

## 🔑 Credenciales Actuales

```javascript
const ADMIN_CREDENTIALS = {
  username: 'admin',      // ⬅️ Usuario actual
  password: 'admin123'    // ⬅️ Contraseña actual
};
```

---

## ⚙️ Cómo Cambiar las Credenciales

### Paso 1: Abre el archivo
```
src/components/LoginAdmin/LoginAdmin.jsx
```

### Paso 2: Encuentra estas líneas (8-11):
```javascript
const ADMIN_CREDENTIALS = {
  username: 'admin',      
  password: 'admin123'    
};
```

### Paso 3: Cambia por tus credenciales:
```javascript
const ADMIN_CREDENTIALS = {
  username: 'tu_usuario',      // ⬅️ Cambia aquí
  password: 'tu_contraseña_segura'    // ⬅️ Cambia aquí
};
```

---

## ⚠️ IMPORTANTE - SEGURIDAD

### Recomendaciones:

1. **Cambia las credenciales por defecto** antes de publicar
2. **Usa una contraseña segura**:
   - Mínimo 8 caracteres
   - Combina letras, números y símbolos
   - Ejemplo: `MiClave2025!`

3. **No compartas las credenciales** con nadie
4. **Para producción real**, considera implementar backend con autenticación JWT

---

## 📝 Ejemplo de Credenciales Seguras

```javascript
// ❌ DÉBIL (No usar)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '1234'
};

// ✅ FUERTE (Recomendado)
const ADMIN_CREDENTIALS = {
  username: 'credihogar_admin',
  password: 'CrediH0g@r2025!'
};
```

---

## 🔒 Cómo Funciona el Login

1. Usuario hace clic en botón "Admin"
2. Aparece modal de login con usuario y contraseña
3. Se verifica contra `ADMIN_CREDENTIALS`
4. Si es correcto → Activa modo administrador
5. Si es incorrecto → Muestra mensaje de error

---

## 🚨 Nota de Seguridad

**Este sistema es básico para MVP.**

Para producción real, deberías:
- Implementar backend con API
- Usar tokens JWT
- Hash de contraseñas
- Sesiones seguras
- Rate limiting (anti fuerza bruta)

---

**Ubicación:** `src/components/LoginAdmin/LoginAdmin.jsx`  
**Líneas a modificar:** 8-11
