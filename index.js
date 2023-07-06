var circle = document.getElementById("circle");
var scoreValue = document.getElementById("score-value");
var timerValue = document.getElementById("timer-value");
var score = 0;
var timerSeconds = 20;
var timerInterval;

circle.addEventListener("click", function() {
    score++;
    scoreValue.textContent = score;
    circle.style.backgroundColor = getRandomColor();
});

function moveCircle() {
    var containerWidth = document.getElementById("game-container").offsetWidth;
    var containerHeight = document.getElementById("game-container").offsetHeight;

    var circleWidth = circle.offsetWidth;
    var circleHeight = circle.offsetHeight;

    var maxLeft = containerWidth - circleWidth;
    var maxTop = containerHeight - circleHeight;

    var newLeft = Math.floor(Math.random() * maxLeft);
    var newTop = Math.floor(Math.random() * maxTop);

    circle.style.left = newLeft + "px";
    circle.style.top = newTop + "px";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startGame() {
    score = 0;
    timerSeconds = 20;
    scoreValue.textContent = score;
    timerValue.textContent = timerSeconds;
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        timerSeconds--;
        timerValue.textContent = timerSeconds;

        if (timerSeconds === 0) {
            clearInterval(timerInterval);

            if (score !== 20) {
                alert("Time's up! Please try again.");
            } else {
                alert("Congratulations! You've won the game.");
            }
        }
    }, 1000);

    moveCircle();
}

startGame();
setInterval(moveCircle, 1000);
