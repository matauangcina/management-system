const dropdownBtn = document.querySelector('.link');
const dropdown = document.querySelector('.dropdown');
const dropArrow = document.querySelector('.bxs-down-arrow');

document.addEventListener('click', (e) => {
    if (e.target.matches('.valid')) {
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            dropArrow.classList.add('bxs-down-arrow');
            dropArrow.classList.remove('bxs-up-arrow');
        } else {
            dropdown.classList.add('active');
            dropArrow.classList.remove('bxs-down-arrow');
            dropArrow.classList.add('bxs-up-arrow');
        }
    } else {
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            dropArrow.classList.add('bxs-down-arrow');
            dropArrow.classList.remove('bxs-up-arrow');
        }
    }
})

const menu = document.querySelector('#menu');
const list = document.querySelector('.navbar ul');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    list.classList.toggle('active');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    list.classList.remove('active');
    navbar.classList.remove('active');
})