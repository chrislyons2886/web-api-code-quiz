
// store questions in array of objects, each object represents a question; each object has title, choice, answer
//title is the question (each question has 3 properties, title (question) choices (options) answer (answer)
//when click the start quiz button, update DOM (start a question)
//start button in HTML/add event listener to javascript
//<h1> question, ol li for 

var correctAns = 0
var maxTime = 75
var index = 0
var score = 0
var highScore =""


var questions = [
    {
        title: "Which is the correct file extension for a JavaScript file?",
        choices: [".script", ".jscript", ".js", ".jv"],
        answer: ".js"
    }, 
    {
        title: "True or False: All interactive websites use JavaScript",
        choices: ["true", "false"],
        answer: "true"
    },

    {
        title: "Booleans, numbers, and strings are all examples of:",
        choices: ["objects", "types", "arrays", "functions"],
        answer: "types"
    },

    {
        title: "Where should you link your JavaScript file in an HTML file?",
        choices: ["At the top of the <head>", "In your CSS file", "After your <footer>", "At the end of your <body>"],
        answer: "At the end of your <body>"
    },

    {
        title: "Which is the correct syntax for a console.log?",
        choices: ["console.log{ cheese}", "console.log(cheese)", "console.log=cheese", "console.log var=cheese"],
        answer: "console.log(cheese)"
    },

];




var startButton=document.getElementById("start");


startButton.addEventListener('click', function () {
    document.querySelector('#timer').textContent = maxTime;
    startButton.classList.add('button-hide');
    var interval = setInterval(function () {
      if (parseInt(document.querySelector('#timer').textContent) > 0) {
        console.log('above zero!');
        document.querySelector('#timer').textContent = maxTime;
        maxTime--;
      } else {
        console.log('clear interval!');
        clearInterval(interval);
      }
    }, 1000);
    buildQuestionCard();
  });
function buildQuestionCard() {
    question=questions[index];
    document.querySelector("#quizP").textContent=question.title;
    var choicesDiv = document.querySelector("#choices");
    choicesDiv.innerHTML="";
    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        console.log (choice)
        var button = document.createElement("button");
        button.textContent=choice;
        button.setAttribute("value",choice);
        button.onclick=evaluateAnswer;
    
        choicesDiv.appendChild(button);
    }
    
}
function evaluateAnswer() {
    console.log(this.value)
    if (this.value !== questions[index].answer) {
        console.log ("wrong");
        maxTime=maxTime-10
        var rw = document.querySelector("#rw");
        rw.innerHTML="Previous answer incorrect! Try to get this one right!";
    }else{
        console.log("right")
        var rw = document.querySelector("#rw");
        rw.innerHTML="Your last answer was correct! Great job!";
    }
    index++; 
    if (index===questions.length){
        gameOver()
        clearInterval(maxTime);
    } else{
    buildQuestionCard();
    }
}
function gameOver(){
    document.getElementById("quizCard").innerHTML="";
    var endDiv = document.getElementById("endDiv");
    endDiv.setAttribute("style", "border: 1px solid black");
    var endMessage =document.createElement("h1");
    endMessage.textContent="Game Over";
    var input = document.createElement("input");
    input.setAttribute('max', "{3}")
    console.log (input.value)
    endDiv.appendChild(endMessage);
    endMessage.appendChild(input);

    
   var button = document.createElement("button");
   button.setAttribute ("style", "border: 1px solid black");
   

}

   
    // add high score
    //restart


