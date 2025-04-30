const registerForm = document.querySelector(".login-form");
console.log(registerForm);

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const passwd = form.elements.password.value;

    if (email === "" || passwd === "") {
        return console.log("All form fields must be filled in");
    }
    console.log(`Email: ${email}, Password: ${passwd}`);
    form.reset();
})
