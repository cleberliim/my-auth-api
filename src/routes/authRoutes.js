const express = require('express');
const { login } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authenticateToken');
const router = express.Router();

// Rota pública de login
router.post('/login', login);

// Rota protegida
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.username}! Esta é uma rota protegida.` });
});

module.exports = router;
