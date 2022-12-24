const buttonsEl = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 buttonsEl.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  buttonsEl.span.textContent = counterValue;
};

buttonsEl.sub.addEventListener("click", increment);
buttonsEl.add.addEventListener("click", decrement);