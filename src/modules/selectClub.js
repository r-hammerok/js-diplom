const selectClub = () => {
    const clubsList = document.querySelector('.clubs-list');
    clubsList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'P') {
            const ul = clubsList.querySelector('ul');
            if (getComputedStyle(ul).display === 'none') {
                ul.style.display = 'block';
            } else {
                ul.removeAttribute('style');
            }
        }
    });
};

export default selectClub;