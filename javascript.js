let playCount = 0;

function playGame(userChoice) {
  if (playCount >= 3) {
    document.getElementById('result').innerText = "Game over! You already played 3 rounds.";
    return;
  }

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  playCount++;

  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById('result').innerText = `Round ${playCount}: ${result}`;

  if (playCount === 3) {
    document.getElementById('result').innerText += "\nGame over! Thanks for playing.";
  }
}
