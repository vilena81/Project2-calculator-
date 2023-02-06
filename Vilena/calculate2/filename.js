const calc = document.querySelector(".calc");
calc.addEventListener("click", function (event) {
    
    // console.log(event.target)
    let value = event.target.innerText;

    switch (value) {
        case "C":
            result.innerText = "";
            break;

        case "=":
            if(result.innerText.search(/[^0-9*/+-]/mi)!=-1)return;

            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;

    }

});