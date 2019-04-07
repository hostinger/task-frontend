export function menuToggle() {
    const trigger = document.querySelector('.nav-main__toggle');
    const menu = document.querySelector('.nav-main__links');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('is-active');
    })
}