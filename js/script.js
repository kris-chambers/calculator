let aNum = 0;
let operator = "";
let bNum = 0;

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

function operate(aNum, operator, bNum) {
  switch (operator) {
    case "+":
      return add(aNum, bNum);
    case "-":
      return subtract(aNum, bNum);
    case "*":
      return multiply(aNum, bNum);
    case "/":
      return divide(aNum, bNum);
  }
}

const display = document.querySelector(".display");
const button9 = document.querySelector("#button9");
const button8 = document.querySelector("#button8");
const button7 = document.querySelector("#button7");
const button6 = document.querySelector("#button6");
const button5 = document.querySelector("#button5");
const button4 = document.querySelector("#button4");
const button3 = document.querySelector("#button3");
const button2 = document.querySelector("#button2");
const button1 = document.querySelector("#button1");
const button0 = document.querySelector("#button0");

const numButtons = document.querySelectorAll(".number-button");

const clearButton = document.querySelector("clear-button");
const divideButton = document.querySelector("divide-button");
const multiplyButton = document.querySelector("multiply-button");
const subtractButton = document.querySelector("subtract-button");
const addButton = document.querySelector("add-button");
const equalButton = document.querySelector("equal-button");

function addToDisplay(num) {
  display.textContent += num;
}

button9.addEventListener("click", () => {
  addToDisplay(9);
});

button8.addEventListener("click", () => {
  addToDisplay(8);
});

button7.addEventListener("click", () => {
  addToDisplay(7);
});

button6.addEventListener("click", () => {
  addToDisplay(6);
});

button5.addEventListener("click", () => {
  addToDisplay(5);
});

button4.addEventListener("click", () => {
  addToDisplay(4);
});

button3.addEventListener("click", () => {
  addToDisplay(3);
});

button2.addEventListener("click", () => {
  addToDisplay(2);
});

button1.addEventListener("click", () => {
  addToDisplay(1);
});

button0.addEventListener("click", () => {
  addToDisplay(0);
});