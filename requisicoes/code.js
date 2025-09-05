async function carregar() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let inJson = await response.json()
}

async function inserirPost(titulo, userId) { // Metodo POST, para envio
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titulo, userId: userId })
        })
        let inJson = await response.json()
        console.log(inJson)
    } catch(erro) {
        console.error('Erro ao inserir o post:', erro)
    }
}


document.querySelector('button').addEventListener('click', inserirPost('Testando', 54))