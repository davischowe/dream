const Produto = require('../model/Produto');
const { Op } = require('sequelize');

const cadastrarProduto = async (req, res) => {
    const { dados } = req.body;
    try {
        const valores = await Produto.bulkCreate(dados);
        res.status(201).json(valores);
    } catch (err) {
        console.error('Erro ao cadastrar os dados:', err);
        res.status(500).json({ message: 'Erro ao cadastrar os dados' });
    }
};

const listarProduto = async (req, res) => {
    try {
        const valores = await Produto.findAll();
        if (valores === null) {
            res.status(404).json({ message: 'Nenhum produto encontrado' });
        } else { 
            res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao listar os dados:', err);
        res.status(500).json({ message: 'Erro ao listar os dados' });
    }
};

const atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { dados } = req.body;

    try {
        const valores = await Produto.findByPk(id);

        if (valores === null) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }else{
        await Produto.update(dados, { where: { id: id } });
        const valoresfinal = await Produto.findByPk(id);
        res.status(200).json(valoresfinal);
        }
    } catch (err) {
        console.error('Erro ao atualizar os dados:', err);
        res.status(500).json({ message: 'Erro ao atualizar os dados' });
    }
};

const apagarProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const valores = await Produto.findByPk(id);

        if (valores === null) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }else{
        await Produto.destroy({ where: { id: id } });
        res.status(200).json({ message: 'Produto apagado com sucesso' });
        }
    } catch (err) {
        console.error('Erro ao apagar os dados:', err);
        res.status(500).json({ message: 'Erro ao apagar os dados' });
    }
};


const consultarNome = async (req, res) => {
  const { nome } = req.query;
  try {
    const valores = await Produto.findAll({
      where: {
        title: {
          [Op.like]: `%${nome}%`
        }
      }
    });

    if (valores.length === 0) {
      res.status(404).json({ message: 'Nenhum produto encontrado' });
    } else {
      res.status(200).json(valores);
    }
  } catch (err) {
    console.error('Erro ao consultar nome:', err);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
};

const consultarPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const valores = await Produto.findByPk(id);

        if (valores === null) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }else{
             res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao consultar por ID:', err);
        res.status(500).json({ message: 'Erro ao buscar produto' });
    }
};

module.exports = { cadastrarProduto, listarProduto, atualizarProduto, apagarProduto, consultarNome, consultarPorId };