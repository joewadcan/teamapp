require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db/pool');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Health Check ──────────────────────────────────────────────────────────────
// This is the only route in the starter. Build your own routes below (or in
// separate route files that you require() here).
app.get('/api/health', async (req, res) => {
  try {
    // Also verify the database connection is alive
    await pool.query('SELECT 1');
    res.json({
      status: 'ok',
      timestamp: new Date(),
      database: 'connected',
    });
  } catch (err) {
    console.error('Health check failed:', err.message);
    res.status(500).json({
      status: 'error',
      timestamp: new Date(),
      database: 'disconnected',
      error: err.message,
    });
  }
});

// ─── Your routes go here ───────────────────────────────────────────────────────
// Example structure — replace with your own:
//
// const itemsRouter = require('./routes/items');
// app.use('/api/items', itemsRouter);
//
// See the assignment doc for what routes your app needs.

// ─── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
