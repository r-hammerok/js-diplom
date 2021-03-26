const calcCards = () => {
    const calcForm = document.getElementById('card_order'),
        totalValue = document.getElementById('price-total');

    const price = {
        'schelkovo': {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19900
        },
        'mozaika': {
            '1': 2999,
            '6': 14990,
            '9': 21990,
            '12': 24990
        }
    };

    const getCheckedElement = (className) => {
        const elements = calcForm.querySelectorAll(`.${className} input[type="radio"]`);
        let returnValue = '';
        elements.forEach((item) => {
            if (item.checked) {
                returnValue = item.defaultValue;
            }
        });
        return returnValue;
    };

    const countSum = () => {
        let total = 0;
        const clubName = getCheckedElement('club');
        const timeCard = getCheckedElement('time');
        total = price[clubName][timeCard];
        totalValue.textContent = total;
    };

    calcForm.addEventListener('input', (event) => {
        countSum();
    });

    countSum();

};

export default calcCards;

