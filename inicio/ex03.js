var frutas = ['mamao', 'morango', 'uva', 'banana']

function buscarItem(lista, item) {
    if (lista.indexOf(item) === -1) {
        console.log('Item não encontrado')
    }
}

buscarItem(frutas, 'abacate')
console.log(frutas.indexOf('banana'))