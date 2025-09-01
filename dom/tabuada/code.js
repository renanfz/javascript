function calcularTabuada() {
    let tabela = document.querySelector('table')
    let numeroEscolhido = document.querySelector('input')
    let tituloTabela = document.getElementById('numeroTabuada')
    tituloTabela.innerText = numeroEscolhido.value

    if (!verificarCampo(numeroEscolhido)) {
        for (let n = 0; n <= 10; n++) {
            let linha = document.createElement('tr')
            let celulaExpressao = document.createElement('td')
            let celulaResultado = document.createElement('td')
    
            celulaExpressao.innerText = `${n} x ${numeroEscolhido.value} = `
            celulaResultado.innerText = (n * numeroEscolhido.value)
    
            linha.appendChild(celulaExpressao)
            linha.appendChild(celulaResultado)
            tabela.appendChild(linha)
        }
    } else {
        alert('Erro! Digite um número entre 0 e 20')
        numeroEscolhido.value = ''
        numeroEscolhido.focus()
    }
}

function verificarCampo(campo) {
    if (campo.value < 0 || campo.value > 20 || campo.value === '') {
        return true
    } else {
        return false
    }
}