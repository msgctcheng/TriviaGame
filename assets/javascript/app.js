//Initialize
var playerCash = 0;
var rightCounter = 0;
var wrongCounter = 0;
var countDown = 25;
var answerCheck = false;
var playerAnswer;
var questionValue;
//Timer
var startCount = false;
var setInter = setInterval(countFunction, 1000); 




//Hide everything but Start page

$(".podium").hide();
$(".boardWrapper").hide();
$(".ques12").hide();
$(".ques13").hide();
$(".ques14").hide();
$(".ques15").hide();
$(".ques16").hide();
$(".ques22").hide();
$(".ques23").hide();
$(".ques24").hide();
$(".ques25").hide();
$(".ques26").hide();
$(".ques32").hide();
$(".ques33").hide();
$(".ques34").hide();
$(".ques35").hide();
$(".ques36").hide();
$(".ques42").hide();
$(".ques43").hide();
$(".ques44").hide();
$(".ques45").hide();
$(".ques46").hide();
$(".ques52").hide();
$(".ques53").hide();
$(".ques54").hide();
$(".ques55").hide();
$(".ques56").hide();
$(".ques62").hide();
$(".ques63").hide();
$(".ques64").hide();
$(".ques65").hide();
$(".ques66").hide();

function countFunction() {
    if (startCount) {
        countDown = countDown - 1;
        if (countDown <= 0){
            countDown = 0;
            clearInterval(setInter);
            wrongCounter = wrongCounter + 1;
            playerCash = playerCash - parseInt(questionValue);
            $(".cashAmount").html("$ " + playerCash);
            $(".quest").hide();
            $(".boardWrapper").show();
            setInter = setInterval(countFunction, 1000);
            startCount = false;
           
        }
    }
    $(".timeLeft").html(countDown)
}

//Start Page
$(".startButton").click(function() {
    $(".startWrapper").hide();
    $(".boardWrapper").show();
    $(".podium").show();
    $(".cashAmount").html("$" + parseInt(playerCash));
});

