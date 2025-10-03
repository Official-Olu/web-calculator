const display = document.getElementById('calculator-display');
let currentInput = ''; // Tracks the current input
let previousInput = ''; // Tracks the previous input
let operator = ''; // Stores the operator chosen
const numButtons = document.querySelectorAll('.num');
let numBtnArr = Array.from(numButtons);
const keyOperators = document.querySelectorAll('.operator')
const equalSign = document.querySelector('.equal');
const clear = document.querySelector('.btn-clear');
const delButton = document.querySelector('.btn-delete');


function updateDisplay(value) {
    display.innerHTML = value;

};

clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerHTML = "0";
});


document.querySelectorAll('[data-value]').forEach(eachbtn => {
    eachbtn.addEventListener('click', () => {
        const value = eachbtn.getAttribute('data-value');


        if (value === '.' && currentInput.includes('.'))
            return;



        currentInput += value;
        updateDisplay(currentInput);

        function reduceFont() {
            let x = display.innerText.length;
            if (x > 11 && x < 22) {
                display.style.fontSize = "20px";
            } else if (x > 22) {
                display.style.fontSize = "10px";
            }
        };
        reduceFont();

    });
});

keyOperators.forEach(eachbtn => {
    eachbtn.addEventListener('click', () => {
        if (currentInput === '')
            return;

        if (previousInput !== '') {
            calculate();
        }

        operator = eachbtn.getAttribute('data-operator');
        previousInput = currentInput;
        currentInput = '';
    })
})


equalSign.addEventListener('click', calculate)

// To mathematical operations
function calculate() {
    if (previousInput === '' || currentInput === '')
        return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; // Handle divide by zero
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = (result === 'Error') ? result : result.toString();
    previousInput = '';
    operator = '';
    updateDisplay(currentInput);
}


delButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');

    function reduceFont() {
        let x = display.innerHTML.length;
        if (x > 11 && x <= 22) {
            display.style.fontSize = "20px";
        } else if (x > 22) {
            display.style.fontSize = "10px";
        } else if (x <= 11) {
            display.style.fontSize = "40px";
        }

    };
    reduceFont();
});

/* function calculate() {
    if (previousInput === '' || currentInput === '')
        return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay(currentInput);

} */