
var clockRunning = false;
var time = 30;
var answersCorrect = 0;
var answersWrong = 0;



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

gameQuestions = [questionOne,questionTwo, questionThree]

$(document).ready(function() {


    $("#gameStart").on("click", function() {

      for(var q=0; q < gameQuestions.length; q++){  
        generateQuestion(0);
        clockStart();
      }
    
    
    
    
    
    
    
    
    
    
    
    });







function generateQuestion(i){
    var newQues = $("<div>"); 
    newQues.addClass("question");
    newQues.text(gameQuestions[i].statement)
    $("#gameQuest").append(newQues)

    var quesAnswer = $("<div>")
    quesAnswer.addClass("answer")
    quesAnswer.text(gameQuestions[i].answerOne)
    $("#firstAnswer").append(quesAnswer)

    quesAnswer = $("<div>")
    quesAnswer.addClass("answer")
    quesAnswer.text(gameQuestions[i].answerTwo)
    $("#secondAnswer").append(quesAnswer)
    
    quesAnswer = $("<div>")
    quesAnswer.addClass("answer")
    quesAnswer.text(gameQuestions[i].answerThree)
    $("#thirdAnswer").append(quesAnswer)
    
    quesAnswer = $("<div>")
    quesAnswer.addClass("answer")
    quesAnswer.text(gameQuestions[i].answerFour)
    $("#fourthAnswer").append(quesAnswer)

}

function clockStart() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
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