
class Calculator {
  constructor(uprowTextElement, downrowTextElement) {
    this.uprowTextElement = uprowTextElement;
    this.downrowTextElement = downrowTextElement;
    this.clear()
  }
  clear (){
    this.downrow = ""
    this.uprow = ""
    
    this.operation = undefined;

  }

  delete(){
      this.downrow = this.downrow.toString().slice(0, -1)
  }

  addnumber(number){
    // verabervum e ketin , asume enq ete numbri arjeqy . e ev ayn ekrani vra ka, funkcian avartir
    if(number === "." &&  this.downrow.includes(".")){
      return
    }
    // ekranin tpvac tivy ev hajor tpvox tivy string enq sarqum vor irar koxq mnan (chgumarven)
    this.downrow = this.downrow.toString() + number.toString()
  }
  chooseOperation(operation){
    if(this.downrow === ""){
      return
    }
    if(this.uprow !== ""){
      this.compute_hash()
    }
    this.operation = operation
    this.uprow = this.downrow
    this.downrow = ''
    
  }
  compute_hash(){
    let computation
    //parseFloat-i mijocov vercnum enq string numberY ev sarqum enq number
    const uprow = parseFloat(this.uprow);
    const downrow = parseFloat(this.downrow);
    if(isNaN(uprow) || isNaN(downrow)){
      return
    }
    switch(this.operation){
      case "+":
        computation = uprow + downrow
        break;
      case "-":
          computation = uprow - downrow
          break;  
      case "*":
          computation = uprow * downrow
          break;
      case "÷":
          computation = uprow / downrow
          break;
      default:
        return
    }
    this.downrow = computation
    this.operation = undefined
    this.uprow = ""

  }
  updateDisplay(){
    this.downrowTextElement.innerText = this.downrow
    this.uprowTextElement.innerText = this.uprow
  }


}





const numberbtn = document.querySelectorAll('[data-numbers]');
const operationbtn = document.querySelectorAll('[data-operation]');
const deletebtn = document.querySelector('[data-delete]');
const equalbtn = document.querySelector('[data-equals]');
const clearbtn = document.querySelector('[data-all-clear]');
const uprowTextElement = document.querySelector('[data-previous-operand]');
const downrowTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator (uprowTextElement , downrowTextElement);

numberbtn.forEach(button => { 
  button.addEventListener( 'click' , () => {
    calculator.addnumber(button.innerText)
    calculator.updateDisplay()
  })
})


operationbtn.forEach(button => { 
  button.addEventListener( 'click' , () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalbtn.addEventListener( 'click', button => { 
  calculator.compute_hash()
  calculator.updateDisplay()
})

clearbtn.addEventListener( 'click', button => { 
  calculator.clear()
  calculator.updateDisplay()
})

deletebtn.addEventListener( 'click', button => { 
  calculator.delete()
  calculator.updateDisplay()
})


