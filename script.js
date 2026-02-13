let currentState = start

function renderQuestion() {
    let question = document.getElementById("question")
    let answer = document.getElementById("answers")
    let nextButton = document.getElementById("next-button")
}

function addAnswerButton(label, nextState) {
    let answers = document.getElementById("answers")
    let button = document.getElementById("button")
    button.textContent = label;

    button.addEventListener("click", () => {
        currentState = nextState;
        renderQuestion();
    });
}

renderQuestion();