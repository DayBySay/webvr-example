/* here you require original components. */
require('./component.js')
require('./shader.js')

function main() {
    document.getElementById('camera1').addEventListener('click', handleClick1, false)
    document.getElementById('camera2').addEventListener('click', handleClick2, false)
    console.log(document.getElementById('camera1'))
}

function handleClick1(evt) {
    var sky = document.querySelector('a-sky')
    sky.emit('fadeOut')
    setTimeout(() => {
        changeSky("img1.jpg")
        sky.emit('fadeIn')
    }, 1000)
}

function handleClick2(evt) {
    var sky = document.querySelector('a-sky')
    sky.emit('fadeOut')
    setTimeout(() => {
        changeSky("img2.jpg")
        sky.emit('fadeIn')
    }, 1000)
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

