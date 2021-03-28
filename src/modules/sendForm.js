const sendForm = (prefixAdditionalClass = 'process-send') => {

    const errorMessage = '<span style="color: #ff1f1f;">Увы!<br />Что-то пошло не так...<br />Мы уже работаем над этой проблемой!</span>',
        loadMessage = '<span style="color: #cab5b5;">Загрузка...</span>',
        successMessage = '<span style="color: #21d639;">Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.</span>';

    const validaionInputs = (form) => {
        let errors = [];
        const classErrorInput = `${prefixAdditionalClass}-input__error`;
        let countRadio = 0,
            countChecked = 0;
        form.querySelectorAll('input').forEach ((item) => {
            let errorsLen = errors.length;
            if (item.name === 'name') {
                if (item.value.length === 0) {
                    errors.push('Имя не должно быть пустым!');
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
            if (item.type === 'radio') {
                countRadio++;
                if (item.checked) {
                    countChecked++;
                }
            }
            if (errorsLen !== errors.length) {
                item.classList.add(classErrorInput);
            } else if (item.classList.contains(classErrorInput)) {
                item.classList.remove(classErrorInput);
            }
        });
        if (countRadio > 0 && countChecked === 0) {
            errors.push('Выберите хотя бы один элемент!');
        }
        
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
    
    let validationResult = document.createElement('p'),
        statusMessage = document.createElement('p');
    
    document.body.addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;
        if (!form) {
            return;
        }

        const errors = validaionInputs(form);
        if (errors.length) {
            if (prefixAdditionalClass) {
                validationResult.className = `${prefixAdditionalClass}__error`;    
            }
            validationResult.innerHTML = errors.join('<br />');
            form.insertAdjacentElement('beforeend', validationResult);
            return;
        }
        validationResult.remove();

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        let targetResultSendMessage = form;
        let popup = form.closest('.popup');
        if (popup && (popup.id === 'callback_form' || popup.id === 'free_visit_form')) {
            targetResultSendMessage.textContent = '';
            targetResultSendMessage.insertAdjacentElement('beforeend', statusMessage);
        } else if (form.id === 'banner-form' || form.id === 'footer_form') {
            popup = document.getElementById('thanks');
            targetResultSendMessage = popup.querySelector('.form-content');
            statusMessage = targetResultSendMessage.querySelector('p');
            if (statusMessage) {
                statusMessage.textContent = '';
            }
            popup.style.display = 'block';
        } else {
            targetResultSendMessage.insertAdjacentElement('beforeend', statusMessage);
        }
        statusMessage.className = `${prefixAdditionalClass}__success`;
        statusMessage.innerHTML = loadMessage;

        
        let isChecked = false;
        form.querySelectorAll('input').forEach((item) => {
            item.value = '';
            if (item.type === 'radio' && !isChecked) {
                item.checked = true;
                isChecked = true;
            }
        });
        
        postData(body)
            .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Status network not 200!');
                    }
                    statusMessage.innerHTML = successMessage;
                })
            .catch((error) => {
                statusMessage.innerHTML = errorMessage;
                console.error(error);
            });
    });
};

export default sendForm;