document.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    //var email = document.querySelectorAll('input')[0].value
    //var password = document.querySelectorAll('input')[1].value

    var email = event.target.email.value
    var password = event.target.password.value

    //alert(email + ' ' + password)

    if (email === 'johndoe@mail.com' && password === '123123123') {
        //alert('ok, credenciales correctas!')

        document.querySelector('.login').classList.add('off')
        document.querySelector('.home').classList.remove('off')

        event.target.email.value = ''
        event.target.password.value = ''

        document.querySelector('.login__error').innerText = ''
    } else {
        //alert('lo siento, credenciales incorrectas!')

        document.querySelector('.login__error').innerText = 'credenciales incorrectas'
    }
}

document.querySelector('.home__logout').onclick = function() {
    document.querySelector('.home').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}