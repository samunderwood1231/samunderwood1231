function validate() {
   // check name

   // check browser

   // check age

   // check genre
}

function load() {
    reset();
        document.forms['submit'].addEventListener('submit', function(event) {
        event.preventDefault();
        validate();
    });
}

window.addEventListener('load', load);

function score() {
    let isCorrect = document.getElementById('isCorrect');
    factor1 = parseInt(document.forms['factors'].elements['factor1'].value);
    factor2 = parseInt(document.forms['factors'].elements['factor2'].value);
    
    let userAnswer = parseInt(document.forms['answerInput'].elements['answer'].value);
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