

let DOMStrings = {
    headerSectionMenuIcon:      ".header-section__menu-icon",
    asideNavigation:            ".aside-navigation",
    asideNavigationMenuContent: ".aside-navigation__menu-content",
};

class MobileMenu{
    constructor(){
        // Properties
        this.menuIcon =                     document.querySelector(DOMStrings.headerSectionMenuIcon);
        this.asideNavigation =              document.querySelector (DOMStrings.asideNavigation);
        this.asideNavigationMenuContent =   document.querySelector(DOMStrings.asideNavigationMenuContent);

        // Methods
        this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
        this.toggleMenu;

    }

    toggleMenu(){
        this.menuIcon.classList.toggle('header-section__menu-icon--close-x');
        this.asideNavigationMenuContent.classList.toggle('aside-navigation__menu-content--is-visible');
        
    }
}

export default MobileMenu;