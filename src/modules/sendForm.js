const sendForm = (prefixAdditionalClass = 'process-send') => {

    const errorMessage = '<span style="color: #ff1f1f;">Что-то пошло не так...</span>',
        loadMessage = '<span style="color: #cab5b5;">Загрузка...</span>',
        successMessage = '<span style="color: #21d639;">Спасибо! Мы скоро с вами свяжемся!</span>';

    const validaionInputs = (form) => {
        let errors = [];
        const classErrorInput = `${prefixAdditionalClass}-input__error`;
        form.querySelectorAll('input').forEach ((item) => {
            let errorsLen = errors.length;
            if (item.name === 'name') {
                if (item.value.length === 0) {
                    errors.push('Имя не должно быть пустым!');
                } else if (!/[/\sа-яё\-]/gi.test(item.value.trim())) {
                    errors.push('Имя должно содержать только русские буквы, пробелы или тире!');
                }
            }
            if (item.name === 'phone') {
                if (item.value.length !== 18) {
                    errors.push('Телефон должен быть в формате +7(xxx)xxx-xx-xx!');
                }
            }
            if (item.type === 'checkbox' && item.closest('p.personal-data')) {
                if (!item.checked) {
                    errors.push('Не дано согласие на обработку персональных данных!');
                }
            }
            if (errorsLen !== errors.length) {
                item.classList.add(classErrorInput);
            } else if (item.classList.contains(classErrorInput)) {
                item.classList.remove(classErrorInput);
            }
        });
        return errors;
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    };
    
    const statusMessage = document.createElement('p');
    
    document.body.addEventListener('submit', (event) => {
        event.preventDefault();

        
        const form = event.target;

        if (!form) {
            return;
        }

        form.insertAdjacentElement('beforeend', statusMessage);

        const errors = validaionInputs(form);

        if (errors.length) {
            if (prefixAdditionalClass) {
                statusMessage.className = `${prefixAdditionalClass}__error`;    
            }
            statusMessage.innerHTML = errors.join('<br />');
            return;
        }
        statusMessage.className = `${prefixAdditionalClass}__success`;
        
        if (form.closest('.popup')) {
            form.textContent = '';
            form.insertAdjacentElement('beforeend', statusMessage);
        }
        
        statusMessage.innerHTML = loadMessage;

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        postData(body)
            .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Status network not 200!');
                    }

                    statusMessage.innerHTML = successMessage;

                    form.querySelectorAll('input').forEach((item) => {
                        item.checked = false;
                        item.value = '';
                    });
                    // setTimeout(() => {
                    //     statusMessage.remove();
                    // }, 3000);
                    // if (targetId === 'form3') {
                    //     const eventClick = new Event("click");
                    //     const popup = document.querySelector('.popup');
                    //     setTimeout(() => {
                    //         popup.dispatchEvent(eventClick);
                    //     }, 1000);
                    // }
                })
            .catch((error) => {
                statusMessage.innerHTML = errorMessage;
                console.error(error);
            });
    });
};

export default sendForm;