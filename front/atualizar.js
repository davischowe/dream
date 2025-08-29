const btnAtualizarProd = document.getElementById('btnAtualizarProd');
const resProd = document.getElementById('resProd');

btnAtualizarProd.addEventListener('click', () => {
    const id = Number(document.getElementById('prodId').value);
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

btnAtualizarUser.addEventListener("click", () => {
    const id = Number(document.getElementById('userId').value);
    const primeiroNome = document.getElementById("primeiroNome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value.trim();

    if (
        isNaN(id) ||
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
        primeiroNome,
        sobrenome,
        idade,
        email,
        telefone,
        endereco,
        cidade,
        estado,
        dataNascimento
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