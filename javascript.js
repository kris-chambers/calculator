// Variables for inputs and operators
let firstNumber = [];
let secondNumber = [];
let a = "";
let b = "";
let answer = "";
let operator = "";
let usedOperator = false;
let equationArray = [];
let equation = "";

// Variables for buttons
const one = document.getElementById('one');
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

// Functions for each operation
function addition(a, b) {
  answer = a + b;
};

function subtraction(a, b) {
  answer = a - b;
};

function multiplication(a, b) {
  answer = a * b;
};

function division(a, b) {
  answer = a / b;
};

// Function that combines operator functions
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

// Event listeners for number buttons
one.addEventListener('click', () => {
  if (!usedOperator) {
    firstNumber.push(1);
    equationArray.push(1);
    displayA(firstNumber);
    displayEquation(equationArray);
    input.setAttribute("value", equation);
  } else if (usedOperator) {
    secondNumber.push(1);
    equationArray.push(1);
    displayB(secondNumber);
    displayEquation(equationArray);
    input.setAttribute("value", equation);
  }
});

two.addEventListener('click', () => {
  if (!usedOperator) {
    firstNumber.push(2);
    displayA(firstNumber);
    input.setAttribute("value", a);
  } else if (usedOperator) {
    secondNumber.push(2);
    displayB(secondNumber);
    input.setAttribute("value", b);
  }
});

// Event listeners for operator buttons
plus.addEventListener('click', () => {
  usedOperator = true;
  operator = "+";
  equationArray.push("+");
  displayEquation(equationArray);
  input.setAttribute("value", equation);
});

// Event listener for equal button
equal.addEventListener('click', () => {
  if (usedOperator) {
    operate(operator, a, b);
    equationArray.push("=");
    equationArray.push(answer);
    displayEquation(equationArray);
    input.setAttribute("value", equation);
    firstNumber[0] = answer;
    secondNumber = [];
    a = answer;
    b = "";
    operator = "";
    equationArray = [];
    equationArray[0] = answer;
    equation = answer;
    usedOperator = false;
  }
})

//Event listener for clear button
clear.addEventListener('click', () => {
  firstNumber = [];
  secondNumber = [];
  a = "";
  b = "";
  answer = "";
  operator = "";
  usedOperator = false;
  equationArray = [];
  equation = "";
  input.setAttribute("value", "0");
});

// Functions to convert array to an integer
function displayA(array) {
  for (let i = 0; i < array.length; i++) {
    a = parseInt(array.join(""));
  }
}

function displayB(array) {
  for (let i = 0; i < array.length; i++) {
    b = parseInt(array.join(""));
  }
}

function displayEquation(array) {
  for (let i = 0; i < array.length; i++) {
    equation = array.join("");
  }
}