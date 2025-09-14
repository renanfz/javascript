async function loadRequest() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    let inJson = await resp.json()
    montarBlog(inJson)
    // await('Espere, quando terminar continuo executando')
}

function montarBlog(lista) {
    let html = ''
    for(let i in lista) {
        html+= `<h3>${lista[i].title}<h3/>`
        html+= lista[i].body+'<br>'
        html+= `<hr/>`
    }
    
    document.querySelector('div').innerHTML = html
}

