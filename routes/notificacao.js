const express = require('express');

const router = express.Router(); // Criação do roteador

// Rota para receber notificações
router.route(`${process.env.API_BASE_ROUTE}/notificar`)
    .get(function (req, res) {
        // Responde com uma mensagem JSON
        res.json({
            message: process.env.NOTIFICATION_TEST_MESSAGE
        });
    });

module.exports = router