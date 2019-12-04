const ClienteServico = require('./../servico/ClienteServico')

module.exports = class ClienteControlador {

    static async findAll(req, res) {
        res.json(await ClienteServico.findAll())
    }

    static async create(req, res) {
        res.json(await ClienteServico.create(req.bady))
    }
}