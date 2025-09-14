function carregar() {
    let imagem = document.getElementById('arquivo').files[0]

    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width = 250

    document.getElementById('area').appendChild(img)
}