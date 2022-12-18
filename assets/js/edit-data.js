// import {users as users, items as items} from './data.js';
// import {generateRandomData} from './random-data.js';

const users = [
    {
        no: 1,
        picture: './images/male.png',
        username: 'User 1',
        name: 'User One',
        email: 'user1@gmail.com',
        phone: '085243526172',
        address: 'UserOne Street',
        dob: '2002-01-01',
        cob: 'Jakarta',
        nationality: 'Indonesia',
        login: '2022-07-13',
        ip: '192.168.2.1',
        browser: 'Chrome'
    },
    {
        no: 2,
        picture: './images/female.png',
        username: 'User 2',
        name: 'User Two',
        email: 'user1@gmail.com',
        phone: '087893746251',
        address: 'UserTwo Street',
        dob: '2001-02-01',
        cob: 'Kuala Lumpur',
        nationality: 'Malaysia',
        login: '2022-06-12',
        ip: '244.14.76.226',
        browser: 'Safari'
    },
    {
        no: 3,
        picture: './images/male.png',
        username: 'User 3',
        name: 'User Three',
        email: 'user3@gmail.com',
        phone: '083645362626',
        address: 'UserThree Street',
        dob: '1999-05-02',
        cob: 'Bangkok',
        nationality: 'Thailand',
        login: '2022-07-01',
        ip: '14.147.196.154',
        browser: 'Mozilla'
    },
    {
        no: 4,
        picture: './images/female.png',
        username: 'User 4',
        name: 'User Four',
        email: 'user4@gmail.com',
        phone: '087898768909',
        address: 'UserFour Street',
        dob: '1998-06-22',
        cob: 'Tokyo',
        nationality: 'Japan',
        login: '2022-07-13',
        ip: '223.233.90.74',
        browser: 'Edge'
    },
    {
        no: 5,
        picture: './images/male.png',
        username: 'Admin',
        name: 'Administrator',
        email: 'admin@gmail.com',
        phone: '081234251625',
        address: 'Admin Street',
        dob: '1999-12-01',
        cob: 'Seoul',
        nationality: 'Korea',
        login: '2022-07-12',
        ip: '39.244.33.237',
        browser: 'Opera Mini'
    },
    {
        no: 6,
        picture: './images/female.png',
        username: 'User 5',
        name: 'User Five',
        email: 'user5@gmail.com',
        phone: '085345890293',
        address: 'UserFive Street',
        dob: '1998-05-31',
        cob: 'Medan',
        nationality: 'Indonesia',
        login: '2022-06-01',
        ip: '127.175.8.72',
        browser: 'Chrome'
    },
    {
        no: 7,
        picture: './images/male.png',
        username: 'User 6',
        name: 'User Six',
        email: 'user6@gmail.com',
        phone: '088327362837',
        address: 'UserSix Street',
        dob: '2002-12-31',
        cob: 'Singapore',
        nationality: 'Singapore',
        login: '2022-07-11',
        ip: '12.227.160.252',
        browser: 'Safari'
    },
    {
        no: 8,
        picture: './images/female.png',
        username: 'User 7',
        name: 'User Seven',
        email: 'user7@gmail.com',
        phone: '081326378901',
        address: 'UserSeven Street',
        dob: '2001-11-11',
        cob: 'Surabaya',
        nationality: 'Indonesia',
        login: '2022-06-22',
        ip: '87.109.68.1',
        browser: 'Opera Mini'
    },
    {
        no: 9,
        picture: './images/male.png',
        username: 'User 8',
        name: 'User Eight',
        email: 'user8@gmail.com',
        phone: '089789835454',
        address: 'UserEight Street',
        dob: '1990-07-13',
        cob: 'Penang',
        nationality: 'Malaysia',
        login: '2022-07-10',
        ip: '91.13.94.98',
        browser: 'Mozilla'
    },
    {
        no: 10,
        picture: './images/female.png',
        username: 'User 9',
        name: 'User Nine',
        email: 'user9@gmail.com',
        phone: '082536472631',
        address: 'UserNine Street',
        dob: '2003-12-12',
        cob: 'Bandung',
        nationality: 'Indonesia',
        login: '2022-06-30',
        ip: '41.210.180.155',
        browser: 'Chrome'
    },
]

