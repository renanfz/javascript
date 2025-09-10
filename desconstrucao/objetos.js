/* const produto = {
    nome: 'notebook',
    preco: '3500',
    estoque: 10
}

let {nome: nomeProduto, preco: valor} = produto

console.log(`O produto ${nomeProduto} custa ${valor}`)
 */

/* const pedido = {
  cliente: {
    nome: "Fernanda",
    endereco: {
      rua: "Av. Brasil",
      numero: 123
    }
  },
  itens: [
    { produto: "Cafeteira", quantidade: 1 },
    { produto: "Filtro", quantidade: 2 }
  ]
};

function info() {
    let {
        cliente:{nome},
        cliente:{endereco:{rua, numero}}
    } = pedido

    let msg = `${nome} mora na ${rua}, número ${numero} e pediu ${}`
    return msg
}

console.log(info()) */

const pedidos = [
  { cliente: "João", produto: "Mouse", valor: 120 },
  { cliente: "Maria", produto: "Teclado", valor: 250 },
  { cliente: "Carlos", produto: "Monitor", valor: 900 },
  { cliente: "Ana", produto: "Mouse", valor: 130 }
];

let pedidosFiltrado = pedidos.filter(obj => obj.produto === 'Mouse')

/* let frases = pedidosFiltrado.map(({cliente, produto, valor}) => {
    return `${nome} comprou um ${produto} por R$${valor}`
}) */




let soma = function(x, y) {
    return x + y
}

console.log(soma(1, 8))