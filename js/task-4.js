const loginForm = document.querySelector(".login-form");

// Listen Event "Submit"
loginForm.addEventListener("submit", (event) => {
    // Reset default reloading from browser
    event.preventDefault();

    // Create an object with field's values
    const formData = {
        [loginForm.elements.email.name]: loginForm.email.value,
        [loginForm.elements.password.name]: loginForm.password.value,
    }

    //  Transform values into array
    const formDataValuesArr = Object.values(formData);
    if (formDataValuesArr.includes("")) {
        alert("All form fields must be filled in");
    } else {
        console.log(formData);
    }

    // reset the form
    loginForm.reset();
 
});
