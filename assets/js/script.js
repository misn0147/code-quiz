var start = document.querySelector("#start");
var startingPage = document.querySelector("#starting-page");
var answer = document.querySelectorAll(".answer-choice");
var quizPage = document.querySelector("#quiz-page");
var score = 0;
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var questions = [
    { q: "Arrays in JavaScript can be used to store _________.", 
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct : "D"
},
    { q: "A very useful tool used during development and dubugging for printing content to the debugger is:", 
    choiceA: "JavaScript",
    choiceB: "console.log",
    choiceC: "for loops",
    choiceD: "terminal/bash",
    correct : "B"
},
    { q: "Commonly used data types DO NOT include:", 
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct : "alerts"
},
    { q: "The condition in an if / else statement is enclosed with _______.", 
    choiceA: "parenthesis",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "square brackets",
    correct : "parenthesis" 
},
    { q: "String values must be enclosed within _______ when being assigned to variables", 
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correct : "quotes"
}
];
var runningQuestion = 0;
var lastQuestion = questions.length - 1;
var testObj = questions[runningQuestion];


function startQuiz () {
    startingPage.setAttribute("class", "hide");
    quizPage.removeAttribute("class", "hide");
    renderQuestion();
};

start.onclick = startQuiz;


function renderQuestion() {
    //for (var i = 0; i < questions.length; i++)
    
    document.querySelector("#questions").innerHTML = "<p>" + testObj.q + "</p>";
        choiceA.innerHTML = testObj.choiceA;
        choiceB.innerHTML = testObj.choiceB;
        choiceC.innerHTML = testObj.choiceC;
        choiceD.innerHTML = testObj.choiceD;

    choiceA.addEventListener("click", checkAnswer);
    choiceB.addEventListener("click", checkAnswer);
    choiceC.addEventListener("click", checkAnswer);
    choiceD.addEventListener("click", checkAnswer);
}

function checkAnswer (e) {
    var userInput = e.target.id;
    if (userInput === testObj.correct) {
        console.log("correct!");
    }
    else {
        console.log("wrong");
    }
    runningQuestion++;
    testObj = questions[runningQuestion]
    
    //if runningQuestion is greater than last question end quiz
    // if not, renderQuestion()
    // else render score
    renderQuestion();
}

