class Carro { // Template - modelo
    potencia = 0
    constructor(marca, nome, versao) {
        this.marca = marca
        this.nome = nome
        this.versao = versao
    }
    addPotencia(novaPotencia) { // Funcionalidade - action
        if(typeof novaPotencia == 'number') {
            this.potencia = novaPotencia + 'cv'
        } else {
            console.log('A potencia deve ser uma número!')
        }
    }
}

let car1 = new Carro('Volkswagen', 'Tiguan', 'Highline')
car1.addPotencia(150)

console.log(car1)