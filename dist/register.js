const menu = document.querySelector('.white-menu');
const menuIcon = document.querySelector('.register-header__i');
const usernameEl = document.querySelector('.username');
const passwordEl = document.querySelector('.password');
const emailEl = document.querySelector('.email');
const submitEl = document.querySelector('.submit');


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

submitEl.addEventListener('click', ()=>{
    let username = usernameEl.value;
    usernameEl.value = '';
    let email = emailEl.value;
    emailEl.value = '';
    let password = passwordEl.value;
    passwordEl.value = '';
    addAccount(username, email, password);
})

function addAccount(username, email, password) {
    alert(`${username} ${email} ${password}`)
}

