class Calculator {
    constructor(currentOperandAndTextElement, previousOperandAndTextElement) {
        this.currentOperandAndTextElement = currentOperandAndTextElement;
        this.previousOperandAndTextElement = previousOperandAndTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    
    delete(){

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    updateDisplay(){
        this.currentOperandAndTextElement.innerText = this.currentOperand;
        this.previousOperandAndTextElement.innerText = this.previousOperand;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandAndTextElement = document.querySelector('[data-previous-operand]');
const currentOperandAndTextElement = document.querySelector('[data-current-operand]');



const calculator = new Calculator(previousOperandAndTextElement, currentOperandAndTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})