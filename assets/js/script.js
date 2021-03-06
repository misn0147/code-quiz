var start = document.querySelector("#start");
var startingPage = document.querySelector("#starting-page");
var answer = document.querySelectorAll(".answer-choice");
var quizPage = document.querySelector("#quiz-page");
var scoresPage = document.querySelector("#score-input");
var score = 0;
var timeLeft = 75;
var timerEl = document.querySelector("#countdown");
var submitButton = document.querySelector('#submit');
var initialsInput = document.querySelector('#initials');
var newWinner = document.querySelector('#initials').value;
var number = document.querySelector('#number')


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
    correct : "C"
},
    { q: "The condition in an if / else statement is enclosed with _______.", 
    choiceA: "parenthesis",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "square brackets",
    correct : "A" 
},
    { q: "String values must be enclosed within _______ when being assigned to variables.", 
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correct : "C"
}
];
var runningQuestion = 0;
var lastQuestion = questions.length - 1;
var testObj = questions[runningQuestion];


function startQuiz () {
    startingPage.setAttribute("class", "hide");
    timerEl.removeAttribute("class", "hide");
    quizPage.removeAttribute("class", "hide");
    renderQuestion();
    countdown();
};

function countdown() {
    var timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else if(runningQuestion >= 4) {
            clearInterval(timeInterval);
            console.log(timeLeft);
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
            console.log(timeLeft);
        }
    }, 1000);
}

var finalScore = '';

start.onclick = startQuiz;

function renderQuestion() {
    document.querySelector("#questions").innerHTML = "<p>" + testObj.q + "</p>";
        choiceA.innerHTML = testObj.choiceA;
        choiceB.innerHTML = testObj.choiceB;
        choiceC.innerHTML = testObj.choiceC;
        choiceD.innerHTML = testObj.choiceD;

    choiceA.addEventListener("click", checkAnswer);
    choiceB.addEventListener("click", checkAnswer);
    choiceC.addEventListener("click", checkAnswer);
    choiceD.addEventListener("click", checkAnswer);

    console.log(testObj.q);
    console.log(runningQuestion);
}


function checkAnswer (e) {
    var userInput = e.target.id;
    if (userInput === testObj.correct) {
        document.querySelector('.right-wrong').innerHTML = "Correct!";
        console.log(timeLeft)
    }
    else {
        document.querySelector('.right-wrong').innerHTML = "Wrong!";
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
    }
    runningQuestion++;
    testObj = questions[runningQuestion]

    if (runningQuestion >= questions.length) {
        endQuiz();
        console.log("end");
        finalScore = timeLeft;
        console.log("final score is: " + finalScore);
        document.querySelector('.score-number').innerHTML = finalScore;
    }
    else {
    renderQuestion();
    }
};

function endQuiz() {
    quizPage.setAttribute("class", "hide");
    scoresPage.removeAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
}

function saveScore() {
    var newWinner = document.querySelector('#initials').value;
    localStorage.setItem("initials, score", JSON.stringify(newWinner + ", " + finalScore));
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    var newWinner = document.querySelector('#initials').value;

    if (newWinner === '') {
    window.prompt('Error:', 'Initials cannot be blank');
    } else {
    saveScore();
    }
    
});

function displayWinner() {
    var winnerDisplay = JSON.parse(localStorage.getItem("initials, score"));
    console.log(winnerDisplay);
    
}
displayWinner();