const items = [
    {
        no: 1,
        order: 'PO-001',
        picture: './images/item-1.png',
        name: 'Item 1',
        quantity: 10,
        creator: 'Bambang',
        created: '2022-07-07',
        status: 'Success',
        vendor: 'PT Bambang Pamungkas',
        delivery: '2022-07-08',
        amount: 10
    },
    {
        no: 2,
        order: 'PO-002',
        picture: './images/item-2.png',
        name: 'Item 2',
        quantity: 32,
        creator: 'Pamungkas',
        created: '2022-06-02',
        status: 'In Progress',
        vendor: 'PT Margot Robbie',
        delivery: '2022-06-12',
        amount: 1999
    },
    {
        no: 3,
        order: 'PO-003',
        picture: './images/item-3.png',
        name: 'Item 3',
        quantity: 19,
        creator: 'Deddy',
        created: '2021-04-02',
        status: 'Closed',
        vendor: 'PT Robert Downey',
        delivery: '2021-07-08',
        amount: 190
    },
    {
        no: 4,
        order: 'PO-004',
        picture: './images/item-4.png',
        name: 'Item 4',
        quantity: 30,
        creator: 'Andi',
        created: '2020-01-01',
        status: 'On Hold',
        vendor: 'PT Surya Jaya',
        delivery: '2020-01-08',
        amount: 102
    },
    {
        no: 5,
        order: 'PO-005',
        picture: './images/item-5.png',
        name: 'Item 5',
        quantity: 22,
        creator: 'Budi',
        created: '2021-03-02',
        status: 'Draft',
        vendor: 'PT Asam Balado',
        delivery: '2021-03-03',
        amount: 9
    },
    {
        no: 6,
        order: 'PO-006',
        picture: './images/item-6.png',
        name: 'Item 6',
        quantity: 3,
        creator: 'Jerome',
        created: '2019-02-02',
        status: 'Success',
        vendor: 'PT Mantap Jiwa',
        delivery: '2022-06-22',
        amount: 99
    },
    {
        no: 7,
        order: 'PO-007',
        picture: './images/item-7.png',
        name: 'Item 7',
        quantity: 15,
        creator: 'Superman',
        created: '2022-02-07',
        status: 'Draft',
        vendor: 'PT Soto Medan',
        delivery: '2022-07-08',
        amount: 999
    },
    {
        no: 8,
        order: 'PO-008',
        picture: './images/item-8.png',
        name: 'Item 8',
        quantity: 26,
        creator: 'Tommy',
        created: '2018-06-22',
        status: 'In Progress',
        vendor: 'PT Sambal Matah',
        delivery: '2018-07-08',
        amount: 299
    },
    {
        no: 9,
        order: 'PO-009',
        picture: './images/item-9.png',
        name: 'Item 9',
        quantity: 6,
        creator: 'Albert',
        created: '2019-12-21',
        status: 'Closed',
        vendor: 'PT Omurice',
        delivery: '2020-07-01',
        amount: 9
    },
    {
        no: 10,
        order: 'PO-010',
        picture: './images/item-10.png',
        name: 'Item 10',
        quantity: 11,
        creator: 'Mama',
        created: '2022-02-20',
        status: 'Draft',
        vendor: 'PT Tsukemen',
        delivery: '2022-04-05',
        amount: 9999
    }
]

const randomData = Math.round(Math.random() * (10 - 1) + 1);
const inputField = document.querySelectorAll('.column input');

