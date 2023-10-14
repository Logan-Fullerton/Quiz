var correctIndex=0
var incorrectIndex=0
var questionIndex =0
var finalScore=0
var sec = 60;

const questions=[
    {
        question:"What is HTML?",
        choices:["A ham tomato mayo lettuce sandwich","A honey tuna mustard lychee sandwich","the standard markup language for web pages","hot tomato margarita lemonade"],
        answer:"the standard markup language for web pages",
    },
    {
        question:"What is JavaScript?",
        choices:["A web programming language that can calculate, manipulate and validate data","A list of Starbucks drinkies","A screenplay about a struggling barista","all of the above"],
        answer:"A web programming language that can calculate, manipulate and validate data",
    },
    {
        question:"What is CSS?",
        choices:["A competitive E-sports shooter","A web programming language that describes how HTML elements are to be displayed","A bad medical diagnosis","A type of illicit substance"],
        answer:"A web programming language that describes how HTML elements are to be displayed",
    },
   
]
document.querySelector('#final-score').classList.add("hide")
let questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")

const startButton=document.getElementById("start-button")


function startQuiz(){
    document.querySelector(".quiz").classList.remove("hide")
    document.querySelector("#welcome").classList.add("hide")
    renderQuestions();
    timer() 
}
startButton.addEventListener ("click",startQuiz)

function timer(){
    
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            quizEnd();
        }
    }, 1000);
}


function renderQuestions(){ 
    
    console.log(questionIndex)
    console.log(questions.length)
    if(questionIndex>questions.length-1){
        quizEnd() 
        return
    }
let questionElement = document.querySelector("#question")
questionElement.textContent=questions[questionIndex].question
document.querySelector("#btna").textContent=questions[questionIndex].choices[0]
document.querySelector("#btnb").textContent=questions[questionIndex].choices[1]
document.querySelector("#btnc").textContent=questions[questionIndex].choices[2]
document.querySelector("#btnd").textContent=questions[questionIndex].choices[3]

}

function handleQuestionClick(event){
let answer=event.target.textContent
if (answer !==questions[questionIndex].answer){
    incorrectIndex++;
    sec=sec-10;
}

else{correctIndex++}

questionIndex++

renderQuestions()
}
document.querySelector("#answer-buttons").addEventListener("click",handleQuestionClick)

function quizEnd(){
    document.querySelector('#timer').classList.add('hide')
    document.querySelector(".quiz").classList.add("hide")
    document.querySelector('#correct').textContent=('Correct-'+correctIndex)
    console.log(finalScore)
    document.querySelector('#incorrect').textContent=('incorrect-'+incorrectIndex)
    

}
