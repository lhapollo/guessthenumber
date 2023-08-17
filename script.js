const num = Math.floor(Math.random() * 100) + 1;
var numGuesses = 1;
// var out = document.getElementById('number');
// out.textContent = num;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  

  if (guess === num) {
    message.style.color = "rgb(59, 217, 89)";
    message.textContent = "Congrats! That was the Number! Guessed in " + numGuesses + (numGuesses == 1? " try!": " tries!");
  } else if (guess < num) {
    message.style.color = "rgb(217, 72, 44)";
    message.textContent = "Too low. Try again.";
    numGuesses++;
  } else {
    message.style.color = "rgb(217, 72, 44)";
    message.textContent = "Too high. Try again.";
    numGuesses++;
  }
}
