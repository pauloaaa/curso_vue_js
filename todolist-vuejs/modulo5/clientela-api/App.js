const Express = require('express')
const BodyParser = require('body-parser')

const app = new Express()

app.user(BodyParser.json())


app.get('/', (req, res) => {
    res.json({
        nome: "Paulo",
        idade: 34
    })
})

app.get('/clientes', (req, res) => {
    res.json([
        {
            name: "Paulo Arruda",
            email: "paulo@gmail.com"
        },
        {
            name: "Ingrides Fernandes",
            email: "ingrides@gmail.com"
        }
    ])
})

app.post('/clientes', (req, res) => {

})

app.listen(3000, () => {
    console.log('Api no ar na porta 3000')
})