const generateRandomData = (obj) => {
    for (let i = 0; i < obj.length; i++) {
        if (i === randomData) {
            if (obj === users) {
                inputField.forEach((e, j) => {
                    if (e.classList.contains('name')) {
                        inputField[j].value = obj[i].name;
                    } else if (e.classList.contains('username')) {
                        inputField[j].value = obj[i].username;
                    } else if (e.classList.contains('email')) {
                        inputField[j].value = obj[i].email;
                    } else if (e.classList.contains('phone-num')) {
                        inputField[j].value = obj[i].phone;
                    } else if (e.classList.contains('address')) {
                        inputField[j].value = obj[i].address;
                    } else if (e.classList.contains('no')) {
                        inputField[j].value = obj[i].no;
                    } else if (e.classList.contains('dob')) {
                        inputField[j].value = obj[i].dob;
                    } else if (e.classList.contains('cob')) {
                        inputField[j].value = obj[i].cob;
                    } else if (e.classList.contains('nationality')) {
                        inputField[j].value = obj[i].nationality;
                    } else if (e.classList.contains('login')) {
                        inputField[j].value = obj[i].login;
                    } else if (e.classList.contains('ip-addr')) {
                        inputField[j].value = obj[i].ip;
                    } else if (e.classList.contains('browser')) {
                        inputField[j].value = obj[i].browser;
                    } else {
                        const previewImage = document.querySelector('.preview');
                        previewImage.innerHTML = `<img src="${obj[i].picture}">`;
                    }
                })
            } else if (obj === items) {
                inputField.forEach((e, j) => {
                    if (e.classList.contains('name')) {
                        inputField[j].value = obj[i].name;
                    } else if (e.classList.contains('date')) {
                        inputField[j].value = obj[i].created;
                    } else if (e.classList.contains('delivery')) {
                        inputField[j].value = obj[i].delivery;
                    } else if (e.classList.contains('vendor')) {
                        inputField[j].value = obj[i].vendor;
                    } else if (e.classList.contains('quantity')) {
                        inputField[j].value = obj[i].quantity;
                    } else if (e.classList.contains('amount')) {
                        inputField[j].value = obj[i].amount;
                    } else if (e.classList.contains('order')) {
                        inputField[j].value = obj[i].order;
                    } else if (e.classList.contains('no')) {
                        inputField[j].value = obj[i].no;
                    } else if (e.classList.contains('created')) {
                        inputField[j].value = obj[i].created;
                    } else if (e.classList.contains('status')) {
                        inputField[j].value = obj[i].status;
                    } else if (e.classList.contains('creator')) {
                        inputField[j].value = obj[i].creator;
                    } else {
                        const previewImage = document.querySelector('.preview');
                        previewImage.innerHTML = `<img src="${obj[i].picture}">`;
                    }
                })
                const status = document.querySelector('#status');
                status.value = obj[i].status;
            }
        }
    }
}

const activePage = document.querySelector('li.active');
let obj;
if (activePage.classList.contains('user')) {
    obj = users;
} else if (activePage.classList.contains('purchase')) {
    obj = items;
}

generateRandomData(obj);

const submitForm = document.querySelector('#update');
const errorMsg = document.querySelector('.error');

submitForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if (activePage.classList.contains('user')) {
        const fullName = document.querySelector('#full-name').value;
        const username = document.querySelector('#username').value;
        const phoneNum = document.querySelector('#phone-num').value;
        const picInput = document.querySelector('#pic');
    
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
    
        picInput.addEventListener('change', validatePic);
    
        let flag = 0;
        if (username.length < 5 || username.length > 10) {
            errorMsg.innerHTML = 'Username must be at least 5 characters and must not exceed 10 characters!';
        } else if (fullName.length < 5 || fullName.length > 50) {
            errorMsg.innerHTML = 'Name must be at least 8 characters and must not exceed 50 characters!';
        } else if (!isPhoneNumValid || (phoneNum.length < 11 || phoneNum.length > 13)) {
            errorMsg.innerHTML = 'Phone number is invalid!';
        } else {
            flag = 1;
        }
    
        if (!flag) {
            errorMsg.classList.add('active');
        } 
        else {
            location.replace('user.html');
        }
    } else {
        const purchase = document.querySelector('#date').value;
        const vendor = document.querySelector('#vendor').value;
        const itemName = document.querySelector('#name').value;
        const quantity = document.querySelector('#quantity').value;
        const delivery = document.querySelector('#delivery').value;
        const status = document.querySelector('#status').value;
        const amount = document.querySelector('#amount').value;
        const picInput = document.querySelector('#pic');

        const currentDate = new Date();
        const purchaseDate = new Date(purchase);
        const deliveryDate = new Date(delivery);

        picInput.addEventListener('change', validatePic);

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
        } else {
            location.replace('item.html');
        }
    }
})

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

const goBack = () => {
    if (activePage.classList.contains('purchase')) {
        location.replace('item.html');
    } else {
        location.replace('user.html');
    }
}

const backButton = document.querySelector('.back');
backButton.addEventListener('click', goBack);