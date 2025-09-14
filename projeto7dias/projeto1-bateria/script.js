document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value
    playComposition(song)
})

function playComposition(comp) {
    let time = 0
    for(let tecla of comp) {
        setTimeout(() => {
            playSound(`key${tecla}`)
        }, time);
        time += 400
    }
}

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement= document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }

    if(keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300);
    }
}

let teclas = 'abcd'

for(let l of teclas) {
  console.log(l)
}