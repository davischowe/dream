const btnAtualizarProd = document.getElementById('btnAtualizarProd');
const resProd = document.getElementById('resProd');

btnAtualizarProd.addEventListener('click', () => {
    const id = Number(document.getElementById('id').value);
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value.trim() / null);
    const stock = parseInt(document.getElementById('stock').value);
    const brand = document.getElementById('brand').value.trim() || null;
    const thumbnail = document.getElementById('thumbnail').value.trim() || null;

    if (
        !id ||
        !title ||
        !description ||
        !category ||
        isNaN(price) ||
        isNaN(stock)
    ) {
        resProd.innerHTML = `<strong style="color: red;">Preencha todos os campos obrigatórios corretamente.</strong>`;
        return;
    }

    const dados = {
        title,
        description,
        category,
        price,
        discountPercentage,
        stock,
        brand,
        thumbnail
    };

    resProd.innerHTML = '';
    console.log('Enviando os seguintes dados para a API:', dados);

    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log('Resposta da API:', valores);
            resProd.innerHTML = `<strong>Atualização realizado com sucesso</strong>`;
        })
        .catch(err => {
            console.error('Erro ao atualizar os dados', err);
            resProd.innerHTML = `<strong style="color: red;">Erro ao Atualizar os dados.</strong>`;
        });
});

const btnAtualizarUser = document.getElementById("btnAtualizarUser");
const resUser = document.getElementById("resUser");

btnAtualizarUser.addEventListener("click", (e) => {
    e.preventDefault();
    const id = Number(document.getElementById('id').value);
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const birthDate = document.getElementById("birthDate").value.trim();

    if (
        isNaN(id) ||
        !firstName ||
        !lastName ||
        isNaN(age) ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !state
    ) {
        resUser.innerHTML = `<strong style="color: red;">Preencha todos os campos obrigatórios corretamente.</strong>`;
        return;
    }

    const dados = {
        firstName,
        lastName,
        age,
        email,
        phone,
        address,
        city,
        state,
        birthDate
    };

    resUser.innerHTML = '';
    console.log('Enviando os seguintes dados para a API:', dados);

    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log('Resposta da API:', valores);
            resUser.innerHTML = `<strong>Usuário Atualizado com sucesso!</strong>`;
        })
        .catch(err => {
            console.error('Erro ao Atualizar os dados', err);
            resUser.innerHTML = `<strong style="color: red;">Erro ao Atualizar os dados.</strong>`;
        });
});