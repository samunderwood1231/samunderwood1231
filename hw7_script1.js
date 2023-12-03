//hw6_script1.js
// goes with hw7_part1.html

// add event listener on the window
window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {
    document.forms['inputForm'].addEventListener('submit', function (event) {
        event.preventDefault();
        getValues();
        calculate();
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
    const asFloat = parseFloat(input);

    if (isNaN(asFloat)) {
       div.style = 'color:Red';
       div.textContent = `You must enter a number with at least four decimal places.`;
        return false; 
    } else {
        const decimals = input.split('.')[1];
        if (decimals == null) {
            div.style = 'color:Red';
            div.textContent = `You must enter a number with at least four decimal places. The value you entered has no decimal places!`;
            return false;
        } else if (decimals.length < 4) {
            div.style = 'color:Red';
            div.textContent = `You must enter a number with at least four decimal places. The value you entered has ${decimals.length} decimal places!`;
            return false;
        } 
        return asFloat;
    }
}

    // calculates values and print result onscreen
    function calculate() {
        
        const div = document.getElementById("div");
        let input = getValues();

        if(input === false) {
            return;
        }
    

        // round the floating-point number to the nearest integer
        let int = round(input, 0);

        // calculate the square root of the floating-point number and round it to an integer
        let roundedRoot = round(root(input), 0);

        // round the floating-point number to the nearest tenths position
        let tenths = round(input, 1);

        // round the floating-point number to the nearest hundredths position
        let hundredths = round(input, 2);

        // round the floating-point number to the nearest thousandths position
        let thousandths = round(input, 3);

        // print result onscreen
        div.style = "color:green";
        div.textContent = `Nearest int: ${int}\nSquare root rounded to nearest int: ${roundedRoot}\nRounded to tenths place: ${tenths}\nRounded to hundredths place: ${hundredths}\nRounded to thousandths place: ${thousandths}`;

        return;
        }
    

    function root(radicand) {
        return Math.sqrt(radicand);
    }

    function round(num, places) {
        return num.toFixed(places);
    }

