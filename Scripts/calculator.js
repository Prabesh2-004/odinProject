const calNumber = document.querySelectorAll('.number');
const calOperator = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equalTo = document.querySelector('.equalTo');
const clearall = document.querySelector('.clearAll');
const backSpaceBtn = document.querySelector('.clear');

let numbers = "";

// Handle number button clicks
calNumber.forEach(calNumbers => {
    calNumbers.addEventListener('click', function() {
        numbers += this.innerHTML;
        display.innerHTML = numbers;
    });
});

// Handle operator button clicks
calOperator.forEach(calOperators => {
    calOperators.addEventListener('click', function() {
        numbers += this.innerHTML;
        display.innerHTML = numbers;
    });
});

// Handle "=" button click
equalTo.addEventListener('click', function() {
    try {
        numbers = eval(numbers); // Replace with a safer evaluation function if needed
        display.innerHTML = numbers;
    } catch (error) {
        display.innerHTML = "Error";
        numbers = "";
    }
});

// Handle "C" button click (clear all)
clearall.addEventListener('click', function() {
    display.innerHTML = "";
    numbers = "";
});

// Handle "Backspace" button click
backSpaceBtn.addEventListener('click', function() {
    numbers = numbers.slice(0, -1);
    display.innerHTML = numbers;
});

// Handle global keydown events
document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
        // Handle number keys
        numbers += event.key;
        display.innerHTML = numbers;
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        // Handle operator keys
        numbers += event.key;
        display.innerHTML = numbers;
    } else if (event.key === 'Enter') {
        // Handle "Enter" key
        try {
            numbers = eval(numbers); // Replace with a safer evaluation function if needed
            display.innerHTML = numbers;
        } catch (error) {
            display.innerHTML = "Error";
            numbers = "";
        }
    } else if (event.key === 'Backspace') {
        // Handle "Backspace" key
        numbers = numbers.slice(0, -1);
        display.innerHTML = numbers;
    } else if (event.key === 'Escape') {
        // Handle "Escape" key (clear all)
        display.innerHTML = "";
        numbers = "";
    }
});


