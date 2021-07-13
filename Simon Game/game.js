var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];

var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
    
})


$('.btn').click(function () {
    var userChosenColor = $(this).attr("id");//jis button pr user ne click kiya us color ki id is me store ho gyi h 
    userClickedPattern.push(userChosenColor);
    //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1); //iss me last answer stored h 

    
})

var checkAnswer = function(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){ 
     console.log("success"); // matlab jo chamka h usi pr click kiya h toh success ho jyga
 
     if(userClickedPattern.length === gamePattern.length){ //agar userclickedpattern or gamepattern li length same h matlab dono me no. of elements of arrays same h toh ye cond true h
 
         setTimeout(() => {
             nextSequence(); // fir aap nextsequence function chala do // agar 3 bar lagatar answer shi nhi ata h toh
         }, 1000);
 
     }
 
    }
    else{
        playSound("wrong");
        $('body').addClass("game-over");
        setTimeout(() => {
            $('body').removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
 
 }
 var startOver = function(){
    level = 0;
    gamePattern = [];
    started = false;
  
 }

var nextSequence = function () {
    userClickedPattern = [];//Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next leve
   // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level = level + 1;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4); // yaha pr ham ne random number le liya h 

    var randomChosenColor = buttonColours[randomNumber]; // isme random color store ho gaya h

    gamePattern.push(randomChosenColor); // yaha pr khali array me hum ne random color push kr diya h 
    $("#" + randomChosenColor).fadeIn(1000).fadeOut(1000).fadeIn(1000); // jo bhi random color aya h usme ham ne fadein fade out vali property laga di h har bar yeh function chalne pr ek naya array generate hoga or usme sirf ek color hoga or usme hi fadein or fadeout vali property lag jaygi 

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}

var playSound = function (name) {

    var audio = new Audio("sounds/" + name + ".mp3"); // isse hamare pass sounds ka accces aa jyga or jo color ayga uske nam se ham ne soud ko save kr rakha h or voh sound play ho jayga yeh function ko call krke
    audio.play();
}

// sab se pehele box fade in fadeout hoga or fir jaise hi hum us or cick karenge toh us color ka sound ayga

var animatePress = function (currentColour) {
    $('#' + currentColour).addClass('pressed'); //we are adding the class pressed which gives box shadow to the box which er clicked at the same time it will give us the sound of the box which we clicked

    setInterval(() => {
        $('#' + currentColour).removeClass('pressed');
    }, 200);

}



