const userNameInputEl = document.querySelector('#name-input');
const userNameOutputEl = document.querySelector('#name-output');

userNameInputEl.addEventListener('input', event => {
  userNameOutputEl.textContent = event.target.value;

  if (event.target.value === '') {
    userNameOutputEl.textContent = 'Anonymous';
  }
});
