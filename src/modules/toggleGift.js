const toggleGift = () => {
    const gift = document.querySelector('.fixed-gift');
    gift.addEventListener('click', () => {
        const popup = document.getElementById('gift');
        popup.style.display = 'block';
        gift.style.display = 'none';

        popup.addEventListener('click', (event) => {
            const target = event.target;
            if (target.matches('.close_icon, .close-btn') ||
                  !target.closest('.form-wrapper')) {
                popup.removeAttribute('style');
            }
        });
    });

};

export default toggleGift;