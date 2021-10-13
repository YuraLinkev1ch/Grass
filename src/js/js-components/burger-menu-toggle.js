let button = document.querySelector('.burger-button');
let menu = document.querySelector('.page-header-nav');
let body = document.querySelector('body');
let closeButton = document.querySelector('.page-header-nav__close-button');
let closeLinks = document.querySelectorAll('.nav__list-link');

button.addEventListener('click', e => {
    menu.classList.add('page-header-nav_open');
    body.classList.add('scroll-hidden');
    console.log('button is worked');
    e.stopPropagation();
})

closeButton.addEventListener('click', e => {
    menu.classList.remove('page-header-nav_open');
    body.classList.remove('scroll-hidden');
    console.log('closeButton is worked');
})

closeLinks.forEach(function (entry) {
    entry.addEventListener("click", function (event){
        menu.classList.remove('page-header-nav_open');
        body.classList.remove('scroll-hidden');
        console.log('closeLink is worked');
    });
});

document.addEventListener('click', e => {    
    if (e.target !== menu && !menu.contains(e.target) && e.target !== button && menu.classList.contains('page-header-nav_open')) {
        menu.classList.remove('page-header-nav_open');
        body.classList.remove('scroll-hidden');
        console.log('target is worked');
    }
})