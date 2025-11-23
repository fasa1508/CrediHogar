// ===================================
// LOGIN ADMIN - COMPONENTE
// ===================================

import React, { useState } from 'react';
import './LoginAdmin.css';

// CREDENCIALES DEL ADMINISTRADOR (Cambiar por las tuyas)
const ADMIN_CREDENTIALS = {
  username: 'admin',      // ⬅️ CAMBIAR USUARIO AQUÍ
  password: 'admin123'    // ⬅️ CAMBIAR CONTRASEÑA AQUÍ
};

const LoginAdmin = ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular pequeña demora (como si verificara con servidor)
    setTimeout(() => {
      // Verificar credenciales
      if (
        username === ADMIN_CREDENTIALS.username && 
        password === ADMIN_CREDENTIALS.password
      ) {
        // Login exitoso
        onLogin();
      } else {
        // Credenciales incorrectas
        setError('Usuario o contraseña incorrectos');
        setPassword(''); // Limpiar contraseña
      }
      setIsLoading(false);
    }, 500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <div className="login-header">
          <div className="login-icon">🔐</div>
          <h2 className="login-title">Acceso Administrador</h2>
          <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* Campo Usuario */}
          <div className="login-input-group">
            <label className="login-label" htmlFor="username">
              <span>👤</span>
              <span>Usuario</span>
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              className={`login-input ${error ? 'error' : ''}`}
              placeholder="Ingresa tu usuario"
              autoComplete="username"
              autoFocus
              required
            />
          </div>

          {/* Campo Contraseña */}
          <div className="login-input-group">
            <label className="login-label" htmlFor="password">
              <span>🔑</span>
              <span>Contraseña</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className={`login-input ${error ? 'error' : ''}`}
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              required
            />
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="login-error">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Botones */}
          <div className="login-buttons">
            <button
              type="submit"
              className="login-submit-btn"
              disabled={isLoading || !username || !password}
            >
              <span>{isLoading ? '⏳' : '🔓'}</span>
              <span>{isLoading ? 'Verificando...' : 'Iniciar Sesión'}</span>
            </button>

            <button
              type="button"
              className="login-cancel-btn"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancelar
            </button>
          </div>

          {/* Información */}
          <div className="login-info">
            ℹ️ Solo el administrador puede acceder a este panel
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
