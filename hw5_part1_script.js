// add event listener on the window
window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {
    document.forms['movieForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        getValues();
    });
    
        // sets reset button to also hide div element showing successful submission
        let resetBtn = document.getElementById("reset-button");
        resetBtn.addEventListener("click", function () {
            document.getElementById("movieForm").reset();
            displayDiv("div-submit", false);
        });
        
    }



// shows and hides the associated div element
function displayDiv(divID, isShown) {
    let div = document.getElementById(divID);
    if (isShown) {
        div.style.display = "block";
    } else if (!isShown) {
        div.style.display = "none";
    }
}

// call validation methods
function getValues() {
    validateName();
    validateBoxes();
    validateButtons();
    validateSelect();

    /* if any of the validation methods return false (indicating an error), hide the div element 
         that indicates a successful form submission */ 
    if (!validateName() || !validateBoxes() || !validateButtons() || !validateSelect) {
        displayDiv("div-submit", false)
        
        return;
    } 
    // else display the successful form submission div element
    displayDiv("div-submit", true);
    
}

// server side input validation for text field
// if validation error, returns false
// if no error, returns the input value (string from text input)
function validateName() {
    let name = document.getElementById('name');
    validityState = name.validity;
    if (validityState.valueMissing) {
        name.setCustomValidity("Please enter your name");
        displayDiv("div-name", false);

        return false;
    } else if (validityState.typeMismatch) {
        name.setCustomValidity("Please enter your name");
        displayDiv("div-name", true);

        return false;
    } else {
        name.setCustomValidity("");
        name.reportValidity();
        displayDiv("div-name", false);
        

        return name;
    }
}

// input validation for checkboxes
// if validation error, returns false
// if no error, returns the input value array (values of the checked boxes)
function validateBoxes() {
    let checkboxes = document.querySelectorAll('input[name="browser"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values.length === 0) {
        displayDiv("div-browser", true);

        return false;
    } else {
        displayDiv("div-browser", false);

        return values;
    }
}

// input validation for radio buttons
// if validation error, returns false
// if no error, returns the input value (value of the checked button)
function validateButtons() {
    const radioButtons = document.querySelectorAll('input[name="age"]');
    let age;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            age = radioButton.value;
            displayDiv("div-age", false);

            return age;
        }
    }
    displayDiv("div-age", true);

    return false;
}

// input validation for selector menu
// if validation error, returns false
// if no error, returns the input value (selected menu item)
function validateSelect() {
    let genres = document.getElementById('genreSelect');
    let genre;
    for (let i = 1; i < genres.length; i++) {
        genre = genres[i];
        if (genre.selected) {

            return genre;
        } else {

            return false;
        };
    }
}
