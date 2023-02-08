
let buttons = [
  {value: 'AC', id: 'clear'},
  {value: 'del', id: 'delete'},
  {value: '.', id: 'dot'},
  {value: '/', id: 'divide'},
  {value: '7', id: 'seven'},
  {value: '8', id: 'eight'},
  {value: '9', id: 'nine'},
  {value: '*', id: 'multiply'},
  {value: '4', id: 'four'},
  {value: '5', id: 'five'},
  {value: '6', id: 'six'},
  {value: '-', id: 'subtract'},
  {value: '1', id: 'one'},
  {value: '2', id: 'two'},
  {value: '3', id: 'three'},
  {value: '+', id: 'add operator'},
  {value: '00', id: 'double-zero'},
  {value: '0', id: 'zero'},
  {value: '=', id: 'equals'}
];

let calculator = document.querySelector('.calculator');
let result = document.getElementById("result");

let Calculate = (number) => {
    result.value += number;
};

//let Result = () => {
    /*let elements = result.value.split('+');
    let num1 = parseInt(elements[0]);
    let num2 = parseInt(elements[1]);
    let sum = num1 + num2;
    console.log(num1,num2,sum)
    //result.value = eval(result.value);
    result.value=sum*/
//}
/*let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {*/




let Result = () => {
    console.log(result.value)
   // result.value = eval(result.value);
   
//let operator = document.getElementById("operator").value;
console.log(result.value)
  if (result.value.includes('+')) {
    let elements = result.value.split('+');
    let num1 = parseFloat(elements[0]);
    let num2 = parseFloat(elements[1]);
    let sum = num1 + num2;
    result.value = sum;
  } else if(result.value.includes('-')) {
    let elements = result.value.split('-');
    let num1 = parseFloat(elements[0]);
    let num2 = parseFloat(elements[1]);
    let difference = num1 - num2;
    result.value = difference;
  } else if (result.value.includes('*')) {
    let elements = result.value.split('*');
    let num1 = parseFloat(elements[0]);
    let num2 = parseFloat(elements[1]);
    let product = num1 * num2;
    result.value = product;
  } else if (result.value.includes('/')) {
    let elements = result.value.split('/');
    let num1 = parseFloat(elements[0]);
    let num2 = parseFloat(elements[1]);
    let quotient = num1 / num2;
    result.value = quotient;
  }

};
    
function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.toString().slice(0, -1);
}

buttons.forEach(button => {
  let btn = document.createElement('button');
  btn.innerText = button.value;
  btn.id = button.id;
  btn.addEventListener('click', function() {
    if (button.value === 'AC') {
      clr();
    } else if (button.value === 'del') {
      del();
    } else if (button.value === '=') {
      Result();
    } else {
      Calculate(button.value);
    }
  });
  calculator.appendChild(btn);
});





 








