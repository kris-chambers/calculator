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
const times = document.querySelector('#times');
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
function numberButtons(num) {
  if (!usedOperator) {
    firstNumber.push(num);
    equationArray.push(num);
    displayA(firstNumber);
    displayEquation(equationArray);
    input.setAttribute("value", equation);
  } else if (usedOperator) {
    secondNumber.push(num);
    equationArray.push(num);
    displayB(secondNumber);
    displayEquation(equationArray);
    input.setAttribute("value", equation);
  }
}

one.addEventListener('click', () => {
  numberButtons(1);
});

two.addEventListener('click', () => {
  numberButtons(2);
});

three.addEventListener('click', () => {
  numberButtons(3);
});

four.addEventListener('click', () => {
  numberButtons(4);
});

five.addEventListener('click', () => {
  numberButtons(5);
});

six.addEventListener('click', () => {
  numberButtons(6);
});

seven.addEventListener('click', () => {
  numberButtons(7);
});

eight.addEventListener('click', () => {
  numberButtons(8);
});

nine.addEventListener('click', () => {
  numberButtons(9);
});

zero.addEventListener('click', () => {
  numberButtons(0);
});

// Event listeners for operator buttons
function operatorButton(oper) {
  usedOperator = true;
  operator = oper;
  equationArray.push(oper);
  displayEquation(equationArray);
  input.setAttribute("value", equation);
}

plus.addEventListener('click', () => {
  operatorButton("+");
});

minus.addEventListener('click', () => {
  operatorButton("-");
});

times.addEventListener('click', () => {
  operatorButton("*");
});

divide.addEventListener('click', () => {
  operatorButton("/");
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
