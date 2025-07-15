const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')
const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const conn = require('./db/conn')
const usuarioController = require('./controller/Usuario.controller')
const produtoController = require('./controller/Produto.controller')
const compraController = require('./controller/Compra.controller')
const importacaoController = require('./controller/Importacao.controller');

//-------------------------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
//-------------------------------------------

  app.post('/usuarios', usuarioController.cadastrarUsuario);
  app.get('/usuarios', usuarioController.listarUsuarios);
  app.get('/usuarios/busca', usuarioController.consultarNome);
  app.get('/usuarios/:id', usuarioController.consultarPorId);
  app.put('/usuarios/:id', usuarioController.atualizarUsuario);
  app.delete('/usuarios/:id', usuarioController.apagarUsuario);

  app.post('/produtos', produtoController.cadastrarProduto);
  app.get('/produtos', produtoController.listarProduto);
  app.get('/produtos/busca', produtoController.consultarNome); 
  app.get('/produtos/:id', produtoController.consultarPorId);
  app.put('/produtos/:id', produtoController.atualizarProduto);
  app.delete('/produtos/:id', produtoController.apagarProduto);

  app.post('/compras', compraController.cadastrarCompra);
  app.get('/compras',compraController.listarCompras);
  app.get('/compras/:id',compraController.consultarPorId);
  app.put('/compras/:id',compraController.atualizarCompra);
  app.delete('/compras/:id',compraController.apagarCompra);

app.get('/importar/produtos', importacaoController.importarProdutos);
app.get('/importar/usuarios', importacaoController.importarUsuarios);

conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Não foi possível conectar com o banco de dados!',err)
})