let firstValue;
let secondDisplayValue;
let operatorValue;
let result;

function add(num1, num2) {
    const result = num1 + num2; 
    return result;
}

function substract(num1, num2) {
    const result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    const result = num1 / num2;
    return result;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        
        case "-":
            return substract(number1, number2);
        
        case "*":
            return multiply(number1, number2);

        case "/":
            return divide(number1, number2);
    
        default:
            alert("Whoops, something happened.");
            break;
    }
}

function populateDisplay(number) {
    document.getElementById("display").textContent += number;
} 

function onNumberClick(number) {
    if (result != undefined) {
        firstValue = result;
        result = undefined;
        clearDisplay();
    }
    populateDisplay(number);

}

function onOperatorClick(operator) {
    if (operatorValue === undefined) {
        firstValue = document.getElementById("display").textContent;
        clearDisplay();
    } else {
        onEqualClick();
    }
    operatorValue = operator;
}

function clearDisplay() {
    document.getElementById("display").textContent = "";
}

function clearDisplayButton() {
    document.getElementById("display").textContent = "";
    firstValue = undefined;
    secondDisplayValue = undefined;
    operatorValue = undefined;
    result = undefined;
}

// function deleteLastDigit {
    
// }

function onEqualClick() {
    secondDisplayValue = document.getElementById("display").textContent;
    if (operatorValue === "/" && secondDisplayValue === 0) {
        alert("Dividing by zero is not possible!");
    } else {
    result = Math.ceil(operate(operatorValue, parseInt(firstValue), parseInt(secondDisplayValue)) * 10000) / 10000;
    clearDisplay();
    populateDisplay(result);
    }
}