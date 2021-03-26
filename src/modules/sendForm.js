const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const validaionInputs = (form) => {
        let errors = [];
        form.querySelectorAll('input').forEach ((item) => {
            if (item.name === 'name') {
                if (item.value.length === 0) {
                    errors.push('Имя не должно быть пустым!');
                } else if (!/[/\sа-яё\-]/gi.test(item.value.trim())) {
                    errors.push('Имя может содержать русские буквы, пробелы и тире!');
                }
            }
            if (item.name === 'phone') {
                if (item.value.length === 0) {
                    errors.push('Телефон не должен быть пустым!');
                }
            }
            if (item.type === 'checkbox' && item.closest('p.personal-data')) {
                if (!item.checked) {
                    errors.push('Не дано согласие на обработку персональных данных!');
                }
            }
        });
        return errors;
    };

    const cssType1 = 'font-size: 2rem;',
        cssType2 = 'font-size: 1.5rem; color: white;',
        cssError = 'font-size: 1.5rem; color: red; text-shadow: 1px 1px 0.05em black;';

    const statusMessage = document.createElement('div');


    document.body.addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;
        if (!form) {
            return;
        }

        form.insertAdjacentElement('beforeend', statusMessage);

        const errors = validaionInputs(form);
        console.log(errors);

        if (errors.length) {
            statusMessage.style.cssText = cssError;
            statusMessage.innerHTML = errors.join('<br />');
            return;
        }
    });
};

export default sendForm;