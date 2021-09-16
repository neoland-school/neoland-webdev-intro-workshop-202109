document.querySelectorAll('button')[0].onclick = function () {
    document.querySelectorAll('span')[1].innerText =
        Number(document.querySelectorAll('input')[0].value) + Number(document.querySelectorAll('input')[1].value)
}

document.querySelectorAll('button')[1].onclick = function () {
    document.querySelectorAll('span')[1].innerText =
        Number(document.querySelectorAll('input')[0].value) - Number(document.querySelectorAll('input')[1].value)
}

document.querySelectorAll('button')[2].onclick = function () {
    document.querySelectorAll('span')[1].innerText =
        Number(document.querySelectorAll('input')[0].value) * Number(document.querySelectorAll('input')[1].value)
}

document.querySelectorAll('button')[3].onclick = function () {
    document.querySelectorAll('span')[1].innerText =
        Number(document.querySelectorAll('input')[0].value) / Number(document.querySelectorAll('input')[1].value)
}