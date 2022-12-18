const activePage = document.querySelector('li.active');
const addUser = document.querySelector('#create');
const errorMsg = document.querySelector('.error');

addUser.addEventListener('submit', e => {
    e.preventDefault();

    if (activePage.classList.contains('purchase')) {
        const purchase = document.querySelector('#date').value;
        const vendor = document.querySelector('#vendor').value;
        const itemName = document.querySelector('#item-name').value;
        const quantity = document.querySelector('#quantity').value;
        const delivery = document.querySelector('#delivery').value;
        const status = document.querySelector('#status').value;
        const amount = document.querySelector('#amount').value;
    
        const currentDate = new Date();
        const purchaseDate = new Date(purchase);
        const deliveryDate = new Date(delivery);
    
        let flag = 0;
        if (itemName.length < 5 || itemName.length > 50) {
            errorMsg.innerHTML = 'Name must be at least 8 characters and must not exceed 50 characters!';
        } else if (vendor.length < 5 || vendor.length > 20) {
            errorMsg.innerHTML = 'Vendor must be at least 5 characters and must not exceed 20 characters!';
        } else if (purchaseDate > currentDate) {
            errorMsg.innerHTML = 'Purchase date invalid!';
        } else if (quantity < 1) {
            errorMsg.innerHTML = 'Must at least order 1 item!';
        } else if (amount < 1) {
            errorMsg.innerHTML = 'Amount invalid!';
        } else if (deliveryDate < purchaseDate) {
            errorMsg.innerHTML = 'Delivery date invalid!';
        } else if (status === '...') {
            errorMsg.innerHTML = 'Please fill purchase status!';
        } else {
            flag = 1;
        }
    
        if (!flag) {
            errorMsg.classList.add('active');
            resetInput();
        } else {
            location.replace('item.html');
        }
    } else {
        const fullName = document.querySelector('#full-name').value;
        const phoneNum = document.querySelector('#phone-num').value;
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#pwd').value;
        const confirmPass = document.querySelector('#retype-pwd').value;

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
        if (username.length < 5 || username.length > 10) {
            errorMsg.innerHTML = 'Username must be at least 5 characters and must not exceed 10 characters!';
        } else if (fullName.length < 5 || fullName.length > 50) {
            errorMsg.innerHTML = 'Name must be at least 8 characters and must not exceed 50 characters!';
        } else if (password.length < 8 || password.length > 10) {
            errorMsg.innerHTML = 'Password must be at least 8 characters and must not exceed 10 characters!';
        } else if (!isPasswordValid) {
            errorMsg.innerHTML = 'Password must be a combination of uppercase letter, lowercase letter, and numbers!';
        } else if (password !== confirmPass) {
            errorMsg.innerHTML = 'Password confirmation does not match!';
        } else {
            flag = 1;
        }

        if (!flag) {
            errorMsg.classList.add('active');
            resetInput();
        } else {
            location.replace('user.html');
        }
    }
})

const goBack = () => {
    if (activePage.classList.contains('purchase')) {
        location.replace('item.html');
    } else {
        location.replace('user.html');
    }
}

const validatePic = () => {
    const picture = document.querySelector('#pic');
    const path = picture.value;
    const validExtensionRgx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!validExtensionRgx.exec(path)) {
        errorMsg.innerHTML = 'Uploaded file must be a jpg, jpeg, png, or gif!';
        errorMsg.classList.add('active');
        picture.value = '';
        return false;
    } else {
        errorMsg.classList.remove('active');
        if (picture.files && picture.files[0]) {
            const readFile = new FileReader();
            readFile.onload = function(e) {
                const previewImage = document.querySelector('.preview');
                previewImage.innerHTML = '<img src="' + e.target.result + '">';
            };
            readFile.readAsDataURL(picture.files[0]);
        }
    }
}

const resetInput = () => {
    const allInput = document.querySelectorAll('.column.third input');
    allInput.forEach(input => {
        input.value = '';
    })
}