let firstDisplayValue;
let operatorValue;

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
            alert("Not an operator");
            break;
    }
}

function populateDisplay(numbers) {
    document.getElementById("display").textContent += numbers;
}

function onOperatorClick(operator) {
    firstDisplayValue = document.getElementById("display").textContent;
    operatorValue = operator;
    clearDisplay();
}

function clearDisplay() {
    document.getElementById("display").textContent = "";
}

function onEqualClick() {
    const secondDisplayValue = document.getElementById("display").textContent;
    const result = operate(operatorValue, parseInt(firstDisplayValue), parseInt(secondDisplayValue));
    clearDisplay();
    populateDisplay(result);
}