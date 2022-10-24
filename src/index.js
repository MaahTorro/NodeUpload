// configuração da merda do servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use (express.json())
app.set('view engine', 'ejs')

// rota padrão
app.get('/',(req, res) => {
    res.render('index.ejs')
})

// upload
app.post('/', (req, res) => {
    res.send("eita zap")
    console.log(req.body,req.file) //apoio a lógica (???????????)
})

// executa o caraio do servidor 
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})