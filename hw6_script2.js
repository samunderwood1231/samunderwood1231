// need to add:
// popup window
// to lowerCase method

//hw6_script1.js
// goes with hw6_part1.html

// add event listener on the window

window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {
    document.forms['inputForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        getValues();
    });

    // sets reset button to also hide div element showing successful submission
    let resetBtn = document.getElementById("reset-button");
    resetBtn.addEventListener("click", function () {
        document.getElementById("inputForm").reset();
        const div = document.getElementById("div");
        div.textContent = "";
        
    });
}

// call validation methods
function getValues() {
    const div = document.getElementById("div");
    let input = document.getElementById('input').value;
    let search = document.getElementById('searchKey').value;
    
    if (input === "") {
        let newWindow = window.open("", "error", "scrollbars=yes,resizable=yes,top=200,left=500,width=200,height=100");
        newWindow.document.write(`Please enter some text to search!<p>`);
        return;
    }
    if (search === "") {
        newWindow = window.open("", "error", "scrollbars=yes,resizable=yes,top=200,left=500,width=200,height=100");
        newWindow.document.write(`Please enter a search key!<p>`);
        return;
    }
        div.textContent = '';
        let charNum = countChar(input, search);
        div.textContent = `The character "${search}" appeared ${charNum} times`;
}
    

function countChar(input, searchKey) {
    let charCounter = 0;
    for (let i = 0; i < input.length; i++) {
        const thisChar = input[i];
        if (searchKey.toLowerCase() === thisChar.toLowerCase()) {
           charCounter++;
        }
    }
    return charCounter;
}



