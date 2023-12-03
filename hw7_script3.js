//hw6_script3.js
// goes with hw7_part3.html

// add event listener on the window
window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {
    document.forms['inputForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        validate();
    });

    // sets reset button to also hide div element showing successful submission
    let resetBtn = document.getElementById("reset-button");
    resetBtn.addEventListener("click", function () {
        document.getElementById("inputForm").reset();
        const div = document.getElementById('div-error');
        div.textContent = "";
    });

}

// call validation methods
function validate() {
    const div = document.getElementById('div-error');
    let input = document.getElementById('phoneNum').value;
    $('input[name="phoneNum"]').mask('00/00/0000');

    if (input === "") {
        div.textContent = 'Please enter a phone number';
    } else {
        var reg = /^\(?(\d{3})\)? (\d{3})[-](\d{4})$/;

        if (reg.test(input)) {
            let input = document.getElementById('phoneNum').value;
            const areaCode = input.slice(1, 4);
            const firstThree = input.slice(6, 9);
            const lastFour = input.slice(10, 15);
            div.textContent = '';
            document.forms['inputForm'].elements['areaCode'].value = areaCode;
            document.forms['inputForm'].elements['firstThree'].value = firstThree;
            document.forms['inputForm'].elements['lastFour'].value = lastFour;
        } else {
            div.textContent = 'Please enter a phone number in the format: (999) 999-9999';
            document.forms['inputForm'].elements['areaCode'].value = '';
            document.forms['inputForm'].elements['firstThree'].value = '';
            document.forms['inputForm'].elements['lastFour'].value = '';
        }
    }
}