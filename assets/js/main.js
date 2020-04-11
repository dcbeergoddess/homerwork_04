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
      renderQuestion()
    }
  console.log(countdownTimer); 
}, 
// var timer = setInterval(...document, 100)
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

// function timedTest(question, choices, answer){
// }
//logically load in timer and Question 1 and first set of choices




// determine if question is correct or incorrect
// indicate to answer is correct or incorrect 
// If incorrect. subtract time (10 sec)
// If correct increment score
// load up next question
// once one question is done can reuse code
// load up Game over indication adn score
// basic form to enter initials
// store local to save info

