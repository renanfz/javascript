


function calcularTabuada() {
    let tabela = document.querySelector('table')
    let numeroEscolhido = document.querySelector('input').value
    let tituloTabela = document.getElementById('numeroTabuada')
    tituloTabela.innerText = numeroEscolhido
    
    for (let n = 0; n <= 10; n++) {
        let linha = document.createElement('tr')
        let celulaExpressao = document.createElement('td')
        let celulaResultado = document.createElement('td')

        celulaExpressao.innerText = `${n} x ${numeroEscolhido} = `
        celulaResultado.innerText = (n * numeroEscolhido)

        linha.appendChild(celulaExpressao)
        linha.appendChild(celulaResultado)
        tabela.appendChild(linha)
    }
}