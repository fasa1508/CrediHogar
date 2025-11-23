// ===================================
// CONTEXTO DE PRODUCTOS - CREDIHOGAR
// ===================================

import { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto para compartir datos de productos en toda la app
const ProductContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts debe usarse dentro de ProductProvider');
  }
  return context;
};

// URL base de la API
const API_URL = 'http://localhost:4000/api/products';

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
  // Estado para almacenar todos los productos
  const [products, setProducts] = useState([]);
  
  // Estado para el producto seleccionado actualmente
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Estado para la categoría activa (filtro)
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Estado para modo administrador
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Cargar productos desde la API al iniciar
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para obtener productos desde la API
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
      setProducts([]);
    }
  };

  // Ya no necesitamos guardar en localStorage, la API maneja la persistencia

  // Función para agregar un nuevo producto
  const addProduct = async (productData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...productData,
          featured: productData.featured || false
        })
      });
      const result = await response.json();
      // Recargar productos desde la API
      await fetchProducts();
      return result;
    } catch (error) {
      console.error('Error al agregar producto:', error);
      throw error;
    }
  };

  // Función para actualizar un producto existente
  const updateProduct = async (productId, updatedData) => {
    try {
      await fetch(`${API_URL}/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      // Recargar productos desde la API
      await fetchProducts();
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  };

  // Función para eliminar un producto
  const deleteProduct = async (productId) => {
    try {
      await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE'
      });
      // Recargar productos desde la API
      await fetchProducts();
      if (selectedProduct?.id === productId) {
        setSelectedProduct(null);
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  };

  // Función para obtener todas las categorías únicas
  const getCategories = () => {
    const categories = [...new Set(products.map(p => p.category))];
    return ['Todos', ...categories];
  };

  // Función para filtrar productos por categoría
  const getFilteredProducts = () => {
    if (activeCategory === 'Todos') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  };

  // Función para obtener productos destacados
  const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
  };

  // Valores y funciones que estarán disponibles en toda la app
  const value = {
    products,
    selectedProduct,
    setSelectedProduct,
    activeCategory,
    setActiveCategory,
    isAdminMode,
    setIsAdminMode,
    addProduct,
    updateProduct,
    deleteProduct,
    getCategories,
    getFilteredProducts,
    getFeaturedProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
