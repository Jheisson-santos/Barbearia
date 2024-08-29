const express = require('express')
const cliente = require('./controllers/cliente.js')
const barbeiro = require('./controllers/barbeiro.js')
const barbearia = require('./controllers/barbearia.js')
const cep_endereco = require('./middlewares/cep_endereco.js')
const app = express()
const port = 3000

app.use(express.json())

app.use((req,res,next)=>{
    console.log("middleware 2");
    next()
})

app.get('/cliente', (req,res,next)=>{
    console.log("middleware 3");
    next()
}, (req, res)=>{
    res.json(cliente.index())
})

app.get('/cliente/:id', (req,res)=>{
    res.json(cliente.show(req.params.id))
})

app.post('/cliente', (req, res)=>{
    const code = cliente.store(req.body)
    res.status(code).json()
})

app.put('/cliente/:id', (req, res)=>{
    const code = cliente.update(req.params.id, req.body)
    res.status(code).json()
})
 
app.delete('/cliente/:id', (req, res)=>{
    const code = cliente.destroy(req.params.id)
    res.status(code).json()
})

app.get('/barbeiro', (req, res)=>{
    res.json(barbeiro.index())
})

app.get('/barbeiro/:id', (req,res)=>{
    res.json(barbeiro.show(req.params.id))
})

app.post('/barbeiro', (req, res)=>{
    const code = barbeiro.store(req.body)
    res.status(code).json()
})

app.put('/barbeiro/:id', (req, res)=>{
    const code = barbeiro.update(req.params.id, req.body)
    res.status(code).json()
})
 
app.delete('/barbeiro/:id', (req, res)=>{
    const code = barbeiro.destroy(req.params.id)
    res.status(code).json()
})

app.get('/barbearia', (req, res)=>{
    res.json(barbearia.index())
})

app.get('/barbearia/:id', (req,res)=>{
    res.json(barbearia.show(req.params.id))
})

app.post('/barbearia', (req,res,next)=>{
    console.log("middleware barbearia");
    next()
},cep_endereco,(req, res)=>{
    const code = barbearia.store(req.body)
    res.status(code).json()
})

app.put('/barbearia/:id', (req, res)=>{
    const code = barbearia.update(req.params.id, req.body)
    res.status(code).json()
})
 
app.delete('/barbearia/:id', (req, res)=>{
    const code = barbearia.destroy(req.params.id)
    res.status(code).json()
})

app.listen(port, () => {
    console.log(`Leitura de app na porta ${port}`); 
})
