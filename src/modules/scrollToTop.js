const scrollToTop = () => {
    const toTop = document.getElementById('totop');
    const firstSection = document.getElementById('clubs');
    
    const rect = firstSection.getBoundingClientRect();
    const point = rect.top + rect.height;

    const renderArrow = (action = 'show') => {
        if (action === 'show') {
            toTop.classList.add('visible');
            toTop.classList.remove('unvisible');
        } else {
            toTop.classList.remove('visible');
            toTop.classList.add('unvisible');
        }
    };

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= point) {
            renderArrow();
        } else {
            renderArrow('hide');
        }
    });

    
};

export default scrollToTop;