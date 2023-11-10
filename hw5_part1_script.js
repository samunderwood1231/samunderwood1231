// called when page loads
function onLoad() {
    document.forms['movieForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        getValues();
    })

}

function displayDiv(divID, isShown) {
    let div = document.getElementById(divID);
    if (isShown) {
        div.style.display = "block";
    } else if (!isShown) {
        div.style.display = "none";
    }
}

// add event listener on the window
window.addEventListener("load", onLoad);


// call validation methods
function getValues() {
    validateName();
    validateBoxes();
    validateButtons();
    validateSelect();

    if (!validateName() || !validateBoxes() || !validateButtons() || !validateSelect) {
        console.log('one of the fields was not filled out');
        document.getElementById("div-submit").style.display = "none";
        return;
    } console.log('every field passed validation');
    document.getElementById("div-submit").style.display = "block";
    
}

// server side input validation for text field
// if validation error, returns false
// if no error, returns the input value (string from text input)
function validateName() {
    let name = document.getElementById('name');
    validityState = name.validity;
    if (validityState.valueMissing) {
        name.setCustomValidity("Please enter your name");
        document.getElementById("div-name").style.display = "block";

        return false;
    } else if (validityState.typeMismatch) {
        name.setCustomValidity("Please enter your name");
        document.getElementById("div-name").style.display = "block";

        return false;
    } else {
        name.setCustomValidity("");
        name.reportValidity();
        document.getElementById("div-name").style.display = "none";
        

        return name;
    }
}

// input validation for checkboxes
// if validation error, returns false
// if no error, returns the input value array (values of the checked boxes)
function validateBoxes() {
    let checkboxes = document.querySelectorAll('input[name="browser"]:checked');
    const divID = document.getElementById("div-browser");
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values.length === 0) {
        divID.style.display = "block";

        return false;
    } else {
        divID.style.display = "none";

        return values;
    }
}

// input validation for radio buttons
// if validation error, returns false
// if no error, returns the input value (value of the checked button)
function validateButtons() {
    const radioButtons = document.querySelectorAll('input[name="age"]');
    let age;
    const divID = document.getElementById("div-age");
    divID.style.display = "none";
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            age = radioButton.value;
            divID.style.display = "none";

            return age;
        }
    }
    divID.style.display = "block";

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



