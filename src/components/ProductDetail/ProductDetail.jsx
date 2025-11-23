// ===================================
// DETALLE DE PRODUCTO - MODAL
// ===================================

import React, { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductContext';
import { formatCurrency, generateWhatsAppLink } from '../../utils/helpers';
import './ProductDetail.css';

const ProductDetail = () => {
  const { selectedProduct, setSelectedProduct } = useProducts();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Resetear índice de imagen al cambiar de producto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = generateWhatsAppLink(selectedProduct);
    window.open(whatsappLink, '_blank');
  };

  // Combinar imágenes y videos en un solo array de medios
  const media = [
    ...(selectedProduct.images || []).map(url => ({ type: 'image', url })),
    ...(selectedProduct.videos || []).map(url => ({ type: 'video', url }))
  ];

  const hasMedia = media.length > 0;
  const currentMedia = hasMedia ? media[currentImageIndex] : null;

  return (
    <div className="product-modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal">
        {/* Botón de cerrar */}
        <button className="modal-close-btn" onClick={handleClose} title="Cerrar">
          ✕
        </button>

        <div className="modal-content">
          {/* Sección de imágenes */}
          <div className="modal-images">
            {hasMedia ? (
              <>
                {currentMedia.type === 'image' ? (
                  <img
                    src={currentMedia.url}
                    alt={selectedProduct.name}
                    className="modal-main-image"
                  />
                ) : (
                  <video
                    src={currentMedia.url}
                    className="modal-main-video"
                    controls
                    autoPlay
                    loop
                  />
                )}
                {media.length > 1 && (
                  <div className="modal-thumbnails">
                    {media.map((item, index) => (
                      item.type === 'image' ? (
                        <img
                          key={index}
                          src={item.url}
                          alt={`${selectedProduct.name} - vista ${index + 1}`}
                          className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ) : (
                        <video
                          key={index}
                          src={item.url}
                          className={`thumbnail thumbnail-video ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          muted
                        />
                      )
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="modal-image-placeholder">📦</div>
            )}
          </div>

          {/* Sección de información */}
          <div className="modal-info">
            {/* Categoría */}
            <span className="modal-category">{selectedProduct.category}</span>

            {/* Badge de destacado */}
            {selectedProduct.featured && (
              <div className="modal-featured-badge">
                <span>⭐</span>
                <span>Producto Destacado</span>
              </div>
            )}

            {/* Título */}
            <h2 className="modal-title">{selectedProduct.name}</h2>

            {/* Descripción */}
            <p className="modal-description">{selectedProduct.description}</p>

            {/* Sección de precio */}
            <div className="modal-price-section">
              <p className="modal-price-label">Precio especial</p>
              <p className="modal-price">{formatCurrency(selectedProduct.price)}</p>
            </div>

            {/* Botón de WhatsApp */}
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <span className="whatsapp-icon">📱</span>
              <span>Comprar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
