

let cicons = [
{
     name: 0,
     image: ""
},
{
  name: 1,
  image: ""
},
{
  name: 2,
  image: ""
},
{
name: 3,
image: ""
},
{
  name: 4,
  image: ""
},
{
name: 5,
image: ""
},
{
  name: 6,
  image: ""
},
{
name: 7,
image: ""
},
{
  name: 8,
  image: ""
},
{
name: 9,
image: ""
},
{
  name: "+",
  image: ""
},
{
name: "-",
image: ""
},
{
  name: "*",
  image: ""
},
{
name: "/",
image: ""
},
{
  name: "%",
  image: ""
},
{
name: "**",
image: ""
},
{
  name: "=",
  image: ""
},
{
name: "AC",
image: ""
},
{
  name: "-",
  image: ""
  }
]

calculelements(cicons)

function calculelements(arr){
  for(let i=0; i<arr.length; i++){
const newDiv = document.createElement("div")
const newBtn = document.createElement("button")
const printtt = document.getElementById
("buttonsblock");

const newImg = document.createElement("img")
newImg.src = cicons[i].image 
newDiv.classList.add("smalldivs")
newImg.classList.add("imgcss")
newDiv.append(newImg, newBtn)
printtt.appendChild(newDiv)
}
}

// $('img').click(function() {
//   // Your button click event code here
// });