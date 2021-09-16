getButton(0).onclick = function () {
    var operand1 = getValueFromInput(0)
    var operand2 = getValueFromInput(1)

    setResultValue(operand1 + operand2)
}

getButton(1).onclick = function () {
    var operand1 = getValueFromInput(0)
    var operand2 = getValueFromInput(1)

    setResultValue(operand1 - operand2)
}

getButton(2).onclick = function () {
    var operand1 = getValueFromInput(0)
    var operand2 = getValueFromInput(1)

    setResultValue(operand1 * operand2)
}

getButton(3).onclick = function () {
    var operand1 = getValueFromInput(0)
    var operand2 = getValueFromInput(1)

    setResultValue(operand1 / operand2)
}

function getButton(index) {
    return document.querySelectorAll('button')[index]
}

function getValueFromInput(index) {
    return Number(document.querySelectorAll('input')[index].value)
}

function setResultValue(value) {
    document.querySelectorAll('span')[1].innerText = value
}