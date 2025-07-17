const btnCadastrarProd = document.getElementById('btnCadastrarProd');
const resProd = document.getElementById('resProd');

btnCadastrarProd.addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value.trim() / null);
    const stock = parseInt(document.getElementById('stock').value);
    const brand = document.getElementById('brand').value.trim() || null;
    const thumbnail = document.getElementById('thumbnail').value.trim() || null;

    if (
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

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log('Resposta da API:', valores);
            resProd.innerHTML = `<strong>Cadastro realizado com sucesso</strong>`;
        })
        .catch(err => {
            console.error('Erro ao cadastrar os dados', err);
            resProd.innerHTML = `<strong style="color: red;">Erro ao cadastrar os dados.</strong>`;
        });
});

const btnCadastrarUser = document.getElementById("btnCadastrarUser");
const resUser = document.getElementById("resUser");

btnCadastrarUser.addEventListener("click", () => {
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
        !firstName ||
        !lastName ||
        isNaN(age) ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !state ||
        !birthDate
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

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log('Resposta da API:', valores);
            resUser.innerHTML = `<strong>Usuário cadastrado com sucesso!</strong>`;
        })
        .catch(err => {
            console.error('Erro ao cadastrar os dados', err);
            resUser.innerHTML = `<strong style="color: red;">Erro ao cadastrar os dados.</strong>`;
        });
});
