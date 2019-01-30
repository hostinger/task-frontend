

class MobileMenu{
    constructor(){
        // Properties
        this.mobileicon = ".mobile-menu__button";
        this.mobilemenu = document.querySelector(".mobile-menu__items");
        // Methods
        document.querySelector(this.mobileicon).addEventListener('click', this.icon.bind(this));
        this.icon;
    }
    icon(){
         this.mobilemenu.classList.toggle("mobile-menu__items--visible");
    }
}

export default MobileMenu;