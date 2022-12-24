const userLoginFormEl = document.querySelector('.login-form');

userLoginFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }
    const userDetails = { email: email.value, Password: password.value };
    
    console.log(userDetails);
    event.currentTarget.reset();
}
