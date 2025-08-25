function calcularImovel(metragem, quartos) {
    let m2 = 3000
    if (quartos === 1) return metragem * (m2);
    if (quartos === 2) return metragem * (m2 * 1.2);
    if (quartos === 3) return metragem * (m2 * 1.5);
    return 'Número de quartos inválido!'
}

let valor = calcularImovel(150, 1)
console.log(valor.toFixed(2))