const btnListarProd = document.getElementById('btnListarProd');
const res = document.getElementById('res');

btnListarProd.addEventListener('click', async () => {
  try {
    const resLocal = await fetch('http://localhost:3000/produtos');
    const produtosLocal = await resLocal.json();
    const resApi = await fetch('https://dummyjson.com/products');
    const dadosApi = await resApi.json();
    const produtosApi = dadosApi.products;

    const todosProdutos = [...produtosLocal, ...produtosApi];
    res.innerHTML = todosProdutos.map(p => `
      <div style="margin-bottom: 10px;">
        <strong>${p.title}</strong> - R$ ${p.price?.toFixed?.(2) || p.price}
        <br><em>${p.category || 'Sem categoria'}</em>
      </div>
    `).join('');
    
  } catch (err) {
    console.error('Erro ao listar os produtos:', err);
    res.innerHTML = '<p style="color: red;">Erro ao carregar os produtos</p>';
  }
});