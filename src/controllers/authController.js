const jwt = require('jsonwebtoken');

// Função de login
const login = (req, res) => {
  const { username, password } = req.body;

  // Validação do usuário (simulada)
  if (username !== 'admin' || password !== 'password') {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  // Gerar token JWT
  const token = jwt.sign(
    { username }, // Payload
    process.env.JWT_SECRET, // Chave secreta
    { expiresIn: process.env.JWT_EXPIRATION } // Expiração
  );

  res.status(200).json({ token });
};

module.exports = { login };
