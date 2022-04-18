const menuBtn = document.querySelector('.menu-btn')
const offCanvas = document.querySelector('.off-canvas')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        offCanvas.classList.add('active')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        offCanvas.classList.remove('active')
        menuOpen = false
    }
})