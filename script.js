let first_number = '';
let operand = '';
let second_number = '';

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(number1, operator, number2) {
    switch(operator) {
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
        default:
            return "Something went wrong!";
    }
}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

for(const number of numbers) {
    number.addEventListener("click", (disp) => {
	    if (display.textContent === '' && first_number === '' && second_number === '' && operand === '') {
		display.innerHTML += number.innerHTML;
	    }
	    else if (first_number !== '' && operand !== '' && display.textContent !== '') {
		display.innerHTML = number.innerHTML;
	    }
	    else {
		    display.innerHTML += number.innerHTML;
	    }
    });
}


const ac = document.querySelector(".clear");
ac.addEventListener("click", () => {
    display.textContent = "";
	first_number = '';
	second_number = '';
	operand = '';
});

const backspace = document.querySelector(".delete");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

const times = document.querySelector(".multiply");
const divideBy = document.querySelector(".divide");
const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const equals = document.querySelector(".equals");

const operators = [times, divideBy, plus, minus];

for (let operator of operators) {
	operator.addEventListener('click', () => {
		if (display.textContent !== '' && first_number === '') {
			first_number = parseInt(display.textContent);
			operand = operator.textContent;
		}
		else if (first_number !== '' && operand !== '' && display.textContent !== '') {
			let holder = first_number;
			second_number = parseInt(display.textContent);
			first_number = operate(holder, operand, second_number)
			operand = operator.textContent;
			display.textContent = first_number;
		}
	});
}

equals.addEventListener("click", () => displayResult());

const displayResult = function() {
	if (display.textContent !== '' && first_number !== '' && operand !== '') {
		let result = operate(first_number, operand, parseInt(display.textContent));
		display.textContent = result;
	}
	else {
		let result = operate(first_number, operator, parseInt(display.textContent));
		display.textContent = result;
	}
}
