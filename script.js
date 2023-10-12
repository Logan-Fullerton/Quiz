/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/
var correctIndex=0
var incorrectIndex=0
var questionIndex =0
var finalScore=0
var sec = 60;

const questions=[
    {
        question:"question?",
        choices:["choice-1","choice-2","choice-3","choice-4"],
        answer:"choice-3",
    },
    {
        question:"question2?",
        choices:["choice-1","choice-2","choice-3","choice-4"],
        answer:"choice-1",
    },
    {
        question:"question3?",
        choices:["choice-1","choice-2","choice-3","choice-4"],
        answer:"choice-2",
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
