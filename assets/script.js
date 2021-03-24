
// store questions in array of objects, each object represents a question; each object has title, choice, answer
//title is the question (each question has 3 properties, title (question) choices (options) answer (answer)
//when click the start quiz button, update DOM (start a question)
//start button in HTML/add event listener to javascript
//<h1> question, ol li for 

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
        title: "Ideally, where should you link your JavaScript file?",
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
startButton.addEventListener("click", function(){
    console.log ("hi")
})
