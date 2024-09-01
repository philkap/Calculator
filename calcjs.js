let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = '';
const display = document.getElementById('display');

// Add event listeners to the buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.hasAttribute('data-number')) {
            handleNumber(button.getAttribute('data-number'));
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.getAttribute('data-operator'));
        } else if (button.hasAttribute('data-clear')) {
            clearCalculator();
        }
    });
});

// Handle number inputs
function handleNumber(number) {
    if (currentOperator === '') {
        // If no operator has been selected, update the first number
        firstNumber += number;
        display.textContent = firstNumber;
    } else {
        // If an operator has been selected, update the second number
        secondNumber += number;
        display.textContent = secondNumber;
    }
}

// Handle operator inputs
function handleOperator(operator) {
    if (operator === '=') {
        // When the equals button is pressed, calculate the result
        if (firstNumber !== '' && currentOperator !== '' && secondNumber !== '') {
            result = operate(currentOperator, firstNumber, secondNumber);
            display.textContent = result;
            // After calculation, use the result as the first number for further operations
            firstNumber = result;
            secondNumber = '';
            currentOperator = '';
        }
    } else {
        // If an operator button is pressed, set the current operator
        if (firstNumber !== '' && secondNumber === '') {
            currentOperator = operator;
            display.textContent = currentOperator;  // Optional: Display the operator temporarily
        } else if (firstNumber !== '' && secondNumber !== '') {
            // If both numbers are already set, calculate the result first
            result = operate(currentOperator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
            secondNumber = '';
            currentOperator = operator;
        }
    }
}

// Function to clear the calculator
function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    result = '';
    display.textContent = '0';
}

// Function to perform the operations
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}

// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error"; // Handle division by zero
    }
    return a / b;
}

