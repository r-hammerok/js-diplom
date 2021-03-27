const togglePopups = () => {
    document.body.addEventListener('click', (event) => {

        const target = event.target;

        if (target.matches('.close_icon, .close-btn') || 
                    !target.closest('.form-wrapper') && target.closest('.popup')) {
            target.closest('.popup').removeAttribute('style');
        }

        let idPopup;

        if (target.closest('.fixed-gift')) {
            idPopup = '#gift';
            target.closest('.fixed-gift').style.display = 'none';
        } else {
            idPopup = target.dataset.popup;
            if (!idPopup) {
                return;
            }
            event.preventDefault();
        }

        const popup = document.querySelector(idPopup);
        popup.style.display = 'block';

        // popup.addEventListener('click', (event) => {
        //     const target = event.target;
        //     if (target.matches('.close_icon, .close-btn') || 
        //             !target.closest('.form-wrapper')) {
        //         popup.removeAttribute('style');
        //     }
        // });
    });


};

export default togglePopups;