// declaring const & variable
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const timeEl = document.querySelector(".time");
const mainEl = document.getElementById("main");
var secondsLeft = 180;

// When the user click start
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})


// timer starts

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}

// When game starts questions are randomly given

function startGame() {
  startButton.classList.add("hide")
  setTime()
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

// list of answers being displayed

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
  }
}

// Feedback on user's input whether answer was correct or wrong

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
  clearInterval(timerInterval);
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  }
  else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")

}

// list of questions

const questions = [
  {
    question: "What language is used to style an HTML document?",
    answers: [
      { text: "Javascript", correct: false },
      { text: "Jquery", correct: false },
      { text: "CSS", correct: true },
      { text: "Script Tag", correct: false },
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "How To Mail Letter", correct: false },
      { text: "Hyper Text Maneuver Language", correct: false },
      { text: "Hello To My Lover", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
    ]
  },
  {
    question: "What was the root element of an HTML page?",
    answers: [
      { text: "<html>", correct: true },
      { text: "<body>", correct: false },
      { text: "<head>", correct: false },
      { text: "<title>", correct: false },
    ]
  },
  {
    question: "Which keyword defines a variable that cannot be reassigned?",
    answers: [
      { text: "var", correct: false },
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "define", correct: false },
    ]
  },
  {
    question: "HTML events are '_____' that happen to HTML elements.?",
    answers: [
      { text: "problems", correct: false },
      { text: "things", correct: true },
      { text: "codes", correct: false },
      { text: "instructions", correct: false },
    ]
  },
  {
    question: "What are some ways JavaScript can be displayed?",
    answers: [
      { text: "innerHTML", correct: false },
      { text: "document.write", correct: false },
      { text: "console.log", correct: false },
      { text: "all of the above", correct: true },
    ]
  },
  {
    question: "JavaScript comments can be used to?",
    answers: [
      { text: "prevent execution", correct: false },
      { text: "explain code", correct: false },
      { text: "1 & 2", correct: true },
      { text: "none of the above", correct: false },
    ]
  },
  {
    question: "CSS stands for?",
    answers: [
      { text: "Computer Syntax Sheet", correct: false },
      { text: "Coding Simple Sheet", correct: false },
      { text: "Cascading Syntax Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ]
  },
  {
    question: "Three ways of inserting a style sheet are:",
    answers: [
      { text: "External CSS", correct: false },
      { text: "Internal CSS", correct: false },
      { text: "Inline CSS", correct: false },
      { text: "all of the above", correct: true },
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Monitor", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Document On Monitor", correct: false },
      { text: "Document Object Manager", correct: false },
    ]
  },
  {
    question: "To find an HTML element by class name what should you use?",
    answers: [
      { text: "document.getElementsByClassName", correct: true },
      { text: "document.getElementsByTagName", correct: false },
      { text: "document.getElementById", correct: false },
      { text: "document.getHTMLByClassName", correct: false },
    ]
  }

]

