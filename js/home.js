// Add money

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyAmount = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;

    if (isNaN(addMoneyAmount) || addMoneyAmount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (pinNumberInput.toString() === '1234') {
        const balanceText = document.getElementById('account-balance').innerText;
        const existingBalance = parseFloat(balanceText.replace(/[^0-9.]/g, ''));
        const newBalance = existingBalance + addMoneyAmount;

        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Failed to add money! Please try again...');
    }
});
