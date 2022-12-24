function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeBgColorBtnEl: document.querySelector('button.change-color'),
  bodyEl: document.querySelector('body'),
  colorValueEl: document.querySelector('span.color'),
};

refs.changeBgColorBtnEl.addEventListener('click', event => {
  let color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.colorValueEl.textContent = color;
});
