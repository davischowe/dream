const btnCadastrarProd = document.getElementById('btnCadastrarProd')
const resProd = document.getElementById('resProd')

btnCadastrarProd.addEventListener('click', async () => {
    try {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const price = parseFloat(document.getElementById('price').value);
        const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
        const stock = parseInt(document.getElementById('stock').value);
        const brand = document.getElementById('brand').value || null;
        const thumbnail = document.getElementById('thumbnail').value;

        const produtoManual = {
            title,
            description,
            category,
            price,
            discountPercentage,
            stock,
            brand,
            thumbnail
        };

        const respostaBack = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dados: [produtoManual] })
        });

        const resultado = await respostaBack.json();

        resProd.innerHTML = resultado.map(p => `
      <p><strong>Sucesso em Cadastrar o Produto<strong></p>
    `).join('');
    } catch (err) {
        console.error('Erro ao cadastrar produto:', err);
        resProd.innerText = 'Erro ao cadastrar o produto.';
    }
});

const btnCadastrarUser = document.getElementById("btnCadastrarUser")
const resUser = document.getElementById('resUser')
btnCadastrarUser.addEventListener("click", async () => {
    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: parseInt(document.getElementById("age").value),
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        birthDate: document.getElementById("birthDate").value
    };

    try {
        const res = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ dados: [user] })
        });
        if (res.ok) {
            document.getElementById("resUser").innerText = "Usuário cadastrado com sucesso!";
        } else {
            const erro = await res.json();
            console.error('Erro do backend:', erro);
            document.getElementById("resUser").innerText = "Erro ao cadastrar usuário: " + (erro.message || JSON.stringify(erro));
        }

    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err);
        document.getElementById("resUser").innerText = "Erro ao cadastrar usuário.";
    }
});