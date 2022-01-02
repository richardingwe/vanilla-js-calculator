let displayAnswer = document.querySelector('.answer');
let displayQuestion = document.querySelector('.question');
let noButtons = document.querySelectorAll('.noButtons');
let solve = document.querySelector('.solve');
let clearAll = document.querySelector('.clearAll');
let backspace = document.querySelector('.backspace');
let answer = 0;
let question = 0;

init();

noButtons.forEach(button => {
    button.addEventListener('click', getValue);
});

solve.addEventListener('click', solveQuestion);

clearAll.addEventListener('click', clearScreen);

backspace.addEventListener('click', deleteOne);



function init() {
    displayAnswer.innerText = answer;
    displayQuestion.innerText = question;
}

function getValue() {
    const operator = this.getAttribute("operators");

    if (displayQuestion.innerText[0] === '0' && question[0] === '0') {
        displayQuestion.innerText = displayQuestion.innerText.substring(1);
        question = question.substring(1);
        displayQuestion.innerText += this.innerText;
        question += operator;
    } else {
        displayQuestion.innerText += this.innerText;
        question += operator;
    }
}

function solveQuestion() {
    answer = eval(question);
    displayAnswer.innerText = answer;
}


function clearScreen() {
    answer = 0;
    question = 0;
    displayQuestion.innerText = 0;
    displayAnswer.innerText = 0;
}

function deleteOne() {
    if (displayQuestion.innerText.length === 0 && question.length === 0) {
        displayQuestion.innerText = '0';
        question === '0';
    } else {
        displayQuestion.innerText = displayQuestion.innerText.substring(0, displayQuestion.innerText.length - 1);
        question = question.substring(0, question.length - 1);
    }
}