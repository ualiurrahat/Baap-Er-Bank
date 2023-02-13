// task : add event listener and compare email & password 
//step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step2: get email from the email input field.
    const emailField = document.getElementById('user-email');
    // always remember to use .value to get text from input elements
    const email = emailField.value;
    // stpe 3: get password from the password input field.
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    // step 4: check & verify email and password 
    // DANGER: do not verify email and password on the client side 
    // we will learn this on backend. now just performing here to understand.
    if(email === "rahat@developer.com" && password==="money")
    {
        console.log("valid user");
    }
    else{
        console.log("invalid user");
    }
});