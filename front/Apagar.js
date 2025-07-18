let res = document.getElementById('res')
let btnApagarUS = document.getElementById('btnApagarUS')

btnApagarUS.addEventListener('click', ()=>{
    let id = Number(document.getElementById('userID').value)
    res.innerHTML = ''

    fetch(`http://localhost:3000/usuarios/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => {
        console.log(resp)
        if(resp.status == 200){
            res.innerHTML += 'Dada apagados com sucesso!'
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar os dados',err)
    })
})

let resP = document.getElementById('resP')
let btnApagarPD = document.getElementById('btnApagarPD')

btnApagarPD.addEventListener('click', ()=>{
    let id = Number(document.getElementById('prodID').value)
    resP.innerHTML = ''

    fetch(`http://localhost:3000/produtos/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => {
        console.log(resp)
        if(resp.status == 200){
            resP.innerHTML += 'Dada apagados com sucesso!'
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar os dados',err)
    })
})