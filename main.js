let displayAnswer = document.querySelector('.answer');
let displayQuestion = document.querySelector('.question');
let noButtons = document.querySelectorAll('.noButtons');

init();

noButtons.forEach(button => {
    button.addEventListener('click', getValue);
});



function init() {
    let answer = 0;
    let question = 0;

    displayAnswer.innerText = answer;
    displayQuestion.innerText = question;
}

function getValue() {
    const operator = this.getAttribute("operators");
    console.log(operator);
}