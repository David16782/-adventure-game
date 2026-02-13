let currentState = "Start"

function renderQuestion() {
    let question = document.getElementById("question")
    let answers = document.getElementById("answers")

    answers.innerHTML = ""

    switch (currentState) {
        case "Start":
            question.textContent = "You walked into a bar and a man offers you a coinflip";
            addAnswerButton("Heads", "Heads");
            addAnswerButton("Tails", "Tails");
            break;
        case "Heads":
            question.textContent = 
            "You won the coinflip! Hes now asking if the next card in his deck will be higher or lower than an 8.";
            addAnswerButton("Higher!", "Higherthan8");
            addAnswerButton("Lower!", "Lowerthan8");
            break;
        case "Higherthan8":
            question.textContent = "You Won!! You made $20 congrats!";
            addAnswerButton("Restart", "Start");
            break;
        case "Lowerthan8":
            question.textContent = "You Lost. At least you ended up even.";
            addAnswerButton("Restart", "Start");
            break;
        case "Tails":
            question.textContent =
            "You lost the coin flip but the man offers a double or nothing.";
            addAnswerButton("I like to gamble!", "DoubleY");
            addAnswerButton("Give him the $10.", "DoubleN");
            break;
        case "DoubleY":
            question.textContent = "Another coinflip.";
            addAnswerButton("Heads", "Heads2");
            addAnswerButton("Tails", "Tails2");
            break;
        case "Heads2":
            question.textContent = "You lost again and now owe the man $20.";
            addAnswerButton("Restart", "Start");
            break;
        case "Tails2":
            question.textContent = "You won and owe the man nothing.";
            addAnswerButton("Restart", "Start");
            break;
        case "DoubleN":
            question.textContent = "You owe the man $10";
            addAnswerButton("Restart", "Start");
            break;
    }
}

function addAnswerButton(label, nextState) {
    let answers = document.getElementById("answers");

    let button = document.createElement("button");
    let li = document.createElement("li");
    button.textContent = label;

    button.addEventListener("click", () => {
        currentState = nextState;
        renderQuestion();
    });

    li.appendChild(button);
    answers.appendChild(li);
}

renderQuestion();