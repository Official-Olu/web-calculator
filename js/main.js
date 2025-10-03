const display = document.getElementById('screen')
const buttons = document.querySelector('.btn');
const clear = document.querySelector('.btn-clear');
const equalSign = document.querySelector('.btn-equal');
const delButton = document.querySelector('.btn-delete');
const numButtons = document.querySelectorAll('.num');
let numBtnArr = Array.from(numButtons);
const keyOperators = document.querySelectorAll('.operator')


let currentInput = '';  // Tracks the current input
let previousInput = '';  // Tracks the previous input
let operator = '';  // Stores the operator chosen

numBtnArr.forEach(function(eachBtn){
    eachBtn.addEventListener('click', function(){
        display.value += this.innerHTML;
        function reduceFont() {
            let x = display.value.length;
            if (x > 11 && x < 22) {
                display.style.fontSize = "20px";
            } else if (x > 22) {
                display.style.fontSize = "10px";
            }
            
        };
        reduceFont();
    })
});


clear.addEventListener('click', function(){
    display.value = "";
});


keyOperators.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '')
            return;
        if(previousInput !== ''){
            calculate();
        }
        previousInput = currentInput;
        currentInput = '';
        
    })
    console.log(currentInput);
});


// Handle operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return;  // Ignore operator if no input

        if (previousInput !== '') {
            calculate();  // If there's already a previous input, calculate first
        }

        operator = button.getAttribute('data-operator');
        previousInput = currentInput;
        currentInput = '';
    });
});

delButton.addEventListener('click', () => {
    display.value = display.value.slice(0,-1);
    function reduceFont() {
        let x = display.value.length;
        if (x > 11 && x <= 22) {
            display.style.fontSize = "20px";
        } else if (x > 22) {
            display.style.fontSize = "10px";
        } else if(x <= 11) {
            display.style.fontSize = "40px";
        }
        
    };
    reduceFont();
});





















/* delButton.addEventListener('click', () => {
    let currentValue = display.value;
    let updatedVal = currentValue.slice(0, currentValue.length - 1);
    display.value = updatedVal; 
}); */































