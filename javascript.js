const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multipy');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const input = document.querySelector('#input');

function addition(a, b) {
  return a + b;
};

function subtraction(a, b) {
  return a - b;
};

function multiplication(a, b) {
  return a * b;
};

function division(a, b) {
  return a / b;
};

function operate(operator, a, b) {
  if (operator === "+") {
    addition(a, b);
  } else if (operator === "-") {
    subtraction(a, b);
  } else if (operator === "*") {
    multiplication(a, b);
  } else if (operator === "/") {
    division(a, b);
  }
};

one.addEventListener('click', () => {
  const input = document.querySelector('#input');
  input.value += 1;
};