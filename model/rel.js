const Usuario = require('./Usuarios');
const Produto = require('./Produto');
const Compra = require('./Compras');

Usuario.hasMany(Compra, { foreignKey: 'usuarioId', as: 'compras' });
Compra.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

Produto.hasMany(Compra, { foreignKey: 'produtoId', as: 'compras' });
Compra.belongsTo(Produto, { foreignKey: 'produtoId', as: 'produto' });