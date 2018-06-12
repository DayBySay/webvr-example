/* here you require original components. */
require('./component.js')
require('./shader.js')

function main() {
    setTimeout(() => {
        setEquirectangularImage("img2.jpg")
    }, 1000)
}

function setEquirectangularImage(imgName) {
    var sky = document.querySelector('a-sky')
    // sky.setAttribute('material', 'src', imgName)
    sky.emit('fadeOut')
}

document.addEventListener('DOMContentLoaded', function () {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})

