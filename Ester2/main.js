
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
  {value: '+', id: 'add'},
  {value: '00', id: 'double-zero'},
  {value: '0', id: 'zero'},
  {value: '=', id: 'equals'}
];

let calculator = document.querySelector('.calculator');
let result = document.getElementById("result");

let Calculate = (number) => {
    result.value += number;
};

let Result = () => {
    result.value = eval(result.value);
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





 








