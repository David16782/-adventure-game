# Debugging
1. Identify Logical Breakpoints
    - The three breakpoints i chose are on click event, on switching states and appending to answers.

2. Stepping through code
    - SS1 looks at the click event. On click of the button the program first attempts to change the current state to the next state and then tries to re render the page.
    - SS2 Looks at switching states. When a state switch is attempted it attempts to show the question first then calls the relevant add buttons.
    - SS3 looks at appending the list item to answers. It first attempts to append to answers then moves on to finish that call of addAnswerButton.

3. Identify critical state
    - I am going to look into the switching states breakpoint. When this code is called it will be following a user selecting an answer.
        Its goal is to display new information like the question being asked to the user and the buttons being shown.
        It is functioning as I would expect with each step adding more relevant information until the code is done being called.