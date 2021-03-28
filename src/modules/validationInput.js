const validaionInput = () => {
    document.addEventListener('input', (event) => {
        const target = event.target;
        if (target.tagName !== 'INPUT') {
            return;
        }

        if (target.name === 'name') {
            target.value = target.value.replace(/[^а-яё]/gi, '');
        }
            
    });
};

export default validaionInput;