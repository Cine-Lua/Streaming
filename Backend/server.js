const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para ler JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Backend funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});