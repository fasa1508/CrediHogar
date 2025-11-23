// ===================================
// FILTRO DE CATEGORÍAS - COMPONENTE
// ===================================

import React from 'react';
import { useProducts } from '../../context/ProductContext';
import './CategoryFilter.css';

const CategoryFilter = () => {
  const { products, activeCategory, setActiveCategory, getCategories } = useProducts();

  // Obtener todas las categorías disponibles
  const categories = getCategories();

  // Contar productos por categoría
  const getProductCount = (category) => {
    if (category === 'Todos') {
      return products.length;
    }
    return products.filter(p => p.category === category).length;
  };

  // Emojis por categoría (personalizable)
  const categoryIcons = {
    'Todos': '🏠',
    'Muebles': '🛋️',
    'Electrodomésticos': '🔌',
    'Electrónica': '📱',
    'Decoración': '🎨',
    'Cocina': '🍳',
    'Hogar': '🏡'
  };

  return (
    <section className="category-filter">
      <div className="category-filter-content">
        <h2>Explora por Categoría</h2>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>{categoryIcons[category] || '📦'}</span>
              <span>{category}</span>
              <span className="category-count">{getProductCount(category)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
