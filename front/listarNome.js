const btnListarUS = document.getElementById('btnListarUS')
const res = document.getElementById('res')

btnListarUS.addEventListener('click', () => {
    const nome = document.getElementById('nomeU').value.trim();

    res.innerHTML = ''

    fetch(`http://localhost:3000/usuarios/busca?nome=${nome}`)
        .then(resp => resp.json())
        .then(valores => {
            valores.forEach(val => {
                res.innerHTML += `Nome: ${val.firstName} ${val.lastName} <br>`;
                res.innerHTML += `Idade: ${val.age} anos <br>`;
                res.innerHTML += `Email: ${val.email} <br>`;
                res.innerHTML += `Telefone: ${val.phone} <br>`;
                res.innerHTML += `Endereço: ${val.address}, ${val.city} - ${val.state} <br>`;
                res.innerHTML += `Data de Nascimento: ${val.birthDate} <br>`;
                res.innerHTML += `<hr>`;
            });
        })
        .catch((err) => {
            console.error('Erro ao Listar o Usuario', err)
        })
})

const btnListarPD = document.getElementById('btnListarPD')
const resP = document.getElementById('resP')

btnListarPD.addEventListener('click', () => {
    const nome = document.getElementById('nomeP').value.trim();
    fetch(`http://localhost:3000/produtos/busca?nome=${nome}`)
        .then(resp => resp.json())
        .then(valores => {
            valores.forEach(val => {
                resP.innerHTML += `Nome do Produto: ${val.title} <br>`;
                resP.innerHTML += `Marca: ${val.brand || "Não informado"} <br>`;
                resP.innerHTML += `Thumbnail: <img src="${val.thumbnail || "#"}" alt="Imagem do produto" width="100"> <br>`;
                resP.innerHTML += `Preço: R$ ${val.price.toFixed(2)} <br>`;
                resP.innerHTML += `<hr>`;
            })
        })
        .catch((err) => {
            console.error('Erro ao listar o Produto', err)
        })
})