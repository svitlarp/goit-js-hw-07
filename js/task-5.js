function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const pageElements = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  textSpanEl: document.querySelector(".color"),
}

console.dir(pageElements.buttonEl);
console.dir(pageElements.textSpanEl);


pageElements.buttonEl.addEventListener("click", event => {
  pageElements.bodyEl.style.backgroundColor = getRandomHexColor();
  pageElements.textSpanEl.textContent = getRandomHexColor().toString();
})



