// Burger navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-navigation__list')
    const navLinks = document.querySelectorAll('.header-navigation__list-item');
    burger.addEventListener('click', () => {
        nav.classList.toggle('header-navigation__list--active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        burger.classList.toggle('toggle');
    });
}

// reponsive Menu Navigating using it's URL
navSlide();
const activeNav = () => {
    var links = document.querySelectorAll('a[href="' + document.URL + '"]');
    links.forEach(link => {
        link.classList.toggle('header-navigation__text--active');
    });
};

activeNav();