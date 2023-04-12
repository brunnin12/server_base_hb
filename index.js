const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')

const PORT = 3000
const hostname = 'localhost'
/*--- Configuração do express ---*/
app.use(express.json())
app.use(express.irlencoded({extended:true}))
/*----- arquivos estaticos ----- */
app.use(express.static('public'))

/*---Rotas do programa, codigo so inserido aqui---*/
app.get('/', (req,res)=>{
    res.render('index.html')
})


/* -----------------------------*/
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor Rodando ${hostname}:${PORT}`)
})