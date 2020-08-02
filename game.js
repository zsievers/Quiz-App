const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who did God tell to build an Ark?",
        choice1: "Noah",
        choice2: "Adam",
        choice3: "Ruth",
        choice4: "Jesus",
        answer: 1,
    },
    {
        question: "How did David defeat Goliath?",
        choice1: "Praying",
        choice2: "Sword",
        choice3: "Stone and a Sling",
        choice4: "He didn't",
        answer: 3,
    },
    {
        question: "What did God say when he created light?",
        choice1: "Illuminate Thee!",
        choice2: "Let there be light",
        choice3: "Thine lighteth turneth on",
        choice4: "Let there be sun",
        answer: 2,
    },
];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    // take this array - spread out its items and put them into a new array.
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to end page
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();