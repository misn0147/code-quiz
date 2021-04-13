var start = document.querySelector("#start");
var startingPage = document.querySelector("#starting-page");

var quizPage = document.querySelector("#quiz-page");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var questions = [
    { q: 'Arrays in JavaScript can be used to store _________.', 
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: 'all of the above',
    correct : "choiceD" 
},
    { q: 'A very useful tool used during development and dubugging for printing content to the debugger is:', 
    choiceA: "JavaScript",
    choiceB: "console.log",
    choiceC: "for loops",
    choiceD: 'terminal/bash',
    correct : "choiceB" 
},
    { q: 'Commonly used data types DO NOT include:', 
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: 'numbers',
    correct : "choiceC" 
},
    { q: 'The condition in an if / else statement is enclosed with _______.', 
    choiceA: "parenthesis",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: 'square brackets',
    correct : "choiceA" 
},
    { q: 'String values must be enclosed within _______ when being assigned to variables', 
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: 'parenthesis',
    correct : "choiceC" 
}
];

var score = 0;

function startQuiz () {
    startingPage.setAttribute("class", "hide");
    quizPage.removeAttribute("class", "hide");
    renderQuestion();
};

start.onclick = startQuiz;

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

function renderQuestion() {
    for (var i = 0; i < questions.length; i++)

    var testObj = questions[runningQuestion];
    
    document.querySelector("#questions").innerHTML = "<p>" + testObj.q + "</p>";
        choiceA.innerHTML = testObj.choiceA;
        choiceB.innerHTML = testObj.choiceB;
        choiceC.innerHTML = testObj.choiceC;
        choiceD.innerHTML = testObj.choiceD;
}