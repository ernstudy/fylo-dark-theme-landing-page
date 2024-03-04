


const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-container');
const emailEdress = document.querySelector('#email-adress');
const email = document.querySelector('#email');
const validateFormulary = document.querySelector('#validate-formulary');




function showMenu() {
    nav.classList.toggle('active');
    menu.children[0].classList.toggle('bx-x-circle')
}


menu.addEventListener('click', showMenu);




// -------------validate email---------------


function validateEmail (e) {
    if(emailEdress.value == ''){
        email.style.color = 'red';
        email.style.display = 'block'
        e.preventDefault();
    }
}

validateFormulary.addEventListener('submit', validateEmail);