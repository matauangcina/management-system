const register = document.querySelector('#register');
const errorMsg = document.querySelector('.error');

register.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const phoneNum = document.querySelector('#phone-num').value;
    const dob = document.querySelector('#dob').value;
    const password = document.querySelector('#password').value;

    let isPhoneNumValid = 1;
    for (let i = 0; i < phoneNum.length; i++) {
        if (phoneNum[0] !== '0') {
            isPhoneNumValid = 0;
            break;
        } else {
            if (phoneNum[1] !== '8') {
                isPhoneNumValid = 0;
                break;
            } else {
                if (phoneNum[i] < '0' || phoneNum[i] > '9') {
                    isPhoneNumValid = 0;
                    break;
                }
            }
        }
    }

    let isPasswordValid = 0;
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const numberRegex = /[0-9]/g;
    if (password.match(uppercaseRegex) && password.match(lowercaseRegex) && password.match(numberRegex)) {
        isPasswordValid = 1;
    }

    let flag = 0;
    if (name.length < 5) {
        errorMsg.innerHTML = 'Name must be at least 5 characters!';
    } else if (!isPhoneNumValid || (phoneNum.length < 11 || phoneNum.length > 13)) {
        errorMsg.innerHTML = 'Phone number is invalid!';
    } else if (!isOver18(new Date(dob))) {
        errorMsg.innerHTML = 'User must be at least 18 years old!';
    } else if (password.length < 8 || password.length > 10) {
        errorMsg.innerHTML = 'Password must be at least 8 characters and must not exceed 10 characters!';
    } else if (!isPasswordValid) {
        errorMsg.innerHTML = 'Password must be a combination of uppercase letter, lowercase letter, and numbers!';
    } else {
        flag = 1;
    }

    if (!flag) {
        errorMsg.classList.add('active');
    } else {
        location.replace('login.html');
    }
})

const isOver18 = dob => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);

    return dob <= date
}