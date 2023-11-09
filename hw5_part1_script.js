// call validation methods
function getValues() {
    // add logic here to get the return values from each function as variables to pass to user constructor
    validateName();
    validateBoxes();
    validateButtons();
    validateSelect();

    if (validateBoxes() && validateButtons && validateName && validateSelect) {
        console.log('all fields pass validation');

    }
}


// constructor for the user object
class user {
    constructor(name, age, browser, genre) {
        this.name = name;
        this.age = age;
        this.browser = browser;
        this.genre = genre;
    }
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
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values.length === 0) {
        divID = document.getElementById("div-browser");
        divID.style.display = "block";

        return false;
    } else {

        return values;
    }
}

// input validation for radio buttons
// if validation error, returns false
// if no error, returns the input value (value of the checked button)
function validateButtons() {
    const radioButtons = document.querySelectorAll('input[name="age"]');
    let age;
    divID = document.getElementById("div-age");
    divID.style.display = "none";
    for (const radioButton of radioButtons) {
        if (!radioButton.checked) {
            divID = document.getElementById("div-age");
            divID.style.display = "block";
            return false;
        } else if (radioButton.checked) {
            age = radioButton.value;
            divID = document.getElementById("div-age");
            divID.style.display = "none";
            return age;
        }
    }
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

// called when page loads
function onLoad() {
    document.forms['movieForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        getValues();
    })
}

// add event listener on the window
window.addEventListener("load", onLoad);


