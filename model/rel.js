const Usuario = require('./Usuarios');
const Produto = require('./Produto');
const Compra = require('./Compras');

Usuario.hasMany(Compra, { foreignKey: 'usuarioId' });
Compra.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Produto.hasMany(Compra, { foreignKey: 'produtoId' });
Compra.belongsTo(Produto, { foreignKey: 'produtoId' });