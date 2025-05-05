function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  Accses DOM elements
const refs = {
  controlsInputEl: document.querySelector("#controls input"),
  controlsBtnCreateEl: document.querySelector("button[data-create]"),
  controlsBtnDestroyEl: document.querySelector("button[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
}

console.dir(refs.controlsBtnCreateEl);
console.dir(refs.controlsBtnDestroyEl);


// Function that creates n-th div blocks depending on user input
function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return "Please input a Number between 1 and 100."
  }

  let boxSize = 30;
  let boxesArr = [];

  for (let i = 0; i<amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    boxesArr.push(divEl);
    boxSize += 10;
  }
  return boxesArr;
}


// Destroy div boxes
function destroyBoxes() {
  refs.divBoxesEl.innerHTML = "";
}

const handleBtnCreateElClick = () => {
  const inputNum = refs.controlsInputEl.value;
  const arr = createBoxes(inputNum);

  refs.divBoxesEl.append(...arr);
  refs.controlsInputEl.value = "";
}

refs.controlsBtnCreateEl.addEventListener("click", handleBtnCreateElClick);
refs.controlsBtnDestroyEl.addEventListener("click", destroyBoxes);
