const Compra = require('../model/Compras')

const cadastrarCompra = async (req, res) => {
    const { dados } = req.body;
    try {
        const valores = await Compra.create(dados);
        res.status(201).json(valores);
    } catch (err) {
        console.error('Erro ao cadastrar os dados:', err);
        res.status(500).json({ message: 'Erro ao cadastrar os dados' });
    }
};

const listarCompras = async (req, res) => {
    try {
        const valores = await Compra.findAll();
        if (valores === null) {
            res.status(404).json({ message: 'Nenhuma compra encontrada' });
        } else {
            res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao listar os dados:', err);
        res.status(500).json({ message: 'Erro ao listar os dados' });
    }
};

const atualizarCompra = async (req, res) => {
    const { id } = req.params;
    const { dados } = req.body;

    try {
        const valores = await Compra.findByPk(id);
        if (valores === null) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        } else {
            await Compra.update(dados, { where: { id: id } });
            const valoresfinal = await Compra.findByPk(id);
            res.status(200).json(valoresfinal);
        }
    } catch (err) {
        console.error('Erro ao atualizar os dados:', err);
        res.status(500).json({ message: 'Erro ao atualizar os dados' });
    }
};

const apagarCompra = async (req, res) => {
    const { id } = req.params;
    try {
        const valores = await Compra.findByPk(id);
        if (valores === null) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        } else {
            await Compra.destroy({ where: { id: id } });
            res.status(200).json({ message: 'Compra apagada com sucesso' });
        }
    } catch (err) {
        console.error('Erro ao apagar os dados:', err);
        res.status(500).json({ message: 'Erro ao apagar os dados' });
    }
};

const consultarPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const valores = await Compra.findByPk(id);
        if (valores === null) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        } else {
            res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao consultar por ID:', err);
        res.status(500).json({ message: 'Erro ao buscar compra' });
    }
};

module.exports = { cadastrarCompra,listarCompras,atualizarCompra,apagarCompra,consultarPorId }