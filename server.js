require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Importa as bibliotecas necessárias
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Biblioteca para análise do corpo das requisições
const notificacaoRoute = require('./routes/notificacao');
const socketMiddleware = require('./middlewares/socket')
// Configura o uso do bodyParser para analisar o corpo das requisições
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; // Define a porta padrão como 8080 caso não seja fornecida a variável de ambiente

app.use(socketMiddleware); // Utiliza o middleware de emissão de notificações
app.use (notificacaoRoute) // Utilizando a rota de notificação

// Inicia o servidor na porta definida
app.listen(port);
console.log('Conectado a porta: ' + port);

module.exports = app