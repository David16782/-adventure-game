let currentState = Start

function renderQuestion() {
    let question = document.getElementById("question")
    let answer = document.getElementById("answers")
    let nextButton = document.getElementById("next-button")
    switch (currentState) {
        case "Start":
        case "Heads":
        case "Higher than 8":
        case "Win $20":
        case "Lower than 8":
        case "Lost even":
        case "Tails":
        case "DoubleY":
        case "Heads":
        case "Lost again":
        case "Tails":
        case "Won Even":
        case "DoubleN":
        
    }
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