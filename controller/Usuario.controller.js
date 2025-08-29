const Usuario = require('../model/Usuarios')
const { Op } = require('sequelize')

const cadastrarUsuario = async (req, res) => {
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
        console.error("Erro ao cadastrar dados!", err);
        res.status(500).json({
            message: "Erro ao cadastrar os dados",
            detalhe: err.message
        });
    }
}

const listarUsuarios = async (req, res) => {
    try {
        const valores = await Usuario.findAll()
        if (valores) {
            res.status(200).json(valores)
        } else {
            res.status(404).json({ message: 'Erro ao achar os dados' })
            console.log(valores)
        }
    } catch (err) {
        console.error('Erro ao listar os dados')
        res.status(500).json({ message: 'Erro ao listar os dados' })
    }
}

const atualizarUsuario = async (req, res) => {
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            res.status(404).json({ message: 'Erro ao achar os dados' })
            console.log(valores)
        } else {
            await Usuario.update(dados, { where: { id: id } })
            const valores = await Usuario.findByPk(id)
            res.status(200).json(valores)
        }
    } catch (err) {
        console.error('Erro ao Atualizar os dados')
        res.status(500).json({ message: 'Erro ao Atualizar os dados' })
    }
}

const apagarUsuario = async (req, res) => {
    const id = req.params.id
    try {
        const valor = await Usuario.findByPk(id)
        if (valor === null) {
            res.status(404).json({ message: 'Dado não encontrado' })
            console.log(valor)
        } else {
            await Usuario.destroy({ where: { id: id } })
            res.status(200).json({ message: 'Sucesso em apagar os dados' })
        }
    } catch (err) {
        console.error('Erro ao Apagar os dados')
        res.status(500).json({ message: 'Erro ao Apagar os dados' })
    }
}

const consultarNome = async (req, res) => {
    const nome = req.query.nome;
    try {
        const valores = await Usuario.findAll({
            where: {
                primeiroNome: {
                    [Op.like]: `%${nome}%`
                }
            }
        });
        if (!valores || valores.length === 0) {
            res.status(404).json({ message: 'Nenhum Usuário encontrado' });
        } else {
            res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao consultar nome:', err);
        res.status(500).json({ message: 'Erro ao buscar Usuários' });
    }
};

const consultarPorId = async (req, res) => {
    const id = req.params.id
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario === null) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        } else {
            return res.status(200).json(usuario);
        }

    } catch (err) {
        console.error("Erro ao consultar por ID:", err);
        return res.status(500).json({ message: "Erro ao buscar usuário." });
    }
};


module.exports = { cadastrarUsuario, listarUsuarios, atualizarUsuario, apagarUsuario, consultarNome, consultarPorId }