//Game Board
$(".q12").click(function(){
    $(".boardWrapper").hide();
    $(".ques12").show();
    countDown = 25;
    startCount = true;
    questionValue = 200;
    countFunction();
    $(".q12").attr("src", "assets/images/blank.png");
});
$(".q22").click(function(){
    $(".boardWrapper").hide();
    $(".ques22").show();
    countDown = 25;
    startCount = true;
    questionValue = 200;
    countFunction();
    $(".q22").attr("src", "assets/images/blank.png");
});
$(".q32").click(function(){
    $(".boardWrapper").hide();
    $(".ques32").show();
    countDown = 25;
    startCount = true;
    questionValue = 200;
    countFunction();
    $(".q32").attr("src", "assets/images/blank.png");
});
$(".q42").click(function(){
    $(".boardWrapper").hide();
    $(".ques42").show();
    countDown = 25;
    startCount = true;
    questionValue = 200;
    countFunction();
    $(".q42").attr("src", "assets/images/blank.png");
});
$(".q52").click(function(){
    $(".boardWrapper").hide();
    $(".ques52").show();
    questionValue = 200;
    countDown = 25;
    startCount = true;
    countFunction();
    $(".q52").attr("src", "assets/images/blank.png");
});
$(".q62").click(function(){
    $(".boardWrapper").hide();
    $(".ques62").show();
    countDown = 25;
    startCount = true;
    questionValue = 200;
    countFunction();
    $(".q62").attr("src", "assets/images/blank.png");
});
$(".q13").click(function(){
    $(".boardWrapper").hide();
    $(".ques13").show();
    countDown = 25;
    startCount = true;
    questionValue = 400;
    countFunction();
    $(".q13").attr("src", "assets/images/blank.png");
});
$(".q23").click(function(){
    $(".boardWrapper").hide();
    $(".ques23").show();
    countDown = 25;
    startCount = true;
    $(".q23").attr("src", "assets/images/blank.png");
    questionValue = 400;
    countFunction();
});
$(".q33").click(function(){
    $(".boardWrapper").hide();
    $(".ques33").show();
    countDown = 25;
    startCount = true;
    questionValue = 400;
    countFunction();
    $(".q33").attr("src", "assets/images/blank.png");
});
$(".q43").click(function(){
    $(".boardWrapper").hide();
    $(".ques43").show();
    countDown = 25;
    startCount = true;
    questionValue = 400;
    countFunction();
    $(".q43").attr("src", "assets/images/blank.png");
});
$(".q53").click(function(){
    $(".boardWrapper").hide();
    $(".ques53").show();
    countDown = 25;
    startCount = true;
    questionValue = 400;
    countFunction();
    $(".q53").attr("src", "assets/images/blank.png");
});
$(".q63").click(function(){
    $(".boardWrapper").hide();
    $(".ques63").show();
    countDown = 25;
    startCount = true;
    questionValue = 400;
    countFunction();
    $(".q63").attr("src", "assets/images/blank.png");
});
$(".q14").click(function(){
    $(".boardWrapper").hide();
    $(".ques14").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q14").attr("src", "assets/images/blank.png");
});
$(".q24").click(function(){
    $(".boardWrapper").hide();
    $(".ques24").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q24").attr("src", "assets/images/blank.png");
});
$(".q34").click(function(){
    $(".boardWrapper").hide();
    $(".ques34").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q34").attr("src", "assets/images/blank.png");
});
$(".q44").click(function(){
    $(".boardWrapper").hide();
    $(".ques44").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q44").attr("src", "assets/images/blank.png");
});
$(".q54").click(function(){
    $(".boardWrapper").hide();
    $(".ques54").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q54").attr("src", "assets/images/blank.png");
});
$(".q64").click(function(){
    $(".boardWrapper").hide();
    $(".ques64").show();
    countDown = 25;
    startCount = true;
    questionValue = 600;
    countFunction();
    $(".q64").attr("src", "assets/images/blank.png");
});
$(".q15").click(function(){
    $(".boardWrapper").hide();
    $(".ques15").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q15").attr("src", "assets/images/blank.png");
});
$(".q25").click(function(){
    $(".boardWrapper").hide();
    $(".ques25").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q25").attr("src", "assets/images/blank.png");
});
$(".q35").click(function(){
    $(".boardWrapper").hide();
    $(".ques35").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q35").attr("src", "assets/images/blank.png");
});
$(".q45").click(function(){
    $(".boardWrapper").hide();
    $(".ques45").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q45").attr("src", "assets/images/blank.png");
});
$(".q55").click(function(){
    $(".boardWrapper").hide();
    $(".ques55").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q55").attr("src", "assets/images/blank.png");
});
$(".q65").click(function(){
    $(".boardWrapper").hide();
    $(".ques65").show();
    countDown = 25;
    startCount = true;
    questionValue = 800;
    countFunction();
    $(".q65").attr("src", "assets/images/blank.png");
});
$(".q16").click(function(){
    $(".boardWrapper").hide();
    $(".ques16").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q16").attr("src", "assets/images/blank.png");
});
$(".q26").click(function(){
    $(".boardWrapper").hide();
    $(".ques26").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q26").attr("src", "assets/images/blank.png");
});
$(".q36").click(function(){
    $(".boardWrapper").hide();
    $(".ques36").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q36").attr("src", "assets/images/blank.png");
});
$(".q46").click(function(){
    $(".boardWrapper").hide();
    $(".ques46").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q46").attr("src", "assets/images/blank.png");
});
$(".q56").click(function(){
    $(".boardWrapper").hide();
    $(".ques56").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q56").attr("src", "assets/images/blank.png");
});
$(".q66").click(function(){
    $(".boardWrapper").hide();
    $(".ques66").show();
    countDown = 25;
    startCount = true;
    questionValue = 1000;
    countFunction();
    $(".q66").attr("src", "assets/images/blank.png");
});

//Submit Button Answer Check
$(".subButton").click(function(){
   
    if ($("input[type=radio][name=answer1]:checked").val() == "1") {
        rightCounter = rightCounter + 1;
        playerCash = playerCash + parseInt(questionValue);
        $(".cashAmount").html("$" + playerCash);
        $(".quest").hide();
        $(".boardWrapper").show();
        countDown = 25;
        startCount = false;
    }
    if ($("input[type=radio][name=answer1]:checked").val() == "0") {
        countDown = 0;
    }

});





