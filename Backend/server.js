const express = require('express'); // Importa o Express
const cors = require('cors'); // Importa o CORS
const app = express(); // Inicializa o app Express
const PORT = 3000; // Define a porta do servidor

// Middleware para permitir requisições de outros domínios (como o frontend React)
app.use(cors());

// Middleware para permitir o backend ler JSON no corpo das requisições
app.use(express.json());

// Rota GET de teste
app.get('/payment', (req, res) => {
    res.send('Backend funcionando!');
});

// Rota POST para simular o pagamento
app.post('/congratulation', (req, res) => {
    console.log("Pagamento recebido:", req.body); // Mostra os dados enviados no terminal
    res.status(200).json({ sucesso: true }); // Envia resposta JSON para o frontend
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});