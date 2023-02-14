// task : deposit money and update total deposit account and total balance

// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 : get deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    // by default innerText and .value are string types.
    // convert string deposit amount to number.
    const newDepositAmount = parseFloat(depositField.value);

    // step 3:get the previous deposit total amount.
    const depositTotalField = document.getElementById('deposit-total');
    const previosDepositTotal = parseFloat(depositTotalField.innerText);

    // step 4 : add the previous deposit and new deposit amount to get current total deposit 
    const currentDepositTotal = previosDepositTotal + newDepositAmount;
    // step 5: update deposit total field'sinnerText
    depositTotalField.innerText = currentDepositTotal;

    // step 6: update the current balance 
    const balanceTotalField = document.getElementById('balance-total');
    // step 7 : get previous balance
    const previousBalanceTotal = parseFloat(balanceTotalField.innerText);
    //step 8: update current balance with previous balance and new deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // step 9: set innerText of the balanceTotalField
    balanceTotalField.innerText = currentBalanceTotal;

    // step last : clear the deposit field after deposit is done
    depositField.value = '';

});