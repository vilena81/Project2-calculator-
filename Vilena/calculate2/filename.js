window.addEventListener("load", function OnWidowLoaded() {
    let signs = [

        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', '00', '.', '/',
        '%', 'c', '='
    ]
    let calc = document.getElementById("calc");
    let output = document.getElementById("result");

    signs.forEach(function (sign) {
        let signElement = document.createElement("button");
        signElement.className = "btn";
        signElement.textContent = sign;
        calc.append(signElement);
    })

    const allBtns = document.getElementsByClassName("btn");
    allBtns[allBtns.length - 1].id = "equal";

    const allBtns1 = document.getElementsByClassName("btn");
    allBtns1[[allBtns.length - 1] - 1].id = "clear";


    document.querySelectorAll('#calc .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {
        // e - MouseEvent (содержит информацию о клике)
        if (e.target.textContent === 'c') {
            output.textContent = '0';

        } else if (e.target.textContent === '=') {
            // output.textContent = eval(output.textContent);
                let elements = output.textContent
            if (elements.includes("+")) {
                let elements = output.textContent.split('+');
                let num1 = parseFloat(elements[0]);
                let num2 = parseFloat(elements[1]);
                output.textContent = num1 + num2;
            }
            else if (elements.includes("-")) {
                let elements = output.textContent.split("-");
                let num1 = parseFloat(elements[0]);
                let num2 = parseFloat(elements[1]);
                output.textContent = num1 - num2;
            }
            else if (elements.includes("*")) {
                let elements = output.textContent.split('*');
                let num1 = parseFloat(elements[0]);
                let num2 = parseFloat(elements[1]);
                output.textContent = num1 * num2;
            }
            else if (elements.includes("/")) {
                let elements = output.textContent.split('/');
                let num1 = parseFloat(elements[0]);
                let num2 = parseFloat(elements[1]);
                output.textContent = num1 / num2;
            }

        }
        else if (output.textContent === '%') {
            // output.textContent = eval(persents(output.textContent))

            let elements = output.textContent.split('%');
            let num1 = parseFloat(elements[0]);
            let num2 = parseFloat(elements[1]);
            output.textContent = num1 * 100 / num2;
        }
        else if (output.textContent === '0') {
            output.textContent = e.target.textContent;

        } else {
            output.textContent += e.target.textContent;
        }
    }
});

