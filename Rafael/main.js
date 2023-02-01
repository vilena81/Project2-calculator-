function calculate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
      case "^":
        return Math.pow(num1, num2);
        break;
      case "%":
        return num1 % num2;
        break;
      case "sqrt":
        return Math.sqrt(num1);
        break;
      case "cbrt":
        return Math.cbrt(num1);
        break;
      case "log":
        return Math.log(num1);
        break;
      case "ln":
        return Math.log(num1);
        break;
      case "exp":
        return Math.exp(num1);
        break;
      case "abs":
        return Math.abs(num1);
        break;
      case "round":
        return Math.round(num1);
        break;
      case "ceil":
        return Math.ceil(num1);
        break;
      case "floor":
        return Math.floor(num1);
        break;
      case "sin":
        return Math.sin(num1);
        break;
      case "cos":
        return Math.cos(num1);
        break;
      case "tan":
        return Math.tan(num1);
        break;
      default:
        return "Invalid operator";
    }
  }
  
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number (optional):"));
  const operator = prompt("Enter operator (+, -, *, /, ^, %, sqrt, cbrt, log, ln, exp, abs, round, ceil, floor, sin, cos, tan):");
  
  let result;
  if (operator === "sqrt" || operator === "cbrt" || operator === "log" || operator === "ln" || operator === "exp" || operator === "abs" || operator === "round" || operator === "ceil" || operator === "floor" || operator === "sin" || operator === "cos" || operator === "tan") {
    result = calculate(operator, num1);
  } else {
    result = calculate(operator, num1, num2);
  }
  
  alert("Result: " + result);