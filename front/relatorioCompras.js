async function relatorioCompras() {
  try {
    const resposta = await fetch('http://localhost:3000/relatorio/compras');

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const tabela = document.querySelector('#tabelaCompras tbody');
    tabela.innerHTML = '';

    dados.forEach(compra => {
      const linha = document.createElement('tr');

      linha.innerHTML = `
        <td>${compra.id}</td>
        <td>${compra.usuario}</td>
        <td>${compra.produto}</td>
        <td>${compra.quantidade}</td>
        <td>${new Date(compra.data).toLocaleDateString()}</td>
        <td>${compra.valor}</td>
        <td>${compra.pagamento}</td>
        <td>${compra.status}</td>
      `;

      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error('Erro ao carregar relatório:', erro);
  }
}

relatorioCompras();
