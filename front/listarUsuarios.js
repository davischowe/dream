const btnListarU = document.getElementById('btnListarU');
const res = document.getElementById('res');

btnListarU.addEventListener('click', async () => {
  fetch(`http://localhost:3000/usuarios`)
    .then(resp => resp.json())
    .then(valores => {
      console.log(valores)

      valores.forEach(val => {
        res.innerHTML += `Nome: ${val.firstName} ${val.lastName} <br>`;
        res.innerHTML += `Idade: ${val.age} anos <br>`;
        res.innerHTML += `Email: ${val.email} <br>`;
        res.innerHTML += `Telefone: ${val.phone} <br>`;
        res.innerHTML += `Endereço: ${val.address}, ${val.city} - ${val.state} <br>`;
        res.innerHTML += `Data de Nascimento: ${val.birthDate} <br>`;
        res.innerHTML += `<hr>`;
      })

    })
    .catch((err) => {
      console.error('Erro ao cadastrar os dados', err)
    })
})