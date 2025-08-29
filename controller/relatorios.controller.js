const Compra = require('../model/Compras');
const Usuario = require('../model/Usuarios');
const Produto = require('../model/Produto');
const { Op } = require('sequelize');

async function relatorioCompras(req, res) {
  try {
    const compras = await Compra.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario'
        },
        {
          model: Produto,
          as: 'produto'
        }
      ]
    });

    res.json(compras);
  } catch (err) {
    console.error('Erro ao gerar relatório:', err);
    res.status(500).json({ message: 'Erro ao gerar relatório' });
  }
}


async function relatorioUsuario(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ['id', 'primeiroNome', 'sobrenome', 'idade', 'email', 'telefone', 'endereco', 'cidade', 'estado', 'dataNascimento'] 
    });

    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao gerar relatório:', err);
    res.status(500).json({ message: 'Erro ao gerar relatório' });
  }
}

async function relatorioProduto(req, res) {
  try {
    const produtos = await Produto.findAll({
      attributes: ['id', 'title', 'description', 'category', 'price', 'discountPercentage', 'stock', 'brand', 'thumbnail',] 
    });

    res.json(produtos);
  } catch (err) {
    console.error('Erro ao gerar relatório:', err);
    res.status(500).json({ message: 'Erro ao gerar relatório' });
  }
}

async function relatorioEstoqueCritico(req, res) {
  try {
    const produtos = await Produto.findAll({
      where: {
        stock: { [Op.lt]: 10 }
      },
      attributes: ['id', 'title', 'stock', 'category']
    });

    res.json(produtos);
  } catch (err) {
    console.error('Erro ao gerar relatório de estoque crítico:', err);
    res.status(500).json({ message: 'Erro ao gerar relatório de estoque crítico' });
  }
}

async function relatorioGeral(req, res) {
  try {
    const compras = await Compra.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario'
        },
        {
          model: Produto,
          as: 'produto'
        }
      ]
    });

    res.json(compras);
  } catch (err) {
    console.error('Erro ao gerar relatório:', err);
    res.status(500).json({ message: 'Erro ao gerar relatório' });
  }
}



module.exports = { relatorioCompras, relatorioUsuario, relatorioProduto, relatorioEstoqueCritico, relatorioGeral };

