function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("keydown", event => {
    console.log("key: ", event.key);
    console.log("code: ", event.code);
    if (event.code === "Escape") {
        alert("Don't go away, wait 1 minute more");
    }

    
})


const refs = {
    clickBtnEl: document.querySelector(".js-click"),
    resetBtnEl: document.querySelector(".js-reset"),
    changeColorBtnEl: document.querySelector(".js-changeColor"),
    divEl: document.querySelector(".js-box"),
    divRightEl: document.querySelector(".js-box-right"),
}


console.dir(refs.divEl);
console.dir(refs.clickBtnEl);


let step = 0;

const handleClickBtnClick = () => {
    step += 50;
    refs.divEl.style.transform = `translate(${step}px, ${step}px)`;
    refs.divEl.style.transition = "background-color 2000ms ease 500ms, transform 800ms ease-in 500ms";

    refs.divRightEl.style.transform = `translate(-${step}px, ${step}px)`;
    refs.divRightEl.style.transition = "background-color 2000ms ease 500ms, transform 800ms ease-in 500ms";
}

const handleResetBtnClick = () => {
    refs.divEl.style.backgroundColor = "tomato";
    refs.divRightEl.style.backgroundColor = "tomato";
    step = 0;
    refs.divEl.style.transform = `translate(${step}px, ${step}px)`;
    refs.divRightEl.style.transform = `translate(${step}px, ${step}px)`;
    refs.clickBtnEl.addEventListener("click", handleClickBtnClick);

    if (step === 300) {
        refs.clickBtnEl.removeEventListener("click", handleResetBtnClick)
    }
}

const handleChangeColorBtnClick = () => {
    // refs.divEl.style.backgroundColor = "green";
    refs.divEl.style.backgroundColor = getRandomHexColor();
    refs.divRightEl.style.backgroundColor = getRandomHexColor();
}

refs.clickBtnEl.addEventListener("click", handleClickBtnClick);
refs.resetBtnEl.addEventListener("click", handleResetBtnClick);
refs.changeColorBtnEl.addEventListener("click", handleChangeColorBtnClick);






