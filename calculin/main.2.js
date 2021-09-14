document.querySelectorAll('button')[0].onclick = function () {
    var operand1 = Number(document.querySelectorAll('input')[0].value)
    var operand2 = Number(document.querySelectorAll('input')[1].value)

    document.querySelectorAll('span')[1].innerText = operand1 + operand2
}

document.querySelectorAll('button')[1].onclick = function () {
    var operand1 = Number(document.querySelectorAll('input')[0].value)
    var operand2 = Number(document.querySelectorAll('input')[1].value)

    document.querySelectorAll('span')[1].innerText = operand1 - operand2
}

document.querySelectorAll('button')[2].onclick = function () {
    var operand1 = Number(document.querySelectorAll('input')[0].value)
    var operand2 = Number(document.querySelectorAll('input')[1].value)

    document.querySelectorAll('span')[1].innerText = operand1 * operand2
}

document.querySelectorAll('button')[3].onclick = function () {
    var operand1 = Number(document.querySelectorAll('input')[0].value)
    var operand2 = Number(document.querySelectorAll('input')[1].value)

    document.querySelectorAll('span')[1].innerText = operand1 / operand2
}