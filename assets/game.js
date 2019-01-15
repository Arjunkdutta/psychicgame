var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;

//computer selects a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector('.guesser').style.display = "none";
//Allows the user 9 guesses

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when reset 
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    setTimeout(function() { document.querySelector('.guesser').style.display = 'none'; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//key released becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("try again");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector('.guesser').style.display = '';
                document.querySelector('.guesser').style.height = '4em';
                document.querySelector('.guesser').innerHTML = "Correct! " + userGuess + " was the letter I was thinking of!";
                reset();
            }
        } else if (guessesLeft == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('.guesser').style.display = '';
            document.querySelector('.guesser').innerHTML = "Wrong answer! I was thinking of  " + letterToGuess;
            // To call the reset. 
            reset();

        }
        return false;
    } else {
        alert("error");
    }

};