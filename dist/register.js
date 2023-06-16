const menu = document.querySelector('.white-menu');
const menuIcon = document.querySelector('.register-header__i');
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