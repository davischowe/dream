const btnListarProd = document.getElementById('btnListarProd');
const res = document.getElementById('res');

btnListarProd.addEventListener('click', async () => {
  fetch(`http://localhost:3000/produtos`)
    .then(resp => resp.json())
    .then(valores => {
      console.log(valores)

      valores.forEach(val => {
        res.innerHTML += `Nome do Produto: ${val.title} <br>`;
        res.innerHTML += `Marca: ${val.brand || "Não informado"} <br>`;
        res.innerHTML += `Thumbnail: <img src="${val.thumbnail || "#"}" alt="Imagem do produto" width="100"> <br>`;
        res.innerHTML += `Preço: R$ ${val.price.toFixed(2)} <br>`;
        res.innerHTML += `<hr>`;
      })

    })
    .catch((err) => {
      console.error('Erro ao cadastrar os dados', err)
    })
})