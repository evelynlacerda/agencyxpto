const projectImages = document.querySelectorAll('.project-image')
const arrowNext = document.getElementById('btn-next')
const arrowBack = document.getElementById('btn-back')
let actualImage = 0

function imageOff() {
    projectImages.forEach(image => {
        image.classList.remove('show')
    })
}

function imageOn() {
    projectImages[actualImage].classList.add('show')
}

arrowNext.addEventListener('click', function () {
    if(actualImage !== projectImages.length - 1) {
        actualImage++
    } else {
        actualImage = 0
    }
    
    imageOff()
    imageOn()
})

arrowBack.addEventListener('click', function () {
    if(actualImage !== 0) {
        actualImage--
    } else {
        actualImage = projectImages.length - 1
    }

    imageOff()
    imageOn()
})