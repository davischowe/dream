const Compra = require('../model/Compras');
const Usuario = require('../model/Usuarios');
const Produto = require('../model/Produto');

async function relatorioCompras(req, res) {
  try {
    const compras = await Compra.findAll({
      include: [
        { model: Usuario, as: 'usuario', attributes: ['firstName', 'lastName'] },
        { model: Produto, as: 'produto', attributes: ['title'] }
      ]
    });

    const dados = compras.map(c => ({
      id: c.id,
      usuario: c.usuario
        ? `${c.usuario.firstName} ${c.usuario.lastName}`
        : 'Usuário não encontrado',
      produto: c.produto
        ? c.produto.title
        : 'Produto não encontrado',
      quantidade: c.quantidade,
      data: c.dataCompra ? new Date(c.dataCompra).toLocaleDateString('pt-BR') : 'Data inválida',
      valor: typeof c.precoFinal === 'number' ? c.precoFinal.toFixed(2) : '0.00',
      pagamento: c.formaPagamento || 'Não informado',
      status: c.statusCompra || 'Indefinido'
    }));

    res.status(200).json(dados);

  } catch (error) {
    console.error('Erro ao gerar relatório de compras:', error);
    res.status(500).json({ erro: 'Erro interno ao gerar relatório de compras.' });
  }
}

module.exports = { relatorioCompras };