const Produto = require('../model/Produto');
const Usuario = require('../model/Usuarios');

const importarProdutos = async (req, res) => {
    try {
        let valores = req.body;
        if (valores && valores.produtos) {
            valores = valores.produtos;
        }
        if (!Array.isArray(valores)) {
            return res.status(400).json({
                message: "Formato inválido. Envie um array de produtos."
            });
        }
        const dados = await Produto.bulkCreate(valores);
        res.status(201).json(dados);
    } catch (err) {
        console.error("Erro ao cadastrar dados!", err);
        res.status(500).json({
            message: "Erro ao cadastrar os dados",
            detalhe: err.message
        });
    }
};

const importarUsuarios = async (req, res) => {
    try {
        let valores = req.body;

        if (valores && valores.usuarios) {
            valores = valores.usuarios;
        }

        if (!Array.isArray(valores)) {
            return res.status(400).json({
                message: "Formato inválido. Envie um array de usuários."
            });
        }

        const dados = await Usuario.bulkCreate(valores);
        res.status(201).json(dados);

    } catch (err) {
        console.error("Erro ao cadastrar usuários!", err);
        res.status(500).json({
            message: "Erro ao cadastrar os dados",
            detalhe: err.message
        });
    }
};

module.exports = {
    importarProdutos,
    importarUsuarios,
};
