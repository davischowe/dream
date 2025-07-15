const Usuario = require('../model/Usuarios')
const { OP } = require('sequelize')

const cadastrarUsuario = async (req,res) => {
    const dados = req.body
    try{
        const valores = await Usuario.create(dados)
        res.status(201).json(valores)
    }catch(err){
        console.error('Erro ao Cadastrar os Dados')
        res.status(500).json({message: 'Erro ao cadastrar os dados'})
    }
}

const listarUsuarios = async (req,res) => {
    try{
        const valores = await Usuario.findAll()
        if(valores){
            res.status(200).json(valores)
        }else{
            res.status(404).json({message: 'Erro ao achar os dados'})
            console.log(valores)
        }
    }catch(err){
        console.error('Erro ao listar os dados')
        res.status(500).json({message: 'Erro ao listar os dados'})
    }
}

const atualiazrUsuarios = async (req,res) => {
    const id = req.params.id
    const dados = req.body
    try{
        const valores = await Usuario.findByPk(id)
        if(valores === null){
            res.status(404).json({message : 'Erro ao achar os dados'})
            console.log(valores)
        }else{
            await Usuario.update(dados,{where:{id:id}})
            const valores  = await Usuario.findByPk(id)
            res.status(200).json(valores)
        }
    }catch(err){
        console.error('Erro ao Atualizar os dados')
        res.status(500).json({message: 'Erro ao Atualizar os dados'})
    }
}

const apagarUsuarios = async (req,res) => {
    const id = req.params.id
    try{
        const valor = await Usuario.findByPk(id)
        if(valor === null){
            res.status(404).json({message: 'Dado não encontrado'})
            console.log(valor)
        }else{
            await Usuario.destroy({where:{id:id}})
            res.status(200).json({message :'Sucesso em apagar os dados'})
        }
    }catch(err){
        console.error('Erro ao Apagar os dados')
        res.status(500).json({message: 'Erro ao Apagar os dados'})
    }
}

const consultarNomeU = async (req, res) => {
    const { nome } = req.body;
    try {
        const valores = await Usuario.findAll({
            where: {
                title: {
                    [Op.like]: `%${nome}%`
                }
            }
        });
        return res.status(200).json(valores);
    } catch (err) {
        console.error("Erro ao consultar nome:", err);
        return res.status(500).json({ error: "Erro ao buscar usuários." });
    }
};


module.exports = {cadastrarUsuario, listarUsuarios, atualiazrUsuarios, apagarUsuarios}
