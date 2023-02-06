

let cicons = [
{
     name: "AC",
     image: ""
},
{
  name: "**",
  image: ""
},
{
  name: "%",
  image: ""
},
{
name: "/",
image: ""
},
{
  name: "7",
  image: ""
},
{
name: "8",
image: ""
},
{
  name: "9",
  image: ""
},
{
name: "*",
image: ""
},
{
  name: "4",
  image: ""
},
{
name: "5",
image: ""
},
{
  name: "6",
  image: ""
},
{
name: "-",
image: ""
},
{
  name: "1",
  image: ""
},
{
name: "2",
image: ""
},
{
  name: "3",
  image: ""
},
{
name: "+",
image: ""
},
{
  name: "0",
  image: ""
},
{
name: "00",
image: ""
},
{
  name: ".",
  image: ""
  },
  {
    name: "=",
    image: ""
    }
]

const ptext = document.getElementById("print");
// ptext.textContent =""
calculelements(cicons)



// const numb0 = cicons[16].name
// const numb00 = cicons[17].name
// const numb1 = cicons[12].name
// const numb2 = cicons[13].name
// const numb3 = cicons[14].name
// const numb4 = cicons[8].name
// const numb5 = cicons[9].name
// const numb6 = cicons[10].name
// const numb7 = cicons[4].name
// const numb8 = cicons[5].name
// const numb9 = cicons[6].name
// const plus = cicons[15].name
// const minus = cicons[11].name
// const multi = cicons[7].name
// const divide = cicons[3].name
// const remove = cicons[0].name
// const armat = cicons[1].name
// const tokos = cicons[2].name
// const equals = cicons[19].name
// const point = cicons[18].name





function calculelements(arr){
  for(let i=0; i<arr.length; i++){
const newDiv = document.createElement("div")
const newBtn = document.createElement("button")
const btnsss = document.getElementById("buttonsblock");

const newh4 = document.createElement("h4");
const numtext = document.createTextNode(cicons[i].name);
newh4.appendChild(numtext)

const newImg = document.createElement("img")
newBtn.id = "button" + cicons[i].name
newImg.src = cicons[i].image 

newBtn.classList.add("btns")
newDiv.classList.add("smalldivs")
newImg.classList.add("imgcss")
newDiv.append(newImg, newBtn,newh4)
btnsss.appendChild(newDiv)


newBtn.addEventListener("click", function(){
  ptext.innerHTML = "fdfdf";
 });
}
}
console.log(button0)
console.log(button1)



// $('img').click(function() {
//   // Your button click event code here
// });