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

console.log(add(1,3));
console.log(subtract(1,3));
console.log(multiply(1,3));
console.log(divide(1, 3));

console.log(operate(1, "+", 4))
console.log(operate(1, "-", 4))
console.log(operate(1, "*", 4))
console.log(operate(1, "/", 4))