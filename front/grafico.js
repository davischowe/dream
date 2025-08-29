const btnProduto = document.getElementById('btnProdutoEstoque');
const btnUsuario = document.getElementById('btnUsuarioIdade');

const ctxProduto = document.getElementById('graficoProdutoEstoque').getContext('2d');
const ctxUsuario = document.getElementById('graficoUsuarioIdade').getContext('2d');

let chartProduto = null;
let chartUsuario = null;

btnProduto.addEventListener('click', () => {
  const idInicio = parseInt(document.getElementById('idProdutoInicio').value) || 0;
  const idFim = parseInt(document.getElementById('idProdutoFim').value) || Infinity;

  fetch('http://localhost:3000/produtos')
    .then(resp => resp.json())
    .then(produtos => {
      const filtrados = produtos
        .filter(p => p.id >= idInicio && p.id <= idFim)
      const labels = filtrados.map(p => p.title);
      const dados = filtrados.map(p => p.stock);

      if (chartProduto) chartProduto.destroy();

      chartProduto = new Chart(ctxProduto, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Estoque',
            data: dados,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    })
    .catch(err => {
      console.error('Erro ao carregar produtos:', err);
      alert('Erro ao carregar gráfico de produtos.');
    });
});

btnUsuario.addEventListener('click', () => {
  const idInicio = parseInt(document.getElementById('idUsuarioInicio').value) || 0;
  const idFim = parseInt(document.getElementById('idUsuarioFim').value) || Infinity;

  fetch('http://localhost:3000/usuarios')
    .then(resp => resp.json())
    .then(usuarios => {
      const filtrados = usuarios
        .filter(u => u.id >= idInicio && u.id <= idFim)
      const labels = filtrados.map(u => `${u.primeiroNome} ${u.sobrenome}`);
      const dados = filtrados.map(u => u.idade);

      if (chartUsuario) chartUsuario.destroy();

      chartUsuario = new Chart(ctxUsuario, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Idade',
            data: dados,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    })
    .catch(err => {
      console.error('Erro ao carregar usuários:', err);
      alert('Erro ao carregar gráfico de usuários.');
    });
});
