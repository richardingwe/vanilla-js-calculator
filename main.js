let displayAnswer = document.querySelector('.answer');
let displayQuestion = document.querySelector('.question');
let noButtons = document.querySelectorAll('.noButtons');
let solve = document.querySelector('.solve');
let clearAll = document.querySelector('.clearAll');
let answer = 0;
let question = 0;

init();

noButtons.forEach(button => {
    button.addEventListener('click', getValue);
});

solve.addEventListener('click', solveQuestion);

clearAll.addEventListener('click', clearScreen);



function init() {
    displayAnswer.innerText = answer;
    displayQuestion.innerText = question;
}

function getValue() {
    const operator = this.getAttribute("operators");
    console.log(operator);

    question += operator;
    console.log(question);
    displayQuestion.innerText += this.innerText;
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