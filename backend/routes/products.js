const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obtener todos los productos (parseando JSON de images/videos)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    const parsed = rows.map(r => ({
      ...r,
      images: safeParseJSON(r.images, []),
      videos: safeParseJSON(r.videos, [])
    }));
    res.json(parsed);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function safeParseJSON(value, fallback) {
  if (value === null || value === undefined || value === '') return fallback;
  try {
    if (typeof value === 'string') return JSON.parse(value);
    return value; // ya es objeto/array
  } catch {
    return fallback;
  }
}

// Crear producto
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, featured, images, videos } = req.body;
    
    console.log('Datos recibidos:', { name, category, price, imagesCount: images?.length });
    
    const [result] = await pool.query(
      'INSERT INTO products (name, description, price, category, featured, images, videos) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, description, price, category, featured || false, JSON.stringify(images || []), JSON.stringify(videos || [])]
    );
    
    console.log('Producto creado con ID:', result.insertId);
    res.json({ id: result.insertId });
  } catch (err) {
    console.error('Error al crear producto:', err);
    res.status(500).json({ error: err.message, details: err.sqlMessage });
  }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, featured, images, videos } = req.body;
    await pool.query(
      'UPDATE products SET name=?, description=?, price=?, category=?, featured=?, images=?, videos=? WHERE id=?',
      [name, description, price, category, featured, JSON.stringify(images || []), JSON.stringify(videos || []), req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM products WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
