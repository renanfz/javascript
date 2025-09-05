class Person {
    age = 0

    constructor(name) {
        this.name = name
    }
}

function createPerson(name, age) {
    if (age < 0) throw new Error("Idade inválida")
    return new Person(name, age)
}

let pessoa2 = new Person('Amanda')
let pessoa1 = createPerson('Renan', 74)


console.log(`${pessoa1.name} tem ${pessoa1.age} anos`)
console.log(pessoa1)