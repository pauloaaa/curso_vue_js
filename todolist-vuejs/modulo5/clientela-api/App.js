const Express = require('express')
const BodyParser = require('body-parser')
const Pg = require('pg')
const url = "postgressql://postgres:postgres@localhost:5432/jh"


const client = new Pg.Client(url)


const app = new Express()

app.use(BodyParser.json())

client.connect()

// client.query('select * from bairro', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

const query = 'select * from bairro where id = 145'

client.query(query).then(res => {
    const rows = res.rows

    rows.map(row => {
        console.log(`read : ${JSON.stringify(row)}`)
    })

    process.exit()
}).catch(err => {
    console.log(err)
})


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