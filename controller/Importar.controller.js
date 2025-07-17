const Produto = require('../model/Produto');
const Usuario = require('../model/Usuarios');


const importarProdutos = async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        for (const p of data.products) {
            await Produto.create({
                title: p.title,
                description: p.description,
                category: p.category,
                price: p.price,
                discountPercentage: p.discountPercentage,
                stock: p.stock,
                brand: p.brand,
                thumbnail: p.thumbnail,
            });
        }

        res.json({ mensagem: 'Produtos importados com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao importar produtos' });
    }
};

const importarUsuarios = async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();

        for (const u of data.users) {
            await Usuario.create({
                firstName: u.firstName,
                lastName: u.lastName,
                age: u.age,
                email: u.email,
                phone: u.phone,
                address: u.address.address,
                city: u.address.city,
                state: u.address.state,
                birthDate: u.birthDate,
            });
        }

        res.json({ mensagem: 'Usuários importados com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao importar usuários' });
    }
};

module.exports = {
    importarProdutos,
    importarUsuarios,
};