// Define your Calculator class
class Calculator {
    constructor() {
      this.result = 0;
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
  
  // Initialize the calculator object
  const calc = new Calculator();
  
  function evaluateExpression() {
    const expressionInput = document.getElementById("expression");
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
  
    try {
      const expression = expressionInput.value;
      const result = calc.calculate(expression);
      resultElement.textContent = `Result: ${result}`;
      errorElement.textContent = ""; // Clear previous errors
    } catch (error) {
      resultElement.textContent = ""; // Clear previous result
      errorElement.textContent = error.message;
    }
  }
  
  function clearExpression() {
    const expressionInput = document.getElementById("expression");
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
  
    expressionInput.value = "";
    resultElement.textContent = "";
    errorElement.textContent = "";
  }
  
