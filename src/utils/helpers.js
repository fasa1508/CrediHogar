// ===================================
// UTILIDADES GENERALES - CREDIHOGAR
// ===================================

/**
 * Formatea un número como moneda colombiana (COP)
 * @param {number} amount - El monto a formatear
 * @returns {string} - Monto formateado (ej: "$1.250.000")
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Genera un mensaje de WhatsApp con la información del producto
 * @param {object} product - Objeto del producto
 * @returns {string} - URL de WhatsApp con el mensaje pre-escrito
 */
export const generateWhatsAppLink = (product, phoneNumber = '573177884743') => {
  const message = `Hola, estoy interesado en el producto: *${product.name}*\n\nPrecio: ${formatCurrency(product.price)}\n\n¿Está disponible?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Valida si una URL es una imagen válida
 * @param {string} url - URL a validar
 * @returns {boolean} - true si es válida
 */
export const isValidImageUrl = (url) => {
  if (!url) return false;
  const imagePattern = /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;
  return imagePattern.test(url) || url.includes('unsplash.com') || url.includes('images');
};

/**
 * Trunca un texto a un número específico de caracteres
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado con "..."
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Valida los campos de un producto
 * @param {object} product - Datos del producto
 * @returns {object} - { isValid: boolean, errors: array }
 */
export const validateProduct = (product) => {
  const errors = [];

  if (!product.name || product.name.trim().length < 3) {
    errors.push('El nombre debe tener al menos 3 caracteres');
  }

  if (!product.description || product.description.trim().length < 10) {
    errors.push('La descripción debe tener al menos 10 caracteres');
  }

  if (!product.price || product.price <= 0) {
    errors.push('El precio debe ser mayor a 0');
  }

  if (!product.category || product.category.trim().length === 0) {
    errors.push('Debes seleccionar una categoría');
  }

  if (!product.images || product.images.length === 0) {
    errors.push('Debes agregar al menos una imagen');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Genera un ID único simple
 * @returns {string} - ID único
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Scroll suave hacia arriba
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Debounce para optimizar búsquedas
 * @param {function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
