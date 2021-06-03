var questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        question: "Which of the following is the correct syntax to display your name in an alert box using JavaScript?",
        choices: ["alertbox(“Your Name”);", "msg(“Your Name”);", "msgbox(“Your Name”);", "alert(“Your Name”);"],
        answer: "alert(“Your Name”);"
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        choices: ["<script src=”script.js”>", "<script href=”script.js”>", "<script ref=”script.js”>", "<script name=”script.js”>"],
        answer: "<script src=”script.js”>"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction()", "function myFunction() ", "function, myFunction() "],
        answer: "function myFunction() "
    },
    {
        question: "How does a FOR loop start?",
        choices: ["for (i = 0; i <= 5; i++)  ", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5"],
        answer: "for (i = 0; i <= 5; i++)  "
    }
];

// Timer vars
var timer = document.getElementById("gTimer");
var remainTime = document.getElementById("remainTime");

// Start vars
var start = document.getElementById("start");
var startBtn = document.getElementById("startBtn");

// Question vars
var quizDetails = document.getElementById("quizDetails");
var quesTitle = document.getElementById("quesTitle");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");
var ansCheck = document.getElementById("ansCheck");

var finalScore = document.getElementById("finalScore");

// QUestion/answer vars
var correctCount = 0;
var questionIndex = 0;

// Start quiz
var quizTime = 31;

function newQuiz() {
    questionIndex = 0;
    quizTime = 30;
    remainTime.textContent = quizTime;

    start.style.display="none";
    quizDetails.style.display="block";

    var timerStart = setInterval(function()  {
        quizTime--;
        remainTime.textContent = quizTime;
        if(quizTime <= 0) {
            clearInterval(timerStart);
            if(questionIndex < questions.length - 1) {
                endGame();
            }
        }
    }, 1000);
    nextQuestion();
}

function nextQuestion() {
    quesTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAns(answer) {
    ansCheck.style.display="block";
    if(questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        correctCount++;
        ansCheck.textContent="Correct!";
    } else {
        quizTime =- 15;
        remainTime.textContent = quizTime;
        ansCheck.textContent = "Incorrect, the right answer is: " + questions[questionIndex].choices[answer];
    }
    questionIndex++;
    if(questionIndex < questions.length) {
        nextQuestion();
    } else {
        endGame();
    }
}

function chooseA() {checkAns(0);}
function chooseB() {checkAns(1);}
function chooseC() {checkAns(2);}
function chooseD() {checkAns(3);}

function endGame() {
    finalScore.style.display = "block";
}

function showScores() {

}

startBtn.addEventListener('click', newQuiz);
choiceA.addEventListener('click', chooseA);
choiceB.addEventListener('click', chooseB);
choiceC.addEventListener('click', chooseC);
choiceD.addEventListener('click', chooseD);

highScore.addEventListener('click', function(event) {
    showScores(event);
});

