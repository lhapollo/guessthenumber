const num = Math.floor(Math.random() * 100) + 1;
// var out = document.getElementById('number');
// out.textContent = num;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (guess === num) {
    message.style.color = "green";
    message.textContent = "Congrats!";
  } else if (guess < num) {
    message.style.color = "red";
    message.textContent = "Too low. Try again.";
  } else {
    message.style.color = "red";
    message.textContent = "Too high. Try again.";
  }
}
