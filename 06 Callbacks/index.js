// callback is a function passed as a argument to another function which executes the callback when requires
// It is helpful to write generic code which helps to achieve customizable behaviour and asynchronous operations


// callbacks
function calculate(firstValue, secondValue, arthimeticFn) {
  // arthimeticFn is a function passing as an argument
  return arthimeticFn(firstValue, secondValue);
}

function sum(firstValue, secondValue) {
  return firstValue + secondValue;
}

function subtract(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
  return firstValue / secondValue;
}


// Function calling with another function as an argument
console.log(calculate(4, 5, sum)); 
console.log(calculate(4, 5, subtract));
console.log(calculate(4, 5, multiply));
console.log(calculate(4, 5, divide));
