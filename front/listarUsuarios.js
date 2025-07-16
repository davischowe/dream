const btnListarU = document.getElementById('btnListarU');
const res = document.getElementById('res');

btnListarU.addEventListener('click', async () => {
  try {
    // Busca os usuários do backend local
    const respostaLocal = await fetch('http://localhost:3000/usuarios');
    const dadosLocal = await respostaLocal.json();

    // Busca os usuários da DummyJSON
    const respostaAPI = await fetch('https://dummyjson.com/users');
    const dadosAPI = await respostaAPI.json();

    // Juntando os usuários (dadosAPI.users é o array da API pública)
    const todosUsuarios = [...dadosLocal, ...dadosAPI.users];

    // Gerar HTML
    res.innerHTML = todosUsuarios.map(u => `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
      <strong>${u.id}<strong><br>
        <strong>${u.firstName} ${u.lastName}</strong><br>
        Email: ${u.email}<br>
        Idade: ${u.age || '---'}<br>
        Cidade: ${u.city || (u.address?.city || '---')}<br>
      </div>
    `).join('');
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    res.innerHTML = '<p>Erro ao listar usuários.</p>';
  }
});