const btnListarU = document.getElementById('btnListarU');
const res = document.getElementById('res');

btnListarU.addEventListener('click', async () => {
  fetch(`http://localhost:3000/usuarios`)
    .then(resp => resp.json())
    .then(valores => {
      console.log(valores)

      valores.forEach(val => {
        res.innerHTML += `Nome: ${val.primeiroNome} ${val.sobrenome} <br>`;
        res.innerHTML += `Idade: ${val.idade} anos <br>`;
        res.innerHTML += `Email: ${val.email} <br>`;
        res.innerHTML += `Telefone: ${val.telefone} <br>`;
        res.innerHTML += `Endereço: ${val.endereco}, ${val.cidade} - ${val.estado} <br>`;
        res.innerHTML += `Data de Nascimento: ${val.dataNascimento} <br>`;
        res.innerHTML += `<hr>`;
      })

    })
    .catch((err) => {
      console.error('Erro ao cadastrar os dados', err)
    })
})