
var clockRunning = false;
var time = 30;
var currentQuestion = 0;
var incorrect = 0;
var correct = 0; 
var gameRunning =true;
var answerSelected = false;
var timeVal = 30000;
var answerValue ="";

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

console.log(gameQuestions.length);
$(document).ready(function() {

        function timeUp(){
            $("#gameTimer").hide();
            incorrect++;
            currentQuestion++;
            console.log("current question " + currentQuestion);
            if(currentQuestion === 3){
                scoreBoard();
                $("#answer4").text("Please hit the reset button to play again!")
                clockStop();
                $("#gameReset").show();
                gameRunning =false;
            }else if (currentQuestion < 3){
                console.log("No answer selected")
                scoreBoard();
                setTimeout( function(){
                    time = 27;
                    timeVal = 30000;
                    $("#gameTimer").show();
                    nextQuestion();
                }, 3000 );
                timeVal = 30000;
                answerQuestion();
            
            }
        
        }

         $("#gameStart").on("click", function() {
            $("#gameStart").hide();
            nextQuestion();
            $("#gameQuest").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            clockStart();
            answerQuestion();
        });

    function answerQuestion(){
        if(gameRunning){
            $(".myanswer").on("click", function() {
                    clearTimeout(noAnswer);
                    answerSelected = true;
                    if(correctAnswers.includes($(this).text())){
                        correct++;
                        if(currentQuestion === 2){
                            $("#answer2").text("You are correct!");
                            scoreBoard();
                            $("#answer4").text("Please hit the reset button to play again!")
                            clockStop();  
                            $("#gameReset").show();
                            gameRunning =false;                  
                        }else{
                            currentQuestion++;
                            console.log("current question " + currentQuestion);
                            scoreBoard();
                            $("#answer2").text("You are correct!");
                            clockStop();
                            setTimeout(function(){
                                time = 27;
                                timeVal = 30000;
                                nextQuestion();  
                                clockStart(); 
                            },3000);
                            noAnswer = setTimeout(timeUp,timeVal);
                        }
                            
                    }else{
                        incorrect++
                        if(currentQuestion === 2){
                            switch(currentQuestion){
                                case 0:
                                    answerValue = "Jackie"
                                    break;
                                case 1:
                                    answerValue = "Pizza"
                                    break;
                                case 2:
                                    answerValue = "Brown"
                                    break;
                            }
                            scoreBoard();
                            $("#answer2").text("Wrong! The correct answer was: " + answerValue);
                            $("#answer4").text("Please hit the reset button to play again!")
                            clockStop();
                            $("#gameReset").show();
                            gameRunning =false;
                        }else{
                            switch(currentQuestion){
                                case 0:
                                    answerValue = "Jackie"
                                    break;
                                case 1:
                                    answerValue = "Pizza"
                                    break;
                                case 2:
                                    answerValue = "Brown"
                                    break;
                            }
                            currentQuestion++;
                            console.log("current question " + currentQuestion);
                            scoreBoard();
                            $("#answer2").text("Wrong! The correct answer was: " + answerValue);
                            clockStop();
                            setTimeout(function(){
                                time = 27;
                                timeVal = 30000;
                                nextQuestion(); 
                                clockStart();  
                            }, 3000 ); 
                            timeVal = 30000; 
                            noAnswer = setTimeout(timeUp,timeVal);
                        }  
                    }
        
            });
            if(!answerSelected){
                var noAnswer = setTimeout(timeUp,timeVal);
            }
        }else{

        }


    }

    $("#gameReset").on("click", function() {
        $("#gameReset").hide();
        time = 30;
        currentQuestion = 0;
        console.log(currentQuestion);
        incorrect = 0;
        correct = 0; 
        gameRunning =true;
        answerSelected = false;
        timeVal = 30000;
        answerValue ="";
        nextQuestion();
        $("#gameQuest").show();
        $("#answer1").show();
        $("#answer2").show();
        $("#answer3").show();
        $("#answer4").show();
        clockStart();
        noAnswer = setTimeout(timeUp,timeVal);
    });



function scoreBoard(){
    $("#mainQuestion").text("");
    $("#answer1").text("Answers Correct: " + correct)
    $("#answer2").text("")
    $("#answer3").text("Answers Incorrect: " + incorrect)
    $("#answer4").text("")
}


function nextQuestion(){
    $("#mainQuestion").text(gameQuestions[currentQuestion].statement)
    $("#answer1").text(gameQuestions[currentQuestion].answerOne)
    $("#answer2").text(gameQuestions[currentQuestion].answerTwo)
    $("#answer3").text(gameQuestions[currentQuestion].answerThree)
    $("#answer4").text(gameQuestions[currentQuestion].answerFour)
}

function clockStart() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function clockStop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }

function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
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