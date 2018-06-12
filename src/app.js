/* here you require original components. */
require('./component.js')
require('./shader.js')

function main() {
    setTimeout(() => {
        var sky = document.querySelector('a-sky')
        sky.emit('fadeOut')
    }, 3000)
    setTimeout(() => {
        changeSky("img2.jpg")
        var sky = document.querySelector('a-sky')
        sky.emit('fadeIn')
    }, 5000)
}

function changeSky(imgName) {
    var sky = document.querySelector('a-sky')
    sky.setAttribute('material', 'src', imgName)
}

document.addEventListener('DOMContentLoaded', function () {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})

