// create elements for timer and start button
var highScores = document.getElementById("highScores");
var countdownTimer = document.getElementById("countdownTimer");
// var startQuizPage = document.querySelector(".startQuizPage");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startBtn = document.querySelector("button");
var container = document.querySelector(".container");
var startQuizPage = document.querySelector("startQuizPage");

// Text Elements
title.textContent = "Test Your Alcohol Knowledge";
startBtn.textContent = "Take Quiz";
instructions.textContent = "What to see what you know about craft alcoholic beverages? Test your knowledge here and beware that wrong answers will take 10 seconds off yoru 60 second timer!";

//Style Elements
container.setAttribute("style", "text-align: center;");
startBtn.setAttribute("style", "text-align: center;");
// title.document.setAttribute("style", "text-align: center;");
// startBtn.document.setAttribute("style", "text-align: center;");
// instructions.setAttribute("style", "text-align: center;");

var secondsLeft = 60;
var count = 0;

var score = 0
// //create function for startbtn

startBtn.addEventListener("click", function(event) {
  //Make sure page does not reset
  event.preventDefault();
  onclick = coutdownTimer();
  console.log(countdownTimer); 
}, 

function startcoutdownTimer(){
  countdownTimer = setInterval(function() {
    secondsLeft--;
    Timer.textContect = "Time; " + secondsLeft;
    if(secondsLeft === 0){
      clearInterval(timerInterval);
    } 
  }, 1000);
})