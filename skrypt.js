let reset = document.getElementById('reset');
let send = document.getElementById('send');
let resultP = document.getElementById('result')
send.addEventListener('click', function (){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    resultP.innerHTML = name + ' ' + surname + '<br>' + email + '<br>' + 'Usługa: ' + service
})

reset.addEventListener ('click', function() {
    name = '';
    surname = '';
    email = '';
    service = '';
    resultP.innerHTML = name + ' ' + surname + '<br>' + email + '<br>' + service
})