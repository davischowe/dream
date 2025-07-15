const fetch = require('node-fetch');
const Produto = require('../model/Produto');
const Usuario = require('../model/Usuarios');

const importarProdutos = async (req, res) => {
try {
const resposta = await fetch('https://dummyjson.com/products');
const json = await resposta.json();
const produtosApi = json.products;
const dadosFormatados = [];
for (const item of produtosApi) {
  if (
    item.title &&
    item.description &&
    item.category &&
    item.price !== undefined &&
    item.discountPercentage !== undefined &&
    item.stock !== undefined &&
    item.brand &&
    item.thumbnail
  ) {
    dadosFormatados.push({
      title: item.title,
      description: item.description,
      category: item.category,
      price: item.price,
      discountPercentage: item.discountPercentage,
      stock: item.stock,
      brand: item.brand,
      thumbnail: item.thumbnail
    });
  }
}

if (dadosFormatados === null) {
  return res.status(404).json({ message: 'Nenhum produto válido para importar' });
}

const resultado = await Produto.bulkCreate(dadosFormatados);
res.status(201).json(resultado);
} catch (err) {
console.error('Erro ao importar produtos:', err);
res.status(500).json({ message: 'Erro ao importar produtos' });
}
};

const importarUsuarios = async (req, res) => {
try {
const response = await fetch('https://dummyjson.com/users');
const json = await response.json();
const usuarios = json.users.map((u) => ({
  firstName: u.firstName,
  lastName: u.lastName,
  age: u.age,
  email: u.email,
  phone: u.phone,
  address: `${u.address.address}, ${u.address.postalCode}`,
  city: u.address.city,
  state: u.address.state || 'N/A',
  birthDate: u.birthDate || '2000-01-01',
}));

await Usuario.bulkCreate(usuarios);
res.status(201).json({ message: 'Usuários importados com sucesso', quantidade: usuarios.length });
} catch (err) {
console.error('Erro ao importar usuários:', err);
res.status(500).json({ message: 'Erro ao importar usuários' });
}
};

module.exports = { importarProdutos, importarUsuarios };