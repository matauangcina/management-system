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

const activePage = document.querySelector('li.active');

let obj;
if (activePage.classList.contains('user')) {
    obj = users;
} else if (activePage.classList.contains('purchase')) {
    obj = items;
}

const insertData = (data) => {
    const tableBody = document.querySelector('.body');
    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let insert;
        if ((i + 1) % 2 === 1) {
            if (obj === users) {
                insert =
                `<div class="row">
                    <div class="column no">${data[i].no}</div>
                    <div class="column pic"><img src="${data[i].picture}" alt=""></div>
                    <div class="column">${data[i].username}</div>
                    <div class="column">${data[i].name}</div>
                    <div class="column">${data[i].email}</div>
                    <div class="column action">
                        <a class="detail" href="user-detail.html">Detail</a>
                        <a class="edit" href="edit-user.html">Edit</a>
                        <a class="delete">Delete</a>
                    </div>
                </div>`
            } else {
                insert =
                `<div class="row">
                    <div class="column no">${data[i].no}</div>
                    <div class="column pic"><img src="${data[i].picture}" alt=""></div>
                    <div class="column">${data[i].name}</div>
                    <div class="column">${data[i].quantity}</div>
                    <div class="column">${data[i].creator}</div>
                    <div class="column">${data[i].created}</div>
                    <div class="column action">
                        <a class="detail" href="item-detail.html">Detail</a>
                        <a class="edit" href="edit-item.html">Edit</a>
                        <a class="delete">Delete</a>
                    </div>
                </div>`
            }
        } else {
            if (obj === users) {
                insert =
                `<div class="row even">
                    <div class="column no">${data[i].no}</div>
                    <div class="column pic"><img src="${data[i].picture}" alt=""></div>
                    <div class="column">${data[i].username}</div>
                    <div class="column">${data[i].name}</div>
                    <div class="column">${data[i].email}</div>
                    <div class="column action">
                        <a class="detail" href="user-detail.html">Detail</a>
                        <a class="edit" href="edit-user.html">Edit</a>
                        <a class="delete">Delete</a>
                    </div>
                </div>`
            } else {
                insert =
                `<div class="row even">
                    <div class="column no">${data[i].no}</div>
                    <div class="column pic"><img src="${data[i].picture}" alt=""></div>
                    <div class="column">${data[i].name}</div>
                    <div class="column">${data[i].quantity}</div>
                    <div class="column">${data[i].creator}</div>
                    <div class="column">${data[i].created}</div>
                    <div class="column action">
                        <a class="detail" href="item-detail">Detail</a>
                        <a class="edit" href="edit-item.html">Edit</a>
                        <a class="delete">Delete</a>
                    </div>
                </div>`
            }
        }
        tableBody.innerHTML += insert;
    }
}

insertData(obj);

const searchField = document.querySelector('#search');
searchField.addEventListener('input', e => {
    let value = e.target.value;
    const data = filterData(value, obj);
    insertData(data);
})

const filterData = (val, data) => {
    let searchedData = [];
    for (let i = 0; i < data.length; i++) {
        val = val.toLowerCase();
        let name = data[i].name.toLowerCase();
        if (name.includes(val)) {
            searchedData.push(data[i]);
        }
    }
    return searchedData;
}

const asc = document.querySelectorAll('.sort .bxs-up-arrow');
const desc = document.querySelectorAll('.sort .bxs-down-arrow');
const headerColumn = document.querySelectorAll('.header .column');

asc.forEach(btn => {
    btn.addEventListener('click', e => {
        headerColumn.forEach(col => {
            col.classList.remove('desc');
            col.classList.remove('asc');
        })

        const parent = e.target.parentElement;
        const grandparent = parent.parentElement;

        grandparent.classList.add('asc');

        let data = [];
        if (grandparent.classList.contains('name')) {
            data = obj.sort(sortNameAsc);
        } else if (grandparent.classList.contains('username')) {
            data = obj.sort(sortUsernameAsc);
        } else if (grandparent.classList.contains('email')) {
            data = obj.sort(sortEmailAsc);
        } else if (grandparent.classList.contains('no')) {
            data = obj.sort(sortNumAsc);
        } else if (grandparent.classList.contains('quantity')) {
            data = obj.sort(sortQuantityAsc);
        } else if (grandparent.classList.contains('creator')) {
            data = obj.sort(sortCreatorAsc);
        } else if (grandparent.classList.contains('date')) {
            data = obj.sort(sortDateCreatedAsc);
        }
        insertData(data);
    })
})

