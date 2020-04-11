// Define our questions
// have an idea of our HTML layout
// <h2> Countdown Timer - function

//Possible way to build questions in html
// <ul> choices - dynamically but choices into questions
//<li> anwsers - dynamically put answers into choice

// Make questions and answers array you call back as function throughout. 

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




// create a question array that contains objects for each question
// object shoud include question, options, and answer
// watched video that mentioned anyone can see answer in console. Can access correct answer using var lastQuestionIndex = questions.length -1; need to look into this more


var currentQuestion = 0;
var questions = [
  {
    question: "What is not an essential indgredient for brewing beer?",
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
  } 
];


//functions and loop for questions

//put timer in global space so you can refer to it from any function

// create function to render questions

function renderQuestion (){
  var q = questions[currentQuestion];
  // trying out innerHTML to insert array elements
  question.innerHTML = "<h2>" + q.question + "<h2>";
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
  optionD.innerHTML = q.optionD;

};
currentquestion = 0
renderQuestion();

// move to next question throughout currentQuestion++ then render qustion 
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










