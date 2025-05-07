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

pageElements.buttonEl.addEventListener("click", () => {
  const newColor = getRandomHexColor().toString();
  pageElements.bodyEl.style.backgroundColor = newColor;
  pageElements.textSpanEl.textContent = newColor;
})
