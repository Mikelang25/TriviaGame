
var clockRunning = false;
var intervalId;
var time = 30;
var currentQuestion = 0;
var incorrect = 0;
var correct = 0; 
var gameRunning =true;
var answerValue ="";
var gameTimeout;


var questionOne = {
    statement :"What is the name of my dog?",
    answerOne :"Fido",
    answerTwo :"Lassy",
    answerThree :"Jaba the Hut",
    answerFour :"Jackie",
}

var questionTwo = {
    statement :"What is my favorite food?",
    answerOne :"Pizza",
    answerTwo :"Chinese",
    answerThree :"Italian",
    answerFour :"Indian",
}

var questionThree = {
    statement :"What color are my eyes?",
    answerOne :"Brown",
    answerTwo :"Green",
    answerThree :"Blue",
    answerFour :"Black",
}

var gameQuestions = [questionOne,questionTwo, questionThree];
var correctAnswers = ["Jackie","Pizza","Brown"];


$(document).ready(function() {
    
gameRun();



    
    
function gameRun(){
    if(gameRunning){
        console.log("game is still running");
        // sets the time limit on the question to 30 seconds for the player
        gameTimeout = setTimeout(answerNone,30000);

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
        });

        //runs each time a players selects an answer 
        $(".myanswer").on("click", function() {
            clearTimeout(gameTimeout);
            console.log("time out cleared")
            clockStop();
            //determines if the user has selected the correct answer
            if(correctAnswers.includes($(this).text())){
                correct++;
                showScore();
                //if there are questions remaining in the array
                if(currentQuestion !=2){
                    currentQuestion++;
                    console.log(currentQuestion)
                    setTimeout(function(){
                        nextQuestion();
                        clockReset();
                        clockStart();
                        gameTimeout = setTimeout(answerNone,30000);
                    },3000);
                }// if you have reached the end of your questions array 
                else{
                    showScore();
                    $("#gameReset").show();
                    gameRunning = false;
                }
            }else{
                console.log("answer was incorrect")
                incorrect++;
                showScore();
                //if there are questions remaining in the array
                if(currentQuestion !=2){
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
                    $("#gameReset").show();
                    gameRunning = false;
                }   
            }
        });
    }

    $("#gameReset").on("click", function() {
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
        if(currentQuestion != 2){
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
            gameRunning = false;
        }
    }
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