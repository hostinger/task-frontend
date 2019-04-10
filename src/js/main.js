const mobileNav = document.querySelector('.header__mobile-nav-holder');
const mobileNavButton = document.querySelector('.header__mobile-nav');
const mobileX = document.querySelector('.header__mobile-close-button');

mobileNavButton.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});

mobileX.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});
