// console.log('button file clicked added');

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('You are origin');
        window.location.href='/Payoo.html'

    } else {
        alert('Wrong Phone Number or Pin')
    }
    // console.log(phoneNumber,pinNumber);


})