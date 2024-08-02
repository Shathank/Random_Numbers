let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('You Won 🏆');
        document.querySelector('.check').style.display = 'none';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#e14c3c';
            displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
        } else {
            displayMessage('You Lost 💥\nTry Again');
            document.querySelector('.check').style.display = 'none';
        }
    }
    console.log(guess);
});

document.querySelector('.again').addEventListener('click', () => {
    resetGame();
});

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function resetGame() {
    secretNumber = generateSecretNumber();
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.check').style.display = 'block';
}
