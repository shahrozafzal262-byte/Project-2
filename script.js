
let expression = "";
let buttons = document.querySelectorAll('.butten');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent.trim();

        if (value === '=') {
            try {
                expression = eval(expression);
                document.querySelector('input').value = expression;
            } catch (err) {
                document.querySelector('input').value = 'Error';
                expression = "";
            }
        } else if (value === 'C') {
            expression = "";
            document.querySelector('input').value = "";
        } else {
            expression += value;
            document.querySelector('input').value = expression;
        }
    });
});
