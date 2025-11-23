// ===================================
// PANEL DE ADMINISTRACIÓN - COMPONENTE
// ===================================

import React, { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductContext';
import { validateProduct, scrollToTop } from '../../utils/helpers';
import './AdminPanel.css';

const AdminPanel = ({ editingProduct, onCancelEdit }) => {
  const { addProduct, updateProduct, getCategories } = useProducts();

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    images: [],
    videos: [],
    featured: false
  });

  const [validationErrors, setValidationErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);

  // Cargar datos si estamos editando
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        description: editingProduct.description,
        price: editingProduct.price,
        category: editingProduct.category,
        images: editingProduct.images || [],
        videos: editingProduct.videos || [],
        featured: editingProduct.featured || false
      });
      scrollToTop();
    }
  }, [editingProduct]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpiar errores al editar
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  // (Eliminado) Agregar imagen por URL

  // Subir video desde archivo local
  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;

    setIsUploadingVideo(true);

    // Convertir cada video a Base64
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        // Validar que sea un video
        if (!file.type.startsWith('video/')) {
          reject(new Error(`${file.name} no es un video válido`));
          return;
        }

        // Validar tamaño (max 50MB por video)
        if (file.size > 50 * 1024 * 1024) {
          reject(new Error(`${file.name} es muy grande (máx 50MB)`));
          return;
        }

        const reader = new FileReader();
        
        reader.onload = (event) => {
          resolve(event.target.result); // Base64 string
        };
        
        reader.onerror = () => {
          reject(new Error(`Error al leer ${file.name}`));
        };
        
        reader.readAsDataURL(file);
      });
    });

    // Procesar todos los videos
    Promise.all(promises)
      .then(base64Videos => {
        setFormData(prev => ({
          ...prev,
          videos: [...prev.videos, ...base64Videos]
        }));
        setIsUploadingVideo(false);
        // Limpiar el input
        e.target.value = '';
      })
      .catch(error => {
        alert(`❌ Error: ${error.message}`);
        setIsUploadingVideo(false);
        e.target.value = '';
      });
  };

  // Subir imagen desde archivo local
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;

    setIsUploadingImage(true);

    // Convertir cada archivo a Base64
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        // Validar que sea una imagen
        if (!file.type.startsWith('image/')) {
          reject(new Error(`${file.name} no es una imagen válida`));
          return;
        }

        // Validar tamaño (max 5MB por imagen)
        if (file.size > 5 * 1024 * 1024) {
          reject(new Error(`${file.name} es muy grande (máx 5MB)`));
          return;
        }

        const reader = new FileReader();
        
        reader.onload = (event) => {
          resolve(event.target.result); // Base64 string
        };
        
        reader.onerror = () => {
          reject(new Error(`Error al leer ${file.name}`));
        };
        
        reader.readAsDataURL(file);
      });
    });

    // Procesar todas las imágenes
    Promise.all(promises)
      .then(base64Images => {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...base64Images]
        }));
        setIsUploadingImage(false);
        // Limpiar el input
        e.target.value = '';
      })
      .catch(error => {
        alert(`❌ Error: ${error.message}`);
        setIsUploadingImage(false);
        e.target.value = '';
      });
  };

  // Remover imagen de la lista
  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Remover video de la lista
  const handleRemoveVideo = (index) => {
    setFormData(prev => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index)
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors([]);

    // Validar datos
    const productData = {
      ...formData,
      price: parseFloat(formData.price)
    };

    const validation = validateProduct(productData);

    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setIsSubmitting(false);
      scrollToTop();
      return;
    }

    try {
      if (editingProduct) {
        // Actualizar producto existente
        await updateProduct(editingProduct.id, productData);
        alert('✅ Producto actualizado exitosamente');
      } else {
        // Crear nuevo producto
        await addProduct(productData);
        alert('✅ Producto creado exitosamente');
      }

      // Resetear formulario
      resetForm();
      
      if (onCancelEdit) {
        onCancelEdit();
      }
    } catch (error) {
      alert('❌ Error al guardar el producto. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      images: [],
      videos: [],
      featured: false
    });
    setValidationErrors([]);
  };

  // Cancelar edición
  const handleCancel = () => {
    resetForm();
    if (onCancelEdit) {
      onCancelEdit();
    }
  };

  // Obtener categorías existentes para el select
  const existingCategories = getCategories().filter(cat => cat !== 'Todos');

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2 className="admin-title">
          <span>{editingProduct ? '✏️' : '➕'}</span>
          <span>{editingProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}</span>
        </h2>
        <p className="admin-subtitle">
          {editingProduct 
            ? 'Modifica los datos del producto y guarda los cambios' 
            : 'Completa la información para agregar un producto al catálogo'
          }
        </p>
      </div>

      {/* Mostrar errores de validación */}
      {validationErrors.length > 0 && (
        <div className="validation-errors">
          <h4>⚠️ Corrige los siguientes errores:</h4>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form className="product-form" onSubmit={handleSubmit}>
        {/* Nombre del producto */}
        <div className="form-group">
          <label className="form-label">
            Nombre del producto <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Ej: Sofá Moderno 3 Puestos"
            required
          />
        </div>

        {/* Descripción */}
        <div className="form-group">
          <label className="form-label">
            Descripción <span className="required-asterisk">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Describe las características, materiales, beneficios del producto..."
            required
          />
          <span className="form-hint">
            Escribe una descripción clara y atractiva para tus clientes
          </span>
        </div>

        {/* Precio y Categoría */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Precio (COP) <span className="required-asterisk">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: 899000"
              min="0"
              step="1000"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Categoría <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: Muebles, Electrónica..."
              list="categories-list"
              required
            />
            <datalist id="categories-list">
              {existingCategories.map(cat => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Producto destacado */}
        <div className="form-checkbox-group">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="form-checkbox"
          />
          <label htmlFor="featured" className="checkbox-label">
            <span>⭐</span>
            <span>Marcar como producto destacado</span>
          </label>
        </div>

        {/* Imágenes */}
        <div className="form-group">
          <label className="form-label">
            Imágenes del producto <span className="required-asterisk">*</span>
          </label>
          
          <div className="images-section">
            {/* Lista de imágenes agregadas */}
            {formData.images.length > 0 && (
              <div className="images-list">
                {formData.images.map((imageUrl, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={imageUrl}
                      alt={`Producto ${index + 1}`}
                      className="image-preview"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="image-url">
                      {imageUrl.startsWith('data:') 
                        ? `Imagen ${index + 1} (archivo subido)` 
                        : imageUrl}
                    </span>
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Botón para subir imágenes desde archivo */}
            <div className="upload-image-section">
              <label className="upload-image-btn">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  disabled={isUploadingImage}
                />
                <span>{isUploadingImage ? '⏳' : '📁'}</span>
                <span>
                  {isUploadingImage 
                    ? 'Subiendo imágenes...' 
                    : 'Subir Imágenes desde Computadora'}
                </span>
              </label>
              <span className="form-hint">
                Haz clic para seleccionar imágenes desde tu computadora (JPG, PNG, GIF)
              </span>
            </div>

            <span className="form-hint">La primera imagen será la principal del producto.</span>
          </div>
        </div>

        {/* Videos */}
        <div className="form-group">
          <label className="form-label">
            Videos del producto <span className="optional-text">(Opcional)</span>
          </label>
          
          <div className="videos-section">
            {/* Lista de videos agregados */}
            {formData.videos.length > 0 && (
              <div className="videos-list">
                {formData.videos.map((videoUrl, index) => (
                  <div key={index} className="video-item">
                    <video
                      src={videoUrl}
                      className="video-preview"
                      controls
                      preload="metadata"
                    />
                    <span className="video-url">
                      {videoUrl.startsWith('data:') 
                        ? `Video ${index + 1} (archivo subido)` 
                        : videoUrl}
                    </span>
                    <button
                      type="button"
                      className="remove-video-btn"
                      onClick={() => handleRemoveVideo(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Botón para subir videos desde archivo */}
            <div className="upload-video-section">
              <label className="upload-video-btn">
                <input
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleVideoUpload}
                  style={{ display: 'none' }}
                  disabled={isUploadingVideo}
                />
                <span>{isUploadingVideo ? '⏳' : '🎥'}</span>
                <span>
                  {isUploadingVideo 
                    ? 'Subiendo videos...' 
                    : 'Subir Videos desde Computadora'}
                </span>
              </label>
              <span className="form-hint">
                Haz clic para seleccionar videos desde tu computadora (MP4, WEBM, OGG). Máximo 50MB por video.
              </span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="form-actions">
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            <span>{editingProduct ? '💾' : '✅'}</span>
            <span>{isSubmitting ? 'Guardando...' : (editingProduct ? 'Actualizar Producto' : 'Crear Producto')}</span>
          </button>
          
          {(editingProduct || formData.name || formData.description) && (
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              <span>❌</span>
              <span>Cancelar</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
