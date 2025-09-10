function getTime() {
    let d = new Date()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let ms = d.getMilliseconds()
    let time = m+':'+s
    document.querySelector('.time').innerHTML = time
}

let tempo = setInterval(getTime, 700)