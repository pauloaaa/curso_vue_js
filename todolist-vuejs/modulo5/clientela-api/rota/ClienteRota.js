const ClienteControlador = require('./../controlador/ClienteControlador')

module.exports = class ClienteRota {
    constructor(app) {
        this.app = app

        app.get('/clientes', ClienteControlador.findAll)
        app.post('/clientes', ClienteControlador.create)
    }
 
}