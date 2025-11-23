// ===================================
// TARJETA DE PRODUCTO - COMPONENTE
// ===================================

import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { formatCurrency, truncateText } from '../../utils/helpers';
import './ProductCard.css';

const ProductCard = ({ product, onEdit }) => {
  const { setSelectedProduct, deleteProduct, isAdminMode } = useProducts();

  // Manejar clic en la tarjeta para ver detalles
  const handleCardClick = () => {
    setSelectedProduct(product);
  };

  // Manejar eliminación del producto
  const handleDelete = (e) => {
    e.stopPropagation(); // Evitar que se abra el detalle al eliminar
    if (window.confirm(`¿Estás seguro de eliminar "${product.name}"?`)) {
      deleteProduct(product.id);
    }
  };

  // Manejar edición del producto
  const handleEdit = (e) => {
    e.stopPropagation(); // Evitar que se abra el detalle al editar
    onEdit(product);
  };

  return (
    <article className="product-card" onClick={handleCardClick}>
      {/* Badge si es producto destacado (convertimos a boolean para evitar mostrar 0) */}
      {Boolean(product.featured) && (
        <div className="featured-badge">
          <span>⭐</span>
          <span>Destacado</span>
        </div>
      )}

      {/* Imagen del producto */}
      <div className="product-image-container">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        ) : product.videos && product.videos.length > 0 ? (
          <video
            src={product.videos[0]}
            className="product-image product-video"
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
          />
        ) : (
          <div className="product-image-placeholder">📦</div>
        )}
      </div>

      {/* Información del producto */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">
          {truncateText(product.description, 80)}
        </p>

        {/* Footer con precio y botón */}
        <div className="product-footer">
          <p className="product-price">{formatCurrency(product.price)}</p>
          <button className="view-details-btn">
            Ver más
          </button>
        </div>
      </div>

      {/* Botones de administración (solo visibles en modo admin) */}
      {isAdminMode && (
        <div className="product-admin-actions">
          <button 
            className="admin-edit-btn"
            onClick={handleEdit}
          >
            ✏️ Editar
          </button>
          <button 
            className="admin-delete-btn"
            onClick={handleDelete}
          >
            🗑️ Eliminar
          </button>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
