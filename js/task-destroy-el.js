const clickBtnEl = document.querySelector('.js-click');
const boxEl = document.querySelector('.js-box');
const resetBtnEl = document.querySelector('.js-reset');

let step = 0;

const onClickBtnClick = () => {
  step += 50;

  boxEl.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    clickBtnEl.removeEventListener('click', onClickBtnClick);
  }
};

const onResetBtnClick = () => {
  step = 0;

  boxEl.style.transform = `translate(${step}px, ${step}px)`;

  clickBtnEl.addEventListener('click', onClickBtnClick);
};

clickBtnEl.addEventListener('click', onClickBtnClick);
resetBtnEl.addEventListener('click', onResetBtnClick);