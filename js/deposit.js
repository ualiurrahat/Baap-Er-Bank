// task : deposit money and update total deposit account 

// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 : get deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // step 3:add the deposit amount to the total deposit amount.
    const depositTotalField = document.getElementById('deposit-total');
    depositTotalField.innerText = depositAmount;
});