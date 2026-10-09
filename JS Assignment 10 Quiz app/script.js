const correctAnswers = ["c", "b", "a", "a"];
const quizForm = document.querySelector(".quiz-form");
const questionSteps = [...quizForm.querySelectorAll(".question-step")];
const nextButton = quizForm.querySelector(".next-button");
const submitButton = quizForm.querySelector(".submit-button");
const answerError = quizForm.querySelector(".answer-error");
const questionProgress = document.querySelector("#question-progress");
const result = document.querySelector(".result");

let currentQuestion = 0;

nextButton.addEventListener("click", () => {
  const questionName = `q${currentQuestion + 1}`;
  const selectedAnswer = quizForm.querySelector(
    `input[name="${questionName}"]:checked`
  );

  if (!selectedAnswer) {
    answerError.classList.remove("d-none");
    return;
  }

  answerError.classList.add("d-none");
  questionSteps[currentQuestion].classList.add("d-none");
  currentQuestion++;
  questionSteps[currentQuestion].classList.remove("d-none");
  questionProgress.textContent = `Question ${currentQuestion + 1} of ${questionSteps.length}`;

  if (currentQuestion === questionSteps.length - 1) {
    nextButton.classList.add("d-none");
    submitButton.classList.remove("d-none");
  }
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionName = `q${currentQuestion + 1}`;
  const selectedAnswer = quizForm.querySelector(
    `input[name="${questionName}"]:checked`
  );

  if (!selectedAnswer) {
    answerError.classList.remove("d-none");
    return;
  }

  const score = correctAnswers.reduce((total, correctAnswer, index) => {
    const answer = quizForm.querySelector(
      `input[name="q${index + 1}"]:checked`
    );
    return total + (answer?.value === correctAnswer ? 1 : 0);
  }, 0);
  const percentage = Math.round((score / correctAnswers.length) * 100);

  document.querySelector(".quiz").classList.add("d-none");
  result.classList.remove("d-none");
  scrollTo(0, 0);

  let output = 0;

  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === percentage) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
