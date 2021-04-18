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
        else if(runningQuestion > 4) {
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
        console.log("correct!");
        console.log(timeLeft)
    }
    else {
        console.log("wrong");
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
    }
    runningQuestion++;
    testObj = questions[runningQuestion]
    renderQuestion();

    if (runningQuestion > 4) {
        endQuiz();
        console.log("end");
        finalScore = timeLeft;
        console.log("final score is: " + finalScore);
    }
}

function endQuiz() {
    quizPage.setAttribute("class", "hide");
    scoresPage.removeAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
}


// document.getElementById("number").innerHTML = finalScore;


// function renderLastRegistered() {
//     scoresPage.addAttribute("class", "hide");
//     timerEl.setAttribute("class", "hide");
//     var currentWinner = localStorage.getItem("initials, score");
//   //TODO: if they are null, return early from this function
//     if (email === null || password === null) {
//       return;
//     }
//   //TODO otherwise set the text of 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from local Storage
//   userEmailSpan.textContent = initials, score;
//   }


submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    var newWinner = document.querySelector('#initials').value;
    
    if (newWinner === '') {
    window.prompt('error', 'Initials cannot be blank');
    } else {
    
    localStorage.setItem("initials, score", newWinner + ", " + finalScore);

    // renderLastRegistered();
    
    }
});