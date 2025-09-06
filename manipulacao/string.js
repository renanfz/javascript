let receita = ['farinha', 'ovos', 'leite', 'cenoura']

function pesquisar(valor) {
    let i = receita.indexOf(valor)
    if(i > -1) {
        console.log(receita[i]) 
    } else {
        console.log( 'item não encontrado')
    }
}

let campo = document.querySelector('input')

campo.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        pesquisar(campo.value)
    }
})



/* campo.addEventListener('input', () => {
    campo.value = campo.value.toLocaleUpperCase()
    
})
console.log(typeof campo.pattern) */