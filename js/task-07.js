const sizeFontChangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeFontChangeEl.addEventListener('change', event => {
  textEl.style.fontSize = `${event.target.value}px`;
});
