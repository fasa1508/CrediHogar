const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
// Aumentar límite para aceptar imágenes/ videos Base64 en JSON
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Manejo explícito de error 413 (payload demasiado grande)
app.use((err, req, res, next) => {
	if (err?.type === 'entity.too.large') {
		return res.status(413).json({
			error: 'Payload demasiado grande',
			message: 'Reduce el tamaño de la imagen o aumenta el límite del servidor.'
		});
	}
	return next(err);
});
// Endpoint de salud: verifica conectividad a MySQL
app.get('/api/health', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT 1 AS ok');
		res.json({ status: 'ok', db: rows[0].ok === 1 });
	} catch (err) {
		res.status(500).json({ status: 'error', message: err.message });
	}
});
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('API escuchando en puerto', PORT));
