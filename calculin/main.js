document.querySelectorAll('button')[0].onclick = function () {
    var operand1 = getOperand1Value()
    var operand2 = getOperand2Value()

    document.querySelectorAll('span')[1].innerText = operand1 + operand2
}

document.querySelectorAll('button')[1].onclick = function () {
    var operand1 = getOperand1Value()
    var operand2 = getOperand2Value()

    document.querySelectorAll('span')[1].innerText = operand1 - operand2
}

document.querySelectorAll('button')[2].onclick = function () {
    var operand1 = getOperand1Value()
    var operand2 = getOperand2Value()

    document.querySelectorAll('span')[1].innerText = operand1 * operand2
}

document.querySelectorAll('button')[3].onclick = function () {
    var operand1 = getOperand1Value()
    var operand2 = getOperand2Value()

    document.querySelectorAll('span')[1].innerText = operand1 / operand2
}

function getOperand1Value() {
    return Number(document.querySelectorAll('input')[0].value)
}

function getOperand2Value() {
    return Number(document.querySelectorAll('input')[1].value)
}