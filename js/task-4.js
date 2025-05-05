// Accses DOM login-form element 
const registerFform = {
    loginForm: document.querySelector(".login-form"),
}
console.log(registerFform);


// Listen Event "Submit"
registerFform.loginForm.addEventListener("submit", (event) => {
    // Reset default reloading from browser
    event.preventDefault();

    // Create an object with field's values
    const formData = {
        [registerFform.loginForm.elements.email.name]: registerFform.loginForm.email.value,
        [registerFform.loginForm.elements.password.name]: registerFform.loginForm.password.value,
    }

    //  Transform values into array
    const formDataValuesArr = Object.values(formData);
    if (formDataValuesArr.includes("")) {
        alert("All form fields must be filled in");
    } else {
        console.log(formData);
    }

    // reset the form
    registerFform.reset;
 
});

// const registerForm = document.querySelector(".login-form");
// // console.dir(registerForm);

// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit (event) {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.elements.email.value;
//     const passwd = form.elements.password.value;

//     if (email === "" || passwd === "") {
//         return console.log("All form fields must be filled in");
//     }
//     console.log(`Email: ${email}, Password: ${passwd}`);
//     form.reset();
// }
