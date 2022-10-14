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