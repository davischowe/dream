const btnImportar = document.getElementById('btnImportar')
const res = document.getElementById('res')

btnImportar.addEventListener("click", async () => {
    res.innerHTML =''
  try {
    const respProdutos = await fetch("http://localhost:3000/importar-produtos");
    const produtos = await respProdutos.json(); 
    console.log("Produtos importados:", produtos);

    const respUsuarios = await fetch("http://localhost:3000/importar-usuarios");
    const usuarios = await respUsuarios.json(); 
    console.log("Usuários importados:", usuarios);

    res.innerHTML = "Importação concluída com sucesso!"
  } catch (erro) {
    console.error("Erro na importação:", erro);
    res.innerHTML = "Erro ao importar dados.";
  }
});
