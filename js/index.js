const $menu = document.querySelector('#menu');
const $burgerMenu = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');
ipad.addListener(validation)

function showMenu() {
    if($menu.classList.contains('is-Active')) {
        $menu.classList.remove('is-Active');
    } else {
        $menu.classList.add('is-Active');
    }
}

function validation(event) {
    if(event.matches) {
        $burgerMenu.addEventListener('click', showMenu);
    } else {
        $burgerMenu.removeEventListener('click', showMenu);
    }
}

validation(ipad);

