async function relatorioGeral() {
  try {
    const resposta = await fetch('http://localhost:3000/relatorio/compras');

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const tabela = document.querySelector('#tabelaConsolidado tbody');
    tabela.innerHTML = '';

    dados.forEach(compra => {
      const linha = document.createElement('tr');

      linha.innerHTML = `
        <td>${compra.id}</td>
        <td>${compra.usuarioId}</td>
        <td>${compra.produtoId}</td>
        <td>${compra.quantidade}</td>
        <td>${new Date(compra.dataCompra).toLocaleDateString()}</td>
        <td>${compra.descontoAplicado}
        <td>${compra.precoFinal}</td>
        <td>${compra.formaPagamento}</td>
        <td>${compra.statusCompra}</td>
      `;

      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error('Erro ao carregar relatório:', erro);
  }
}

relatorioGeral();