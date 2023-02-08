let a = '';//առաջին թիվը
let b = '';//երկրորդ թիվը
let sign = '';// մաթ. գործողության նշանը
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/','%'];
//հաշվիչի էկրանը
const out = document.querySelector('.calc-screen p');
function clearAll() {
    a='';
    b='';
    sign='';
    finish = false;
    out.textContent = 0;
}
//ակտիվանում է աց կոճակը
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    //երբ սեղմում ենք կոճակների արանքում
    if(!event.target.classList.contains('btn')) return;
    // սեղմում ենք աց կոճակը
    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    //ստանում ենք սեղմված կոճակը
    const key = event.target.textContent;
    //սեղմված է 0-9 կամ .-ը
    if(digit.includes(key)){
        if (b==='' && sign===''){
        a+=key;
       out.textContent = a;
        }
        else if (a!=='' && b!==''&& finish){
            b=key;
            finish=false;
            out.textContent=b;
         }
        else{
            b+=key;
            out.textContent=b;
        }
        console.log(a, b, sign);
        return;
    }
 //սեղմված է գործողության նշանը
    if(action.includes(key)){
        sign=key;
        out.textContent=sign;
        console.log(a, b, sign);
        return;
    }
 //երբ սեղմված է հավասարը
    if (key === '='){
        switch (sign){
         case"+":
            a=(+a)+(+b);
            break;
         case"-":
            a=a-b;
         case"x":
            a=a*b;
            break;
         case"/":
         if(b==='0'){
            out.textContent = 'Error';
            a='';
            b='';
            sign='';
            return;
         }
            a=a/b;
            break;
         case "%":
            a=a*b/100;
            break;

        }
        finish=true;
        out.textContent=a;
        console.log(a, b, sign);
    }
}
