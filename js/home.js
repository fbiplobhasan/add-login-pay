document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // step-2

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const addMoneyAmount = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    // console.log(typeof addMoneyAmount);

    // step-3

    if (pinNumberInput === '1234') {

        // step-4

        const balance = document.getElementById('account-balance').innerText;
        const existingBalance = parseFloat(balance);
        // console.log(typeof existingBalance);

        // step-5

        const newBalance = existingBalance + addMoneyAmount;
        // console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

    } else {
        alert('Failed to add money! please try again...')
    }
})