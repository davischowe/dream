const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn'); 

const Compra = sequelize.define('Compra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos',
      key: 'id'
    }
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataCompra: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  precoUnitario: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descontoAplicado: {
    type: DataTypes.FLOAT,
    allowNull: false,
},
  precoFinal: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  formaPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusCompra: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente'
  }
}, {
  tableName: 'compras',
  timestamps: false
});

module.exports = Compra;