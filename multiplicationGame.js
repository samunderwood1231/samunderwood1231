function reset() {
    document.getElementById("newButton").style.display = "none";
    document.getElementById("factors").reset();
    let factor1 = (Math.random()).toFixed(1) * 10;
    let factor2 = (Math.random()).toFixed(1) * 10;
    document.forms["factors"].elements["factor1"].value = factor1;
    document.forms["factors"].elements["factor2"].value = factor2;
    document.forms["answerInput"].elements["answer"].value = " ";
}

function load() {
    reset();
    document.forms["answerInput"].addEventListener("submit", function(event) {
        event.preventDefault();
        score();
    });
    document.getElementById('newButton').onclick = function () { 
        reset();
    };
}

window.addEventListener("load", load);

function score() {
    let isCorrect = document.getElementById("isCorrect");
    factor1 = parseInt(document.forms["factors"].elements["factor1"].value);
    factor2 = parseInt(document.forms["factors"].elements["factor2"].value);
    
    let userAnswer = parseInt(document.forms["answerInput"].elements["answer"].value);
    if (isNaN(userAnswer)) {
       isCorrect.textContent = "Enter a number!";
    } else {
        rightAnswer = factor1 * factor2;
        if (userAnswer == rightAnswer) {
            isCorrect.textContent = "Very good!";
        document.getElementById("newButton").style.display = "";
        } else {
            isCorrect.textContent = "Incorrect, please try again!"
        }
    }
}



