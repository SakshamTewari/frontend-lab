class Calculator {
    constructor(currentOperandAndTextElement, previousOperandAndTextElement) {
        this.currentOperandAndTextElement = currentOperandAndTextElement;
        this.previousOperandAndTextElement = previousOperandAndTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }
    
    delete(){
        this.currentOperand = this.chooseOperation.toString().splice(0, -1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    updateDisplay(){
        this.currentOperandAndTextElement.innerText = this.currentOperand;

        if(this.operation !== null)
            this.previousOperandAndTextElement.innerText = `${this.previousOperand} ${this.operation}`;


    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(curr)) return;

        switch(this.operation) {
            case '+':
            computation = prev + curr;
            break;
            case '-':
            computation = prev - curr;
            break;
            case '÷':
            computation = prev / curr;
            break;
            case '*':
            computation = prev * curr;
            break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
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

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})