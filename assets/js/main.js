// create elements for timer and start button
var highScores = document.getElementById("highScores");
var countdownTimer = document.getElementById("countdownTimer");
// var startQuizPage = document.querySelector(".startQuizPage");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startBtn = document.querySelector("button");
var containerStart = document.querySelector(".container-start");
var startQuizPage = document.querySelector("startQuizPage");

// Text Elements
title.textContent = "Test Your Alcohol Knowledge";
startBtn.textContent = "Take Quiz";
instructions.textContent = "What you know about alcoholic beverages you drink? Test your knowledge here and beware that wrong answers will take 10 seconds off your 60 second timer!";

//Style Elements
// containerStart.setAttribute("style", "text-align: center;");
startBtn.setAttribute("style", "text-align: center;");
// title.document.setAttribute("style", "text-align: center;");
// startBtn.document.setAttribute("style", "text-align: center;");
// instructions.setAttribute("style", "text-align: center;");

//declare timer var
var secondsLeft = 60;
var count = 0;

//set score to zero
var score = 0

// create button with event listener to start quiz

startBtn.addEventListener("click", function(event) {
  //Make sure page does not reset
  event.preventDefault();
  // found one
    if ("click"){
      containerStart.style.display = "none";
      containerQuestion.style.display = "block";
      currentQuestion = 0;
      renderQuestion();
    }
  console.log(countdownTimer); 
}, 
// var timer = setInterval(...document, 100)
// need to declare timer globally in order to reference througout 
// need to replace countdownTimer...
function startcoutdownTimer(){
  countdownTimer = setInterval(function() {
    secondsLeft--;
    Timer.textContect = "Time; " + secondsLeft;
    if(secondsLeft === 0){
      clearInterval(timerInterval);
    } 
  }, 1000);
})


// need function to determine correct anwser and if question is correct or incorrect:

// indicate to answer is correct or incorrect:

// If incorrect. subtract time (10 sec) qne // load up next question

// If correct increment score and // load up next question

//function/elements to keep score

// load up Game Over indicatior score when
    // time runs out or all questions answered


// basic form to enter initials
// store initials and score to local storage

//create highscores.html to load after initials entered



