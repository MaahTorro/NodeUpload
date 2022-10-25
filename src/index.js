// configuração da merda do servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use (express.json())
app.set('view engine', 'ejs')



// Multer
const multer = require('multer')

// Storage 
const storage = multer.diskStorage({

    // destino 
    destination: (req, res, cb) =>{
        cb(null, 'uploads')
    },

    // nome do arquivo
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
const upload = multer ({storage})



// rota padrão
app.get('/',(req, res) => {
    res.render('index.ejs')
})



// upload
// midleware (fica no meio de dois processos)
app.post('/', upload.single('arquivo'), (req, res) => {
    res.send("eita zap")
    console.log(req.body,req.file) //apoio a lógica (???????????)
})



// executa o caraio do servidor 
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})