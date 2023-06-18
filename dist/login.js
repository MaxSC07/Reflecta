const menu = document.querySelector('.white-menu');
const menuIcon = document.querySelector('.login-header__i');
const username = document.querySelector('username');
const password = document.querySelector('password');


let active = false;
menuIcon.addEventListener('click', ()=>{
    if(active == false){
        menu.classList.add('active');
        active = true;
    } else {
        menu.classList.remove('active');
        active = false;
    }
})
