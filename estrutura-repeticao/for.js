let carros = [
    {nome: 'Tcross', valor: 150.000},
    {nome: 'Nivus', valor: 125.990},
    {nome: 'Tiggo 7 Sport', valor: 159.990}
]

carros.push({nome: 'Compass', valor: 180.000}) // Adicionando obj ao array

for (let i = 0; i < carros.length; i++) { // (var de controle; condicao; incremento)
    console.log(carros[i].nome)
}

for (let car in carros) { // (para cada Key em Lista)
    console.log(carros[car])
}

for(let v of carros) { // (para cada Valor de Lista)
    console.log(v)
}
