btnImportar.addEventListener("click", async () => {
    try {
        // ==========================
        // IMPORTAR USUÁRIOS
        // ==========================
        const respUsers = await fetch('https://dummyjson.com/users');
        const dadosDummyUsers = await respUsers.json();

        let usuarios = dadosDummyUsers.users.map(dad => ({
            primeiroNome: dad.firstName,
            sobrenome: dad.lastName,
            idade: dad.age,
            email: dad.email,
            telefone: dad.phone,
            endereco: dad.address.address,
            cidade: dad.address.city,
            estado: dad.address.state,
            dataNascimento: new Date(dad.birthDate).toISOString().split('T')[0]
        }));

        console.log("Usuários a enviar:", usuarios);

        const envioUsers = await fetch("http://localhost:3000/importar-usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarios)
        });
        const resultadoUsers = await envioUsers.json();
        console.log("Resposta backend (Usuários):", resultadoUsers);

        // Importa produtos
        const respProd = await fetch('https://dummyjson.com/products');
        const dadosProd = await respProd.json();

        let valoresProdutos = dadosProd.products.map(prod => ({
            title: prod.title,
            description: prod.description,
            category: prod.category,
            price: prod.price,
            discountPercentage: prod.discountPercentage,
            stock: prod.stock,
            brand: prod.brand,
            thumbnail: prod.thumbnail
        }));

        await fetch("http://localhost:3000/importar-produtos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(valoresProdutos)
        });

        res.innerText = "Importação concluída!";
    } catch (err) {
        console.error("Erro no processo de importação:", err);
        res.innerText = "Erro ao importar!";
    }
});