desc.forEach(btn => {
    btn.addEventListener('click', e => {
        headerColumn.forEach(col => {
            col.classList.remove('desc');
            col.classList.remove('asc');
        })

        const parent = e.target.parentElement;
        const grandparent = parent.parentElement;

        grandparent.classList.add('desc');

        let data = [];
        if (grandparent.classList.contains('name')) {
            data = obj.sort(sortNameDesc);
        } else if (grandparent.classList.contains('username')) {
            data = obj.sort(sortUsernameDesc);
        } else if (grandparent.classList.contains('email')) {
            data = obj.sort(sortEmailDesc);
        } else if (grandparent.classList.contains('no')) {
            data = obj.sort(sortNumDesc);
        } else if (grandparent.classList.contains('quantity')) {
            data = obj.sort(sortQuantityDesc);
        } else if (grandparent.classList.contains('creator')) {
            data = obj.sort(sortCreatorDesc);
        } else if (grandparent.classList.contains('date')) {
            data = obj.sort(sortDateCreatedDesc);
        }
        insertData(data);
    })
})

const deleteButton = document.querySelectorAll('.delete');

deleteButton.forEach(btn => {
    btn.addEventListener('click', e => {
        const parent = e.target.parentElement;
        const grandparent = parent.parentElement;

        grandparent.classList.add('hide');
    })
})

const sortNumDesc = (a, b) => {
    if (a.no < b.no) {
        return 1;
    } else if (a.no > b.no) {
        return -1;
    }
    return 0;
}

const sortNameDesc = (a, b) => {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    }
    return 0;
}

const sortUsernameDesc = (a, b) => {
    if (a.username < b.username) {
        return 1;
    } else if (a.username > b.username) {
        return -1;
    }
    return 0;
}

const sortEmailDesc = (a, b) => {
    if (a.email < b.email) {
        return 1;
    } else if (a.email > b.email) {
        return -1;
    }
    return 0;
}

const sortQuantityDesc = (a, b) => {
    if (a.quantity < b.quantity) {
        return 1;
    } else if (a.quantity > b.quantity) {
        return -1;
    }
    return 0;
}

const sortCreatorDesc = (a, b) => {
    if (a.creator < b.creator) {
        return 1;
    } else if (a.creator > b.creator) {
        return -1;
    }
    return 0;
}

const sortDateCreatedDesc = (a, b) => {
    if (a.created < b.created) {
        return 1;
    } else if (a.created > b.created) {
        return -1;
    }
    return 0;
}

const sortNumAsc = (a, b) => {
    if (a.no < b.no) {
        return -1;
    } else if (a.no > b.no) {
        return 1;
    }
    return 0;
}

const sortNameAsc = (a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
}

const sortUsernameAsc = (a, b) => {
    if (a.username < b.username) {
        return -1;
    } else if (a.username > b.username) {
        return 1;
    }
    return 0;
}

const sortEmailAsc = (a, b) => {
    if (a.email < b.email) {
        return -1;
    } else if (a.email > b.email) {
        return 1;
    }
    return 0;
}

const sortQuantityAsc = (a, b) => {
    if (a.quantity < b.quantity) {
        return -1;
    } else if (a.quantity > b.quantity) {
        return 1;
    }
    return 0;
}

const sortCreatorAsc = (a, b) => {
    if (a.creator < b.creator) {
        return -1;
    } else if (a.creator > b.creator) {
        return 1;
    }
    return 0;
}

const sortDateCreatedAsc = (a, b) => {
    if (a.created < b.created) {
        return -1;
    } else if (a.created > b.created) {
        return 1;
    }
    return 0;
}