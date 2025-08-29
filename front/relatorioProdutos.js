async function relatorioProdutos() {
  try {
    const resposta = await fetch('http://localhost:3000/relatorio/produtos');

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const tabela = document.querySelector('#tabelaProdutos tbody');
    tabela.innerHTML = '';

    dados.forEach(produtos => {
      const linha = document.createElement('tr');

      linha.innerHTML = `
        <td>${produtos.id}</td>
        <td>${produtos.title}</td>
        <td>${produtos.description}</td>
        <td>${produtos.category}</td>
        <td>${produtos.price}</td>
        <td>${produtos.discountPercentage}</td>
        <td>${produtos.stock}</td>
        <td>${produtos.brand}</td>
        <td>${produtos.thumbnail}</td>
      `;
      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error('Erro ao carregar relatório:', erro);
  }
}

relatorioProdutos();