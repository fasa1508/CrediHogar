// ===================================
// GRID DE PRODUCTOS - COMPONENTE
// ===================================

import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ onEditProduct }) => {
  const { getFilteredProducts, activeCategory, setActiveCategory } = useProducts();
  const [isLoading, setIsLoading] = useState(false);

  // Obtener productos filtrados
  const filteredProducts = getFilteredProducts();

  // Simular carga (opcional, para efectos visuales)
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Mostrar estado de carga
  if (isLoading) {
    return (
      <section className="product-grid-section">
        <div className="product-grid-content">
          <div className="loading-state">
            <div className="loading-icon">⏳</div>
            <h3>Cargando productos...</h3>
            <p>Espera un momento</p>
          </div>
        </div>
      </section>
    );
  }

  // Mostrar mensaje si no hay productos
  if (filteredProducts.length === 0) {
    return (
      <section className="product-grid-section">
        <div className="product-grid-content">
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3>No hay productos en esta categoría</h3>
            <p>
              {activeCategory === 'Todos' 
                ? 'Aún no hay productos disponibles. El administrador puede agregar productos desde el panel de administración.'
                : `No encontramos productos en "${activeCategory}". Intenta con otra categoría.`
              }
            </p>
            {activeCategory !== 'Todos' && (
              <button 
                className="change-category-btn"
                onClick={() => setActiveCategory('Todos')}
              >
                Ver todos los productos
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-grid-section">
      <div className="product-grid-content">
        {/* Encabezado de sección */}
        <div className="section-header">
          <h2 className="section-title">
            {activeCategory === 'Todos' 
              ? 'Todos nuestros productos' 
              : `Productos de ${activeCategory}`
            }
          </h2>
          <p className="section-subtitle">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto disponible' : 'productos disponibles'}
          </p>
        </div>

        {/* Grid de productos */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onEdit={onEditProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
