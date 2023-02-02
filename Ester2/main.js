let result=document.getElementById("foo")
let Calculat=(number)=>{
    result.value+=number;
}
let Result=()=>{
try{
    result.value=eval(result.value)
    }
catch(err){
    alert("enter valid input")
}
}
function clr(){
    result.value='';
}
function del(){
    result.value =result.value.toString().slice(0,-1);
} 