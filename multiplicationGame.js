function load() {
    document.forms["answer"].elements["isCorrect"].value = " ";
    document.getElementById("factors").reset();
    let factor1 = (Math.random()).toFixed(1) * 10;
    let factor2 = (Math.random()).toFixed(1) * 10;
    document.forms["factors"].elements["factor1"].value = factor1;
    document.forms["factors"].elements["factor2"].value = factor2;
    document.forms["answer"].elements["answer"].value = " ";
    try {
        document.body.removeChild(newButton);
    } catch (error) { }
}

window.addEventListener("load", load());

document.getElementById('submit').onclick = function () { score(); };
function score() {

    factor1 = parseInt(document.forms["factors"].elements["factor1"].value);
    factor2 = parseInt(document.forms["factors"].elements["factor2"].value);
    
    let userAnswer = parseInt(document.forms["answer"].elements["answer"].value);
    if (isNaN(userAnswer)) {
        document.forms["answer"].elements["isCorrect"].value = "Enter a number!";
    } else {
        rightAnswer = factor1 * factor2;
        if (userAnswer == rightAnswer) {
            document.forms["answer"].elements["isCorrect"].value = "Correct!";
            const newButton = document.createElement('button');
            newButton.textContent = 'Generate another problem!';
            newButton.id = "newButton";
            document.body.appendChild(newButton);
            document.getElementById('newButton').onclick = function () { load(); };
        } else {
            document.forms["answer"].elements["isCorrect"].value = "Incorrect, please try again!"
        }
    }
}



