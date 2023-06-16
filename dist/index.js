const menu = document.querySelector('.blue-menu');
const menuIcon = document.querySelector('.welcome-header__i');
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