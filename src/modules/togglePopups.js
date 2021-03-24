const togglePopups = () => {
    document.body.addEventListener('click', (event) => {

        const target = event.target;

        let idPopup;

        if (target.closest('.fixed-gift')) {
            idPopup = '#gift';
        } else {
            idPopup = target.dataset.popup;
            if (!idPopup) {
                return;
            }
            event.preventDefault();
        }

        const popup = document.querySelector(idPopup);
        popup.style.display = 'block';

        popup.addEventListener('click', (event) => {
            const target = event.target;
            if (target.matches('.close_icon, .close-btn') || 
                    !target.closest('.form-wrapper')) {
                popup.removeAttribute('style');
            }
        });
    });
};

export default togglePopups;