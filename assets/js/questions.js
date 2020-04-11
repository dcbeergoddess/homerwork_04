
//Possible way to build questions in html
// <ul> choices - dynamically but choices into questions
//<li> anwsers - dynamically put answers into choice

// Make questions and answers an array and make a function to call it back throughout. 

// Create variables/select all elements for quiz

var question = document.getElementById("question");
var optionList = document.getElementById("optionList");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var result = document.getElementById("returnResult");
var containerQuestion = document.querySelector(".container-question");
// var correctAnswer = questions.length -1;

//create variable for current question index
var currentQuestion = 0;



// create a question array that contains objects for each question
// object shoud include question, options, and answer
// watched video that mentioned anyone can see answer in console. Can access correct answer using var lastQuestionIndex = questions.length -1; need to look into this more



var questions = [
  {
    question: "What is not an essential ingredient for brewing beer?",
    optionA: "water",
    optionB: "hops",
    optionC: "barley/grain",
    optionD: "yeast",
    correct: "B"
  },
  {
    question: "Question2",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    correct: "A" 
  },
  {
    question: "Question2",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    correct: "A" 
  },
  {
    question: "Question2",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    correct: "A" 
  },
  {
    question: "Question2",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    correct: "A" 
  }, 
]

//Originally though about loop in a function for array. 
// found that innerHTML will insert into html element I created
n// create function to render questions

// hide questions until click event
containerQuestion.style.display = "none";

function renderQuestion (){
  var q = questions[currentQuestion];
  containerQuestion.style.display = "";
  // trying out innerHTML to insert array elements
  question.innerHTML = "<h2>" + q.question + "<h2>";
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
  optionD.innerHTML = q.optionD;

};
// currentQuestion = 0
// renderQuestion();

// move to next question throughout currentQuestion++ then  renderQuestion(); in mainl.js
//if I can't get that to work i will look into my originally idea of creating a loop to render 

console.log(renderQuestion);

// // before rendor hide start buttton

// containerStart.syle.display = "block";

// function startQuiz (){
//   for(var i = 0; i <= lastQuestion; i++){


//   }



// renderQuestion();
//   currentQuestion = 0;
//   renderQuestion();
//   // go to next question
//   currentQuestion++;
//   renderQuestion();










