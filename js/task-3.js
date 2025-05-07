const textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputedValue = event.currentTarget.value.trim();
    if (inputedValue === "") {
        textOutput.textContent = "Anonymous";
    } else {
        textOutput.textContent = inputedValue;
    }
});


