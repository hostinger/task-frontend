const mobileNav = document.querySelector('.header__mobile-nav-holder');
const mobileNavButton = document.querySelector('.header__burger-cont');
const mobileX = document.querySelector('.x-button');

mobileNavButton.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});

mobileX.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});
