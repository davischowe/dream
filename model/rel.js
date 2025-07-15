const Usuário = require ('./Usuarios')
 const Produto = requer ('./Produto')
 const Compras = require ('./Compras')

 Usuário.hasMany ( Compras , {
 foreignKey : 'usuarioId',

 } )
 Compras.belongsTo ( Usuário , {
 foreignKey : 'usuarioId',
 
 } )
 Produto.belongsTo ( Compras , {
 foreignKey : 'produtoId',
 } )
 Compras.hasMany ( Produto , {
 foreignKey : 'produtoId',
 } )
