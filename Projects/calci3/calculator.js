/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
    this.expression = '';
  }

  add(number) {
    return (this.result = this.result + number);
  }

  subtract(number) {
    return (this.result = this.result - number);
  }

  multiply(number) {
    return (this.result = this.result * number);
  }

  divide(number) {
    if (number == 0) {
      throw new Error("Divide by zero is not allowed!");
    }
    return (this.result = this.result / number);
  }

  clear() {
    this.result = 0;
    this.expression = '';
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, "");
    if (/[^0-9+\-*/().]/.test(sanitizedExpression)) {
      throw new Error("Invalid non-numerical characters!");
    }
    if (/\/0(?![0-9])/.test(sanitizedExpression)) {
      throw new Error("Divide by zero is not allowed!");
    }
    try {
      this.result = eval(sanitizedExpression);
      return this.result;
    } catch {
      throw new Error("Invalid expression!");
    }
  }
}

const calculator = new Calculator();

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function deleteLastCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    const result = calculator.calculate(display.value);
    display.value = result;
  } catch (error) {
    display.value = error.message;
  }
}
