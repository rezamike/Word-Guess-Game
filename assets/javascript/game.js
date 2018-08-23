var food = ["sushi", "pizza"];
var index = [];
var guessLeft = 10;
var guesses = [];
var correct = [];
var empty = [];


for (var i = 0; i < food[0].length; i++) {
    index.push(food[0].charAt(i));
}

for (var i = 0; i < index.length; i++) {
    empty.push("_");
}

document.getElementById("wordness").textContent = empty.join(" ");

document.onkeyup = function (event) {
    var balls = event.key.toLowerCase();

    if (index.indexOf(balls) >= 0) {
        correct.push(balls);
    }

    else {
        guessLeft--;
        guesses.push(balls);
        console.log(guesses, guessLeft)
    }

    if (guesses.length === index.length) {
        console.log("You won!");
    }
}