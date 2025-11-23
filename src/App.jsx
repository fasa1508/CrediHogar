// ===================================
// APP - COMPONENTE PRINCIPAL
// ===================================

import React, { useState } from 'react';
import { ProductProvider, useProducts } from './context/ProductContext';
import Header from './components/Header/Header';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AdminPanel from './components/AdminPanel/AdminPanel';
import './App.css';

// Componente interno que usa el contexto
const AppContent = () => {
  const { isAdminMode } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  // Scroll al panel de admin cuando se edita un producto
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    // Hacer scroll al panel de administración
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app">
      {/* Header con logo y botones */}
      <Header />

      {/* Contenido principal */}
      <main className="main-content">
        {/* Mensaje de bienvenida en modo admin */}
        {isAdminMode && (
          <div className="container">
            <div className="admin-welcome">
              <h3>🔓 Modo Administrador Activado</h3>
              <p>Ahora puedes agregar, editar y eliminar productos del catálogo</p>
            </div>
          </div>
        )}

        {/* Panel de administración (solo visible en modo admin) */}
        {isAdminMode && (
          <div className="container">
            <AdminPanel 
              editingProduct={editingProduct}
              onCancelEdit={() => setEditingProduct(null)}
            />
          </div>
        )}

        {/* Filtro de categorías */}
        <CategoryFilter />

        {/* Grid de productos */}
        <ProductGrid onEditProduct={handleEditProduct} />

        {/* Modal de detalle del producto */}
        <ProductDetail />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🏠 CrediHogar</h3>
            <p>Tu tienda de confianza para equipar tu hogar con los mejores productos.</p>
            <p>Compra fácil y rápido por WhatsApp.</p>
          </div>

          

          <div className="footer-section">
            <h3>Contacto</h3>
            <p>📱 WhatsApp: +57 317 788 4743</p>
            <p>📧 Email: info@credihogar.com</p>
            <p>📍 Ubicación: Villamaria/Caldas</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CrediHogar. Todos los derechos reservados. Hecho con ❤️ para nuestros clientes.</p>
        </div>
      </footer>

      {/* Botón flotante de ayuda/WhatsApp */}
      <button 
        className="floating-help-btn"
        onClick={() => window.open('https://wa.me/573177884743?text=Hola,%20necesito%20ayuda', '_blank')}
        title="¿Necesitas ayuda? Contáctanos por WhatsApp"
      >
        💬
      </button>
    </div>
  );
};

// Componente App principal con Provider
function App() {
  return (
    <ProductProvider>
      <AppContent />
    </ProductProvider>
  );
}

export default App;
