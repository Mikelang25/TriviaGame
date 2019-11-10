
var clockRunning = false;
var time = 30;
var answersCorrect = 0;
var answersWrong = 0;
var currentQuestion = 0;
var incorrect = 0;
var correct = 0; 

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

var gameQuestions = [questionOne,questionTwo, questionThree]

$(document).ready(function() {


    $("#gameStart").on("click", function() {
        $("#gameStart").hide();
        
        generateQuestion(currentQuestion);
        currentQuestion++
        clockStart();
        setTimeout(timeUp,30000);
        answerQuestion();

    });

function answerQuestion(){
    $(".myanswer").on("click", function() {
        time = 30;
        nextQuestion();        
    });
}

    

    

function timeUp(){
    losses++
    time = 30;
    nextQuestion();
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
    currentQuestion++;
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