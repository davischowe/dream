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
const importarController = require('./controller/Importar.controller')
const relatorioController = require('./controller/relatorios.controller');

//-------------------------------------------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
//-------------------------------------------
app.post('/usuarios', usuarioController.cadastrarUsuario);
app.get('/usuarios', usuarioController.listarUsuarios);
app.get('/usuarios/busca', usuarioController.consultarNome);
app.put('/usuarios/:id', usuarioController.atualizarUsuario);
app.get('/usuarios/:id', usuarioController.consultarPorId);
app.delete('/usuarios/:id', usuarioController.apagarUsuario);


app.post('/produtos', produtoController.cadastrarProduto);
app.get('/produtos', produtoController.listarProduto);
app.get('/produtos/busca', produtoController.consultarNome);
app.get('/produtos/:id', produtoController.consultarPorId);
app.put('/produtos/:id', produtoController.atualizarProduto);
app.delete('/produtos/:id', produtoController.apagarProduto);

app.post('/compras', compraController.cadastrarCompra);
app.get('/compras', compraController.listarCompras);
app.get('/compras/:id', compraController.consultarPorId);
app.put('/compras/:id', compraController.atualizarCompra);
app.delete('/compras/:id', compraController.apagarCompra);

app.get('/importar-produtos',importarController.importarProdutos);
app.get('/importar-usuarios', importarController.importarUsuarios);

app.get('/relatorio/compras', relatorioController.relatorioCompras );


conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em ${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Não foi possível conectar com o banco de dados!', err)
    })