
var clockRunning = false;
var intervalId;
var time = 30;
var currentQuestion = 0;
var incorrect = 0;
var correct = 0; 
var gameRunning;
var answerValue ="";
var gameTimeout;

var questionOne = {
    statement :"The man between the sticks, Petr Cech, is from which of these countries?",
    answerOne :"Slovenia",
    answerTwo :"Croatia",
    answerThree :"Slovakia",
    answerFour :"Czech Republic",
}

var questionTwo = {
    statement :" Gianfranco Zola made his international debut for which country in 1991?",
    answerOne :"Italy",
    answerTwo :"Greece",
    answerThree :"Germany",
    answerFour :"Poland",
}

var questionThree = {
    statement :"When was Chelsea FC founded?",
    answerOne :"2005",
    answerTwo :"1847",
    answerThree :"1905",
    answerFour :"1997",
}

var questionFour = {
    statement :"What is Chelsea's main colour?",
    answerOne :"Red",
    answerTwo :"Blue",
    answerThree :"Burgandy",
    answerFour :"Trifle",
}

var questionFive = {
    statement :"Frank Lampard has played for Chelsea and England. What Premier League club was he with before Chelsea?",
    answerOne :"Bolton",
    answerTwo :"Liverpool",
    answerThree :"West Ham United",
    answerFour :"Machester City",
}

var questionSix = {
    statement :"What is the name of Chelsea's home stadium?",
    answerOne :"The Rock",
    answerTwo :"Anfield",
    answerThree :"Stamford Bridge",
    answerFour :"Turfmore",
}

var questionSeven = {
    statement :"Didier Drogba played his first game for what international football team in 2002?",
    answerOne :"Ivory Coast",
    answerTwo :"France",
    answerThree :"Portugal",
    answerFour :"Antarctica",
}

var questionEight = {
    statement :"Which manager bought Frank Lampard?",
    answerOne :"Jose Mourinho",
    answerTwo :"Claudio Ranieri",
    answerThree :"Carlo Ancelloti",
    answerFour :"Frank Lampard",
}

var questionNine = {
    statement :"Who is the all time leading scorer for Chelsea Football Club?",
    answerOne :"Diego Costa",
    answerTwo :"Frank Lampard",
    answerThree :"Eden Hazard",
    answerFour :"Didier Drogba",
}

var questionTen = {
    statement :"How many Premier League titles has Chelsea FC won?",
    answerOne :"5",
    answerTwo :"1",
    answerThree :"0",
    answerFour :"8",
}


var gameQuestions = [questionOne,questionTwo, questionThree, questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
var correctAnswers = ["Czech Republic","Italy","1905","Blue","West Ham United","Stamford Bridge","Ivory Coast","Claudio Ranieri","Frank Lampard","5"];


$(document).ready(function() {
    

//generates the first question and starts the clock
$("#gameStart").on("click", function() {
    $("#gameStart").hide();
    nextQuestion();
    $("#gameQuest").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
    clockStart();
    gameRun();
    });

    
    
function gameRun(){
   
        console.log("game is still running");
        // sets the time limit on the question to 30 seconds for the player
        gameTimeout = setTimeout(answerNone,30000);
         //runs each time a players selects an answer 
        $(".myanswer").on("click", function() {
            clearTimeout(gameTimeout);
            console.log("time out cleared")
            clockStop();
            //determines if the user has selected the correct answer
            if(correctAnswers.includes($(this).text())){
                correct++;
                showScore();
                $("#answer1").text("You are correct!");
                //if there are questions remaining in the array
                if(currentQuestion !=9){
                    currentQuestion++;
                    console.log(currentQuestion)
                    setTimeout(function(){
                        nextQuestion();
                        clockReset();
                        clockStart();
                        gameTimeout = setTimeout(answerNone,30000);
                    },3000);
                }// if you have reached the end of your questions array 
                else if(currentQuestion ===9){
                    console.log("game over");
                    showScore();
                    $("#answer1").text("You are correct!");
                    $("#answer4").text("Please hit the reset button to play again!");
                    $("#gameReset").show();
                }
            }else{
                console.log("answer was incorrect")
                incorrect++;
                showScore();
                findAnswer(currentQuestion);
                //if there are questions remaining in the array
                if(currentQuestion !=9){
                    currentQuestion++;
                    setTimeout(function(){
                        nextQuestion();
                        clockReset();
                        clockStart();
                        gameTimeout = setTimeout(answerNone,30000);
                    },3000);
                    
                }// if you have reached the end of your questions array 
                else{
                    clockStop();
                    showScore();
                    findAnswer(currentQuestion);
                    $("#answer4").text("Please hit the reset button to play again!")
                    $("#gameReset").show();
                }   
            }
        });
    

    $("#gameReset").on("click", function() {
        $("#gameReset").hide();
        currentQuestion = 0;
        incorrect = 0;
        correct = 0; 
        gameRunning =true;
        nextQuestion();
        clockReset();
        clockStart();
        gameTimeout = setTimeout(answerNone,30000);
    });

    function answerNone(){
        clockStop();
        incorrect++;
        console.log("time out not cleared");
        console.log("no answer selected");
        console.log(currentQuestion);
        if(currentQuestion != 9){
            currentQuestion++;
            showScore(); 
            setTimeout(function(){
                nextQuestion();
                clockReset();
                clockStart();
                gameTimeout = setTimeout(answerNone,30000);
            },3000);
        }else{
            clockStop();
            showScore();
            $("#gameReset").show();
            $("#answer4").text("Please hit the reset button to play again!")
        }
    }
}

function findAnswer(currentQuestion){
    switch(currentQuestion){
        case 0:
            answerValue = "Czech Republic"
            break;
        case 1:
            answerValue = "Italy"
            break;
        case 2:
            answerValue = "1905"
            break;
        case 3:
            answerValue = "Blue"
        break;
        case 4:
            answerValue = "West Ham United"
        break;
        case 5:
            answerValue = "Stamford Bridge"
        break;
        case 6:
            answerValue = "Ivory Coast"
        break;
        case 7:
            answerValue = "Claudio Ranieri"
        break;
        case 8:
            answerValue = "Frank Lampard"
        break;
        case 9:
            answerValue = "5"
        break;
    }
    $("#answer1").text("Wrong! The correct answer was: " + answerValue);
}

function nextQuestion(){
    $("#mainQuestion").text(gameQuestions[currentQuestion].statement);
    $("#answer1").text(gameQuestions[currentQuestion].answerOne);
    $("#answer2").text(gameQuestions[currentQuestion].answerTwo);
    $("#answer3").text(gameQuestions[currentQuestion].answerThree);
    $("#answer4").text(gameQuestions[currentQuestion].answerFour);
}

function showScore(){
    $("#mainQuestion").text("");
    $("#answer1").text("");
    $("#answer2").text("Answers Correct: " + correct);
    $("#answer3").text("Answers Incorrect: " + incorrect);
    $("#answer4").text("");
}

function clockStart() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function clockStop() {
    clearInterval(intervalId);
    clockRunning = false;
}

function clockReset(){
    time = 30;    
    $("#gameTimer").text("00:00");
}

function count() {
    time--;
    var converted = timeConverter(time);
    $("#gameTimer").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }  
    return minutes + ":" + seconds;
  }

});