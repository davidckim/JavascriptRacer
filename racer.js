var q = 0
var p = 0
var wins1 = 0
var wins2 = 0
playSpeed = 1

function moveRacer1() {
  var carOne = document.querySelector(".car1");
  if(carOne.style.left < "85%") {
    carOne.style.left = q + "%";
    q += 5;
  }
  else{
  	alert("Player 1 is the winner!!")
    wins1++
    carWin();
  	resetRacers();
  };
};

function moveRacer2() {
  var carTwo = document.querySelector(".car2");
  if(carTwo.style.left < "85%") {
    carTwo.style.left = p + "%";
    p += 5;
  }
  else{
  	alert("Player 2 is the winner!!")

    wins2++
    carWin();
  	resetRacers();
  };
};

function clickRace(event) {
  var audio = new Audio('carengine.mp3');
  audio.play();
  var keyStroke = String.fromCharCode(event.keyCode)
  if(keyStroke=="Q"){
    moveRacer1();
    };
  if(keyStroke=="P"){
  	moveRacer2();
    };
};

function resetRacers() {
  document.querySelector(".car1").style.left = "0%";
  document.querySelector(".car2").style.left = "0%";
  q = 0;
  p = 0;
};

function carWin() {
  document.querySelector(".wins").innerHTML = "Player 1 Wins: "+ wins1 + "<br><br>" + "Player 2 Wins: "+ wins2
}


// var isPlaying = function(sound) { 
//   return sound.paused;
// }


// var play_sound = function(sound) {
//   if (isPlaying(sound) == true){
//     sound.play();
//   };
//   if (isPlaying(sound) == false){
//     sound.playbackRate = playSpeed += 0.1
//     console.log(sound.playbackRate)
//   };
// }

window.addEventListener("keydown", clickRace, true)



