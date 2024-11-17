const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // Carrega variáveis de ambiente

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); // Ajuste o caminho para o arquivo

const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas da API
app.use('/api', authRoutes);

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
