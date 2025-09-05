async function readPosts() {
    let postArea = document.getElementsByClassName('posts')[0]
    postArea.innerHTML = 'Carreagando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let inJson = await response.json()

    if(inJson.length > 0) {
        postArea.innerHTML = ''
        for (let i in inJson) {
            let postHTML = `<div><h1>${inJson[i].title}</h1><p>${inJson[i].body}</p><hr/></div>`;

            postArea.innerHTML += postHTML
        }
    } else {
        postArea.innerHTML = 'Nenhum post encontrado!'
    }
}

async function addRequests(title, body) {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        })
        document.querySelector('#textTitle').value = ''
        document.querySelector('#textBody').value = ''
        readPosts()
    } catch(erro) {
        console.log(erro)
    } 
}

function inserir() {
    let title = document.querySelector('#textTitle').value
    let body = document.querySelector('#textBody').value

    if(title && body) {
        addRequests(title, body)
    } else {
        alert('Preencha todos os campos!')
    }
}

readPosts()