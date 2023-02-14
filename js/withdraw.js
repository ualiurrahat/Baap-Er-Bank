// task : withdraw money, update total withdraw and total balance 

// step 1 : add evnt listener to the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2 : get withdraw amount from withdraw input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    // step 3: get the previos total withdraw
    const withdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalField.innerText);
   
    // step 4 : calculate the current withdraw total.
    const currentWithdrawTotal = newWithdrawAmount+previousWithdrawTotal;
    // step 5 : update innertText of the withdraw total field
    withdrawTotalField.innerText = currentWithdrawTotal;

    // step 6: get the total balance field
    const totalBalanceField = document.getElementById('balance-total');
    // step 7: get the previous total balance
    const previousBalanceTotal = parseFloat(totalBalanceField.innerText);
    // step 8: update total balance after withdraw
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step 9: update innerText of the total balance field
    totalBalanceField.innerText = currentBalanceTotal;

    // step 10: clear the withdraw field input
    withdrawField.value = '';
});