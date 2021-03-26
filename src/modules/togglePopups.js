const togglePopups = (errorPrefix = 'error-') => {
    document.body.addEventListener('click', (event) => {

        const target = event.target;

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

        popup.addEventListener('click', (event) => {
            const target = event.target;
            if (target.matches('.close_icon, .close-btn') || 
                    !target.closest('.form-wrapper')) {
                popup.removeAttribute('style');
                const errorBlock = popup.querySelector(`.${errorPrefix}message`);
                if (errorBlock) {
                    errorBlock.remove();
                }
                const errorInputs = popup.querySelectorAll(`.${errorPrefix}input`);
                console.log(errorInputs);
                errorInputs.forEach((item) => {
                    item.classList.remove(`${errorPrefix}input`);
                     if (!item.classList.length) {
                        item.removeAttribute('class');
                     }
                });

            }
        });
    });
};

export default togglePopups;