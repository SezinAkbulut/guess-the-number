document.addEventListener("DOMContentLoaded", function () {
    let computerNumber = Math.floor(Math.random() * 28) + 1;
    let counter = 0;
    const playButton = document.getElementById('playButton');
    const againButton = document.getElementById('againButton');
    const output = document.getElementById('outputText');

    playButton.addEventListener('click', checkNumber);
    againButton.addEventListener('click', playAgain);

    function checkNumber() {
        let input = parseInt(document.getElementById('userInput').value);
        

        if (input === computerNumber) {
            output.innerHTML = "Awesome! Your number was correct. You can be named many things, hungry not being one of them.";
            output.style.color = "green";
            playButton.disabled = true;
            againButton.disabled = true;
            againButton.disabled = false;
        } else if (input >= computerNumber - 2 && input <= computerNumber + 2) {
            output.innerHTML = "So close, but you just missed it! Are you in a class that started on the thirteenth or what?";
            output.style.color = "orange";
        } else {
            output.innerHTML = "Bummer... You guessed " + input + " and this is not the secret number";
            output.style.color = "red";
        }

        counter++;
        if (counter === 4) {
            alert("This was your last chance! The secret number was " +  computerNumber +  "." + " Please try again!") ;
            playButton.disabled = true;
            againButton.disabled = false;
        }
    }

    function playAgain() {
        computerNumber = Math.floor(Math.random() * 28) + 1 ;
        counter = 0;
        output.innerHTML = "Guess a number";
        playButton.disabled = false;
        againButton.disabled = true; 
    }
});