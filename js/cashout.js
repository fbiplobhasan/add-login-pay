// Cash Out

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutI = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if (isNaN(cashOutI) || cashOutI <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (pinNumber === '1234') {
        const balanceText = document.getElementById('account-balance').innerText;
        const balanceI = parseFloat(balanceText);

        if (cashOutI > balanceI) {
            alert('Insufficient balance!');
            return;
        }

        const newBalance = balanceI - cashOutI;
        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Failed to cash out. Please try again later.');
    }
});
