
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


 








