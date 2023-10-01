function load() {
    document.forms["answerInput"].elements["isCorrect"].value = " ";
    document.getElementById("factors").reset();
    let factor1 = (Math.random()).toFixed(1) * 10;
    let factor2 = (Math.random()).toFixed(1) * 10;
    document.forms["factors"].elements["factor1"].value = factor1;
    document.forms["factors"].elements["factor2"].value = factor2;
    document.forms["answerInput"].elements["answer"].value = " ";
    try {
        document.body.removeChild(newButton);
    } catch (error) { }
}

window.addEventListener("load", load());

document.getElementById('submit').onclick = function () { score(); };
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
            const newButton = document.createElement('button');
            newButton.textContent = 'Generate another problem!';
            newButton.id = "newButton";
            document.body.appendChild(newButton);
            document.getElementById('newButton').onclick = function () { load(); };
        } else {
            isCorrect.textContent = "Incorrect, please try again!"
        }
    }
}



