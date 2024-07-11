document.addEventListener('DOMContentLoaded', () => {
    const inputContainer = document.getElementById('inputContainer');
    const addInputBtn = document.getElementById('addInput');
    const removeInputBtn = document.getElementById('removeInput');
    const form = document.getElementById('dynamicForm');

    addInputBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.className = 'input-container';
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'dynamicInput';
        input.placeholder = 'Introduzca un dato'
        div.appendChild(input);
        inputContainer.appendChild(div);
    });

    removeInputBtn.addEventListener('click', () => {
        if (inputContainer.children.length > 0) {
            inputContainer.removeChild(inputContainer.lastChild);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        const inputs = inputContainer.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.classList.add('error');
                input.focus();
            } else {
                input.classList.remove('error');
            }
        });
        if (valid) {
            alert('Formulario enviado con éxito!');
            form.reset();
            inputContainer.innerHTML = '';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});