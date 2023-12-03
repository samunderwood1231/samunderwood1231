//hw6_script1.js
// goes with hw7_part2.html

// add event listener on the window
window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {
    document.forms['inputForm'].addEventListener('submit', function (event) {
        event.preventDefault();

        if (validate('name-input') && validate('username-input')) {
            setCookie('name-input');
            setCookie('username-input');
            checkCookie();
        }
        
    });

    // sets reset button to also hide div element showing successful submission
    let resetBtn = document.getElementById("reset-button");
    resetBtn.addEventListener("click", function () {
        document.getElementById("inputForm").reset();
        const div = document.getElementById("div");
        div.textContent = "";
    });

}

/*
// validate user input
function validate() {
    var name = document.getElementById('name-input').value;
    if (name === "") {

        return false;
    }
    var uName = document.getElementById('username-input').value;
    if (uName === "") {
        return false;
    }
    return true;
}
*/

function validate(field) {
    field = document.getElementById(field);
    validityState = field.validity;
    if (validityState.valueMissing) {
        field.setCustomValidity("Please fill out this field");

        return false;
    } else if (validityState.typeMismatch) {
        field.setCustomValidity("Please fill out this field");

        return false;
    } else {
        field.setCustomValidity("");
        field.reportValidity();
        

        return true;
    }
}


// create cookies
function setCookie(elementID) {
    var cName = document.getElementById(elementID).id;
    var cValue = document.getElementById(elementID).value;
    document.cookie = cName + "=" + cValue + ";";
}
  
// get cookies from name value pairs
  function getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // validation; hide the input form if a cookie exists
  function checkCookie() {
    let user = getCookie("username-input");
    let name = getCookie("name-input");
    const formDiv = document.getElementById('form-div');
    const outputDiv = document.getElementById('output-div');
    if (user != "") {
      formDiv.style = 'display:none';
      outputDiv.textContent = 'Welcome back, '  + name + '\nYour username is ' + user;

    } else {
        outputDiv.style = 'display:none';
      }
    }
  



