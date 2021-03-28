const toggleMenu = () => {

    const mainMenu = document.querySelector('nav.top-menu ul.hidden-small');
    const burgerBtnDiv = document.querySelector('nav.top-menu div.hidden-large');
    const nav = document.querySelector('nav.top-menu');
    const burgerBtn = burgerBtnDiv.querySelector('img');
    const popupMenu = document.querySelector('nav.popup-menu');

    if (!mainMenu || !burgerBtnDiv || !nav) {
        return;
    }

    const showMenu = () => {
        if (window.innerWidth < 768) {
            mainMenu.style.display = 'none';
            burgerBtnDiv.style.display = 'block';
        } else {
            mainMenu.removeAttribute('style');
            burgerBtnDiv.removeAttribute('style');
            nav.classList.remove('top-window');
        }
    };

    const stycky = nav.getBoundingClientRect().top;

    const fixedBurgerBtn = () => {

        if (getComputedStyle(burgerBtnDiv).display !== 'block') {
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

    burgerBtn.addEventListener('click', () => {
        nav.style.display = 'none';
        
        popupMenu.classList.add('active');
        // popupMenu.style.display = 'flex';

        popupMenu.addEventListener('click', (event) => {
            const target = event.target;
            console.log(target);

            if ((target.tagName === 'IMG' && target.closest('.close-menu-btn')) ||
                      (target.tagName === 'A' && target.closest('.scroll')))
            {
                // popupMenu.removeAttribute('style');
                popupMenu.classList.remove('active');
            }
            
            nav.removeAttribute('style');
        });
    });


    
    
};

export default toggleMenu;