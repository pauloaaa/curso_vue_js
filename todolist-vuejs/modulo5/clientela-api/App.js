const Express = require('express')

const app = new Express()


app.get('/', (req, res) => {
    res.json({
        nome: "Paulo",
        idade: 34
    })
})

app.listen(3000, () => {
    console.log('Api no ar na porta 3000')
})