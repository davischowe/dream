let res = document.getElementById('res');
let btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    let usuarioId = parseInt(document.getElementById('usuarioId').value);
    let produtoId = parseInt(document.getElementById('produtoId').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let dataCompra = document.getElementById('dataCompra').value;
    let precoUnitario = parseFloat(document.getElementById('precoUnitario').value);
    let descontoAplicado = parseFloat(document.getElementById('descontoAplicado').value);
    let formaPagamento = document.getElementById('formaPagamento').value;
    let statusCompra = document.getElementById('status').value;

    let precoFinal = (precoUnitario * quantidade * (1 - (descontoAplicado / 100))).toFixed(2);

    const dados = {
        usuarioId,
        produtoId,
        quantidade,
        dataCompra,
        precoUnitario,
        descontoAplicado,
        precoFinal,
        formaPagamento,
        statusCompra
    };

    console.log("Dados enviados ao servidor:", dados);
    res.innerHTML = '';

    fetch(`http://localhost:3000/compras`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(valores => {
            console.log(valores);
            res.innerHTML += `Compra cadastrada com sucesso!<br>`;
            res.innerHTML += `ID da Compra: ${valores.id}<br>`;
            res.innerHTML += `Usuário ID: ${valores.usuarioId}<br>`;
            res.innerHTML += `Produto ID: ${valores.produtoId}<br>`;
            res.innerHTML += `Quantidade: ${valores.quantidade}<br>`;
            res.innerHTML += `Data da Compra: ${valores.dataCompra}<br>`;
            res.innerHTML += `Preço Unitário: R$ ${valores.precoUnitario}<br>`;
            res.innerHTML += `Desconto Aplicado: ${valores.descontoAplicado}%<br>`;
            res.innerHTML += `Preço Final: R$ ${valores.precoFinal}<br>`;
            res.innerHTML += `Forma de Pagamento: ${valores.formaPagamento}<br>`;
            res.innerHTML += `Status: ${valores.statusCompra}<br>`;
        })
        .catch(err => {
            console.error('erro ao cadastrar dados', err);
        });
});