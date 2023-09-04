const app = require('../server')
const server = require('http').createServer(app).listen(process.env.SERVER_PORT); // Cria um servidor HTTP e o faz escutar na porta ${SERVER_PORT}
const io = require('socket.io').listen(server); // Cria uma instância do Socket.io e a conecta ao servidor

// Middleware para emitir notificações via Socket.io
let emitir = function (req, res, next) {
    let notificar = req.query.notificacao || "";
    if (notificar != "") {
        io.emit('notificacao', notificar); // Emite uma notificação via Socket.io
        next(); // Passa para o próximo middleware
    } else {
        next();
    }
}

module.exports = emitir