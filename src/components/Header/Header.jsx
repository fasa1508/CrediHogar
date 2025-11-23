// ===================================
// HEADER - COMPONENTE PRINCIPAL
// ===================================

import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import LoginAdmin from '../LoginAdmin/LoginAdmin';
import './Header.css';

const Header = () => {
  const { isAdminMode, setIsAdminMode } = useProducts();
  const [showLogin, setShowLogin] = useState(false);

  // Número de WhatsApp del negocio (cambiar por el número real)
  const WHATSAPP_NUMBER = '573177884743';

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hola, me gustaría saber más sobre sus productos CrediHogar');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleAdminClick = () => {
    if (isAdminMode) {
      // Si ya está en modo admin, cerrar sesión
      setIsAdminMode(false);
    } else {
      // Si no está en modo admin, mostrar login
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setIsAdminMode(true);
  };

  const handleLoginCancel = () => {
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo y nombre de la marca */}
        <div className="header-logo">
          <div className="logo-icon">🏠</div>
          <div className="logo-text">
            <h1>CrediHogar</h1>
            <p>Decoramos tu hogar con estilo y facilidad.</p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="header-actions">
          {/* Botón para activar/desactivar modo administrador */}
          <button
            className={`admin-toggle-btn ${isAdminMode ? 'active' : ''}`}
            onClick={handleAdminClick}
            title={isAdminMode ? 'Salir del modo administrador' : 'Entrar al modo administrador'}
          >
            <span>{isAdminMode ? '🔓' : '🔒'}</span>
            <span>{isAdminMode ? 'Admin ON' : 'Admin'}</span>
          </button>

          {/* Botón de contacto por WhatsApp */}
          <button
            className="whatsapp-contact-btn"
            onClick={handleWhatsAppContact}
            title="Contáctanos por WhatsApp"
          >
            <span>📱</span>
            <span>Contacto</span>
          </button>
        </div>
      </div>

      {/* Modal de Login Admin */}
      {showLogin && (
        <LoginAdmin 
          onLogin={handleLoginSuccess}
          onCancel={handleLoginCancel}
        />
      )}
    </header>
  );
};

export default Header;
