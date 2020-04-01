var p1Button = document.querySelector("#P1");
var p2Button = document.querySelector("#P2");
var resetButton = document.getElementById("Reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Player One Button: Update player 1 scores on click
//When player wins, score turns green
p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

//Player Two Button: Update player 1 scores on click
//When player wins, score turns green
p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

//Reset Button: Reset values on click
resetButton.addEventListener("click", function(){
  reset();
});

//Reset function: If user changes # of plays during game, reset all scores
function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
//Change event occurs whenever a change in value occurs
//When input value changes, update the maximum number of plays and winning score
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
