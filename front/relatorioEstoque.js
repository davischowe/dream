async function relatorioEstoques() {
  try {
    const resposta = await fetch('http://localhost:3000/relatorio/estoque');

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const tabela = document.querySelector('#tabelaEstoques tbody');
    tabela.innerHTML = '';

    dados.forEach(produtos => {
      const linha = document.createElement('tr');

      linha.innerHTML = `
        <td>${produtos.id}</td>
        <td>${produtos.title}</td>
        <td>${produtos.category}</td>
        <td>${produtos.stock}</td>
      `;
      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error('Erro ao carregar relatório:', erro);
  }
}

relatorioEstoques();