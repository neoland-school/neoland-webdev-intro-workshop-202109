var x = 100, y = 100

var box = document.querySelector('.box')

box.style.left = x + 'px' // '100px' 
box.style.top = y + 'px' // '100px'

var step = 10

document.onkeypress = function(event) {
    //console.log(event.key)

    if (event.key === 'w') {
        y = y - step

        box.style.top = y + 'px'
    }

    if (event.key === 's') {
        y = y + step

        box.style.top = y + 'px'
    }

    if (event.key === 'a') {
        x = x - step

        box.style.left = x + 'px'
    }

    if (event.key === 'd') {
        x = x + step

        box.style.left = x + 'px'
    }
}