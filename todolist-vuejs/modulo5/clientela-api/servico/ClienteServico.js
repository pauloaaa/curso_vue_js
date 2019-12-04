module.exports = class ClienteServico {    

    static async findAll() {
        // return await Cliente.find({})
    }

    static async create(cliente) {
        return await Cliente.create(cliente)
    }
}