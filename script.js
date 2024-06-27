let points = 0;
let colors = ["red", "green", "blue", "yellow", "pink"];
let currentColorIndex = 0;
let attempts = 0;

function checkAnswer() {
    let input = document.getElementById('colorInput').value.trim().toLowerCase();
    let currentColor = colors[currentColorIndex];

    if (input === currentColor) {
        points++;
        document.getElementById('points').textContent = "Points: " + points;
        currentColorIndex++;
        attempts = 0;

        if (currentColorIndex < colors.length) {
            document.getElementById('colourr').style.backgroundColor = colors[currentColorIndex];
            document.getElementById('colorInput').value = '';
        } else {
            checkResults();
            resetTest();
        }
    } else {
        attempts++;
        if (attempts < 2) {
            alert("Incorrect. Try again.");
        } else {
            currentColorIndex++;
            attempts = 0;

            if (currentColorIndex < colors.length) {
                alert("Incorrect. Moving to the next color.");
                document.getElementById('colourr').style.backgroundColor = colors[currentColorIndex];
                document.getElementById('colorInput').value = '';
            } else {
                checkResults();
                resetTest();
            }
        }
    }
}

function checkResults() {
    if (points >= 3) {
        alert("Challenge Completed! You are definitely not colorblind.");
    } else {
        window.location.href = "failure.html";
    }
}

function resetTest() {
    points = 0;
    currentColorIndex = 0;
    attempts = 0;
    document.getElementById('points').textContent = "Points: " + points;
    document.getElementById('colourr').style.backgroundColor = colors[currentColorIndex];
    document.getElementById('colorInput').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('colourr').style.backgroundColor = colors[currentColorIndex];
});
