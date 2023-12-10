// Gera um número aleatório entre 1 e 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 10;
let guessedNumbers = [];

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    attempts++;
    guessedNumbers.push(guess);

    if (guess === secretNumber) {
        displayOutput(`Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas.`);
        displayHistory();
        resetGame();
    } else if (attempts === maxAttempts) {
        displayOutput(`Você atingiu o número máximo de tentativas. O número secreto era ${secretNumber}.`);
        displayHistory();
        resetGame();
    } else {
        const message = guess < secretNumber ? 'Muito baixo!' : 'Muito alto!';
        displayOutput(`Errado. ${message} Tente novamente.`);
        displayHistory();
    }
}

function displayOutput(message) {
    document.getElementById('output').innerHTML = message;
}

function displayHistory() {
    const history = guessedNumbers.join(', ');
    document.getElementById('history').innerHTML = `Histórico de Palpites: ${history}`;
}

function resetGame() {
    attempts = 0;
    guessedNumbers = [];
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;

    const playAgain = confirm('Deseja jogar novamente?');

    if (playAgain) {
        // Gera um novo número secreto e reinicia o jogo
        secretNumber = Math.floor(Math.random() * 100) + 1;
        displayOutput('Tente adivinhar o número entre 1 e 100:');
        document.getElementById('guessInput').disabled = false;
        document.querySelector('button').disabled = false;
    } else {
        displayOutput('Obrigado por jogar! Atualize a página para jogar novamente.');
    }
}