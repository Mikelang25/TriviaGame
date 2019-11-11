
var clockRunning = false;
var time = 30;
var currentQuestion = 0;
var incorrect = 0;
var correct = 0; 
var gameRunning =true;

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


         $("#gameStart").on("click", function() {
            $("#gameStart").hide();
            nextQuestion();
            $("#mainQuestion").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            clockStart();
            answerQuestion();
        });

    function answerQuestion(){
        if(currentQuestion < 3){
            $(".myanswer").on("click", function() {
                    if(correctAnswers.includes($(this).text())){
                        correct++;
                        if(currentQuestion === 2){
                            scoreBoard();
                            $("#answer4").text("Please hit the reset button to play again!")
                            $("#gameTimer").hide();
                            clockStop();  
                            gameRunning =false;                  
                        }else{
                            currentQuestion++;
                            console.log("current question " + currentQuestion);
                            scoreBoard();
                            $("#gameTimer").hide();
                            setTimeout( function(){
                                time = 30;

                                nextQuestion();  
                                $("#gameTimer").show(); 
                            }, 5000 );
                        }
                            
                    }else{
                        incorrect++
                        if(currentQuestion === 2){
                            scoreBoard();
                            $("#answer4").text("Please hit the reset button to play again!")
                            $("#gameTimer").hide();
                            clockStop();
                        }else{
                            currentQuestion++;
                            console.log("current question " + currentQuestion);
                            scoreBoard();
                            $("#gameTimer").hide();
                            setTimeout( function(){
                                time = 30;
                                nextQuestion(); 
                                $("#gameTimer").show();  
                            }, 5000 );  
                        }  
                    }
        
            });
            setTimeout(timeUp,32000);
        }else{
            
        }

    }





function timeUp(){
    currentQuestion++
    console.log("current question " + currentQuestion);
    if(currentQuestion === 3){
        incorrect++
        scoreBoard();
        $("#answer4").text("Please hit the reset button to play again!")
        $("#gameTimer").hide();
        clockStop();
    }else if (currentQuestion < 3){
        scoreBoard();
        setTimeout( function(){
            time = 30;
            nextQuestion();
        }, 5000 );
    }

}

function scoreBoard(){
    $("#mainQuestion").text("");
    $("#answer1").text("Answers Correct: " + correct)
    $("#answer2").text("")
    $("#answer3").text("Answers Incorrect: " + incorrect)
    $("#answer4").text("")
}


function generateQuestion(i){
    var newQues = $("<div>"); 
    newQues.addClass("question");
    newQues.attr("id","mainQuestion")
    newQues.text(gameQuestions[i].statement)
    $("#gameQuest").append(newQues)

    var quesAnswer = $("<div>")
    quesAnswer.attr("id","answer1")
    quesAnswer.addClass("myanswer")
    quesAnswer.text(gameQuestions[i].answerOne)
    $("#answers").append(quesAnswer)

    var quesAnswer1 = $("<div>")
    quesAnswer1.attr("id","answer2")
    quesAnswer1.addClass("myanswer")
    quesAnswer1.text(gameQuestions[i].answerTwo)
    $("#answers").append(quesAnswer1)
    
    var quesAnswer2 = $("<div>")
    quesAnswer2.attr("id","answer3")
    quesAnswer2.addClass("myanswer")
    quesAnswer2.text(gameQuestions[i].answerThree)
    $("#answers").append(quesAnswer2)
    
    var quesAnswer3 = $("<div>")
    quesAnswer3.attr("id","answer4")
    quesAnswer3.addClass("myanswer")
    quesAnswer3.text(gameQuestions[i].answerFour)
    $("#answers").append(quesAnswer3)

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

function threeSeconds() {

  console.log("5 seconds left");
}

});