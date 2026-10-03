const quizForm = document.getElementById("quiz-form");
const scoreElement = document.getElementById("score");
const answers = {
    q1: "C",
    q2: "A",
    q3: "A",
    q4: "A"
};

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selectedAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            score++;
        }
    }

    scoreElement.textContent = `Your score: ${score} / ${Object.keys(answers).length}`;
});
