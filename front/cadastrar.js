btnCadastrarProd.addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const discountPercentageValue = document.getElementById('discountPercentage').value.trim();
    const discountPercentage = discountPercentageValue ? parseFloat(discountPercentageValue) : null;
    const stock = parseInt(document.getElementById('stock').value);
    const brand = document.getElementById('brand').value.trim() || null;
    const thumbnail = document.getElementById('thumbnail').value.trim() || null;

    if (!title || !description || !category || isNaN(price) || isNaN(stock)) {
        resProd.innerHTML = `<strong style="color: red;">Preencha todos os campos obrigatórios corretamente.</strong>`;
        return;
    }
    const dados = {
        produtos: [
            {
                title,
                description,
                category,
                price,
                discountPercentage,
                stock,
                brand,
                thumbnail
            }
        ]
    };

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados) 
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log('Resposta do backend:', valores);
            resProd.innerHTML = `<strong>Cadastro realizado com sucesso</strong>`;
        })
        .catch(err => {
            console.error('Erro ao cadastrar', err);
            resProd.innerHTML = `<strong style="color: red;">Erro ao cadastrar.</strong>`;
        });
});




const btnCadastrarUser = document.getElementById("btnCadastrarUser");
const resUser = document.getElementById("resUser");

btnCadastrarUser.addEventListener("click", () => {
    const primeiroNome = document.getElementById("primeiroNome").value.trim();
    const sobrenome = document.getElementById("lastName").value.trim();
    const idade = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("phone").value.trim();
    const endereco = document.getElementById("address").value.trim();
    const cidade = document.getElementById("city").value.trim();
    const estado = document.getElementById("state").value.trim();
    const dataNascimento = document.getElementById("birthDate").value.trim();

    if (
        !primeiroNome ||
        !sobrenome ||
        isNaN(idade) ||
        !email ||
        !telefone ||
        !endereco ||
        !cidade ||
        !estado ||
        !dataNascimento
    ) {
        resUser.innerHTML = `<strong style="color: red;">Preencha todos os campos obrigatórios corretamente.</strong>`;
        return;
    }

    const dados = {
        usuarios: [
            {
                primeiroNome,
                sobrenome,
                idade,
                email,
                telefone,
                endereco,
                cidade,
                estado,
                dataNascimento
            }
        ]
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

