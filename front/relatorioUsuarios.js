async function relatorioUsuario() {
  try {
    const resposta = await fetch('http://localhost:3000/relatorio/usuarios');

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const tabela = document.querySelector('#tabelaUsuarios tbody');
    tabela.innerHTML = '';

    dados.forEach(usuarios => {
      const linha = document.createElement('tr');

      linha.innerHTML = `
        <td>${usuarios.id}</td>
        <td>${usuarios.primeiroNome}</td>
        <td>${usuarios.sobrenome}</td>
        <td>${usuarios.idade}</td>
        <td>${usuarios.email}</td>
        <td>${usuarios.telefone}
        <td>${usuarios.endereco}
        <td>${usuarios.cidade}</td>
        <td>${usuarios.estado}</td>
        <td>${new Date(usuarios.dataNascimento).toLocaleDateString()}</td>
      `;
      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error('Erro ao carregar relatório:', erro);
  }
}

relatorioUsuario();