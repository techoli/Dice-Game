"use strict";

let message = document.querySelector(".message");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

let Rolldice = document.querySelector(".roll_dice");
let Holldice = document.querySelector(".hold");
let Newgame = document.querySelector(".restart_game");
let Dimage = document.querySelector(".image");

let Scoreid, Valid, playerval, Score, Val, playing;

const initializegame = function () {
  Scoreid = 1;
  Valid = 1;
  playerval = 1;
  Score = 0;
  Val = 0;
  // let player =1;
  playing = true;

  document.getElementById("score1").textContent = 0;
  document.getElementById("score2").textContent = 0;
  document.getElementById("val1").textContent = 0;
  document.getElementById("val2").textContent = 0;

  Dimage.classList.add("hidden");

  document.querySelector(".player1").classList.remove("winner");
  document.querySelector(".player2").classList.remove("winner");
  player1.classList.add("inopacity");
  player2.classList.remove("inopacity");
  message.classList.add("hidden");
};
initializegame();

const switcplayers = function () {
  player1.classList.toggle("inopacity");
  player2.classList.toggle("inopacity");
  Val = 0;
  document.getElementById(`val${Valid}`).textContent = 0;
  Valid = Valid === 1 ? 2 : 1;
  Scoreid = Scoreid === 1 ? 2 : 1;
  playerval = playerval === 1 ? 2 : 1;
};

Rolldice.addEventListener("click", function () {
  if (playing) {
    //rolldice
    var diceValue = Math.trunc(Math.random() * 6) + 1;
    Dimage.src = `images/dice-${diceValue}.png`;
    //show image
    Dimage.classList.remove("hidden");
    //check if 1
    if (diceValue !== 1) {
      Val += diceValue;
      document.getElementById(`val${Valid}`).textContent = Val;
      console.log(diceValue);
      //if 1 switch to another player
    } else {
      switcplayers();
    }
  }
});

Holldice.addEventListener("click", function () {
  if (playing) {
    //add score to initial score if any and display
    Score += Val;
    document.getElementById(`score${Scoreid}`).textContent = Score;
    //check if score is > 10 and assign winner
    if (Score >= 10) {
      document.querySelector(`.player${playerval}`).classList.add("winner");
      player1.classList.remove("inopacity");
      playing = false;
      //else assign winner
    } else {
      switcplayers();
    }
  }
});

Newgame.addEventListener("click", initializegame);
