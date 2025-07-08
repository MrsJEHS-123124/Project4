import express from 'express';
import dbPromise from '../dbConnection.js';

const router = express.Router();

router.get('/categories', async (req, res) => {
  try {
    const db = await dbPromise;
    const [rows] = await db.query('SELECT * FROM categories');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

router.get('/categories/:id/verses', async (req, res) => {
  try {
    const db = await dbPromise;
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM verses WHERE category_id = ?', [id]);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching verses:', err);
    res.status(500).json({ message: 'Failed to fetch verses' });
  }
});

export default router;