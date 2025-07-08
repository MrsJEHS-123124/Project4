import express from 'express';
import bcrypt from 'bcrypt';
import db from '../dbConnection.js';

const router = express.Router();

// REGISTER a new user
router.post('/register', async (req, res) => {
  console.log ('Received registration request:', req.body);
  const { username, email, password } = req.body;
  console.log (email, password, req.body);

  try {
    const hashed = await bcrypt.hash(password, 10);

    await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [
      username,
      email,
      hashed,
    ]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// LOGIN existing user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];

    // Compare entered password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Password is correct, proceed to generate token or return success
    res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email } });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


export default router;