const login = document.querySelector('#login');
const errorMsg = document.querySelector('.error');

login.addEventListener('submit', e => {
    e.preventDefault();

    const password = document.querySelector('#password').value;

    let isPasswordValid = 0;
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const numberRegex = /[0-9]/g;
    if (password.match(uppercaseRegex) && password.match(lowercaseRegex) && password.match(numberRegex)) {
        isPasswordValid = 1;
    }

    let flag = 0;
    if (password.length < 8 || password.length > 10) {
        errorMsg.innerHTML = 'Password must be at least 8 characters and must not exceed 10 characters!';
    } else if (!isPasswordValid) {
        errorMsg.innerHTML = 'Password must be a combination of uppercase letter, lowercase letter, and numbers!';
    } else {
        flag = 1;
    }

    if (!flag) {
        errorMsg.classList.add('active');
    } else {
        location.replace('home.html');
    }
})