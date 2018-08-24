var food = ["superpoop", "pizza"];
var guessLeft = 9;
var round = 0;
var letters = [];


for (var i = 0; i < food[round].length; i++) {
    letters.push(food[round].charAt(i));
}

function replaceWord() {
    var slots = [];

    for (var j = 0; j < letters.length; j++) {
        slots.push("_");
    }
    return slots;
}

function pickWord() {
    letters = [];
    if (round < food.length) {
        for (var i = 0; i < food[round].length; i++) {
            letters.push(food[round].charAt(i));
        }
    }
}

var display = replaceWord();

document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();

    for (i = 0; i < letters.length; i++) {

        if (guess === letters[i]) {
            display[i] = guess;
        }
    }

    if (display.indexOf("_") === -1) {
        alert("you won!");
        round++;
        display = replaceWord();
        pickWord();
    }

    console.log(guess);
    console.log(display);

    // else {
    //     guessLeft--;
    //     alert("Game The Fuck Over, Dawg!");
    // }
}

document.getElementById("col2").textContent = display;