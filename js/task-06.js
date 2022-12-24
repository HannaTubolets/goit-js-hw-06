const textInputEl = document.querySelector('#validation-input');

console.log(textInputEl.getAttribute('data-length'));

textInputEl.addEventListener('blur', event => {
  if (event.target.value.length === +textInputEl.getAttribute('data-length')) {
    textInputEl.classList.add('valid');
        console.log(textInputEl.value.length);

  if (textInputEl.classList.contains('invalid')) {
      textInputEl.classList.remove('invalid');
    }
  } else {
    if (textInputEl.classList.contains('valid')) {
      textInputEl.classList.remove('valid');
    }
    textInputEl.classList.add('invalid');
  }
});
