
/////////// Welcome screen /////////////////////////
writeFancy('Hangman!'); 

function writeFancy(text) {
    
    var figlet = require('figlet');
    console.log(figlet.textSync(text, {
        font: 'colossal',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 90,
        whitespaceBreak: true
    }));
}
  ///////// array of words ///////////
const wordsArr = [
    'Italy', 'Japan', 'Ghana', 'Ukraine',
    'Greece', 'Netherlands', 'Korea',
    'China', 'Brazil', 'Argentina', 'Paraguay',
    'Chad', 'Germany'];

let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
let answerArr = [];
let lettersLeft = randomWord.length;
let attempts = 10;
const prompt = require('prompt-sync')();
var stillGoing = true;
var specialChar = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] != " ") {
        answerArr[i] = "*";
    }
}
     //////   Main   //////
function gameOn() {

    if (lettersLeft == 0) {
        console.log(randomWord);
        writeFancy('Well Done!')
        stillGoing = false;


    } else if (attempts == 0) {
        console.log('---- You have run out of guesses. ---- ');
        stillGoing = false;
    } else {
        console.log(answerArr.join(''));
        let guess = prompt('---- Enter guess. You have ' + attempts + ' attempts left. ---- ');

        if (specialChar.test(guess)) {
            console.log("---- invalid character ----");

        } else if (randomWord.indexOf(guess) === -1) {
            console.log('---- wrong guess ----');
            attempts--;
        }

        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j].toLowerCase() == guess.toLowerCase()) {
                answerArr[j] = guess.toLowerCase();
                lettersLeft--;

            }
        }
    }
}
while (stillGoing) {

    gameOn();
}







