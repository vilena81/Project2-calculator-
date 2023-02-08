const buttonsDiv = document.getElementById("buttons");
const displayDiv = document.getElementById("display");

let num1 = ""
let num2 = ""
let result = 0
let operator = ""
displayDiv.textContent = result

const operationsArr = ["+","-","*","/","^","%","sqrt","log","sin","cos","="]
const digitsArr = ["7","8","9","4","5","6","1","2","3","0"]

for(let i = 0; i < digitsArr.length; i++) {
    let number = document.createElement("button")
    number.textContent = digitsArr[i]
    number.className = "number"
    buttonsDiv.appendChild(number)
    number.addEventListener("click" , () => {
        if (num1.length < 18) {
            num1 += number.textContent
            displayDiv.textContent = num1
        }})}

document.addEventListener("keypress" , (el) => {
    if (num1.length < 18 && digitsArr.includes(el.key)) {
        num1 += el.key
        displayDiv.textContent = num1
    }})

    for(let i = 0; i < operationsArr.length; i++) {
      let button = document.createElement("button");
      button.textContent = operationsArr[i];
      button.className = "button";
      buttonsDiv.appendChild(button);
      if (button.textContent === "=") {
        button.addEventListener("click", () => {
          if (operator) {
            num2 = Number(num1);
            result = calculate(operator, num1, num2);
            displayDiv.textContent = result;
          }
        });
      } else {
        button.addEventListener("click", () => {
          if (operator) {
            num2 = Number(num1);
            num1 = result;
            result = calculate(operator, num1, num2);
            displayDiv.textContent = result;
            operator = "";
            num1 = result;
            num2 = "";
          } else {
            num1 = Number(num1);
            operator = button.textContent;
          }
        });
      }
    }

function calculate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "^":
        return Math.pow(num1, num2);
      case "%":
        return num1 % num2;
      case "sqrt":
        return Math.sqrt(num1);
      case "log":
        return Math.log(num1);
      case "sin":
        return Math.sin(num1);
      case "cos":
        return Math.cos(num1);
      default:
        // return "Invalid operator";
    }
  }
