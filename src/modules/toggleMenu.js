const toggleMenu = () => {

    const mainMenu = document.querySelector('nav.top-menu ul.hidden-small');
    const burgerBtn = document.querySelector('nav.top-menu div.hidden-large');
    const nav = document.querySelector('nav.top-menu');

    if (!mainMenu || !burgerBtn || !nav) {
        return;
    }

    const showMenu = () => {
        if (window.innerWidth < 768) {
            mainMenu.style.display = 'none';
            burgerBtn.style.display = 'block';
        } else {
            mainMenu.removeAttribute('style');
            burgerBtn.removeAttribute('style');
            nav.classList.remove('top-window');
        }
    };

    const stycky = nav.getBoundingClientRect().top;

    const fixedBurgerBtn = () => {

        if (getComputedStyle(burgerBtn).display !== 'block') {
            return;
        }

        if (window.pageYOffset >= stycky) {
            nav.classList.add('top-window');
        } else {
            nav.classList.remove('top-window');
        }
    };

    window.addEventListener('scroll', fixedBurgerBtn);

    showMenu();
    window.addEventListener('resize', showMenu);

    
    
};

export default toggleMenu;