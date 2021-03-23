const togglePopups = () => {
    document.body.addEventListener('click', (event) => {
        const idPopup = event.target.dataset.popup;
        if (!idPopup) {
            return;
        }
        event.preventDefault();
        const popup = document.querySelector(idPopup);
        popup.style.display = 'block';

        popup.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('close_icon') || 
                    !target.closest('.form-wrapper')) {
                popup.removeAttribute('style');
            }
        });
    });
};

export default togglePopups;