// console.log('features file added');

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    console.log('cashout btn clicked');

    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('btn-show-add-money').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById('add-money-form').classList.remove('hidden');
})