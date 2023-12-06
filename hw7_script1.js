//hw6_script1.js
// goes with hw7_part1.html

// add event listener on the window
window.addEventListener("load", onLoad);

// register event listener on submit button & bind submits button to getValues()
function onLoad() {

    const radios = document.querySelectorAll('input[name="color"]');
    const ulBox = document.querySelectorAll('input[name="underline"]');
    const div = document.getElementById('output-div');


    // change font decoration, weight, and style
    document.querySelector("input[id=underline]")
        .addEventListener('change', function () {
            if (this.checked) {
                div.style.textDecoration = "underline";
            } else {
                div.style.textDecoration = "";
              }
        });

    document.querySelector("input[id=bold]")
        .addEventListener('change', function () {
            if (this.checked) {
                div.style.fontWeight = "bold";
            } else {
                div.style.fontWeight = "";
            }
        });

    document.querySelector("input[id=italic]")
        .addEventListener('change', function () {
            if (this.checked) {
                div.style.fontStyle = "italic";
            } else {
                div.style.fontStyle = "";
            }
        });


    // change background color
    for (radio in radios) {
        radios[radio].onclick = function () {
            if (this.value != "reset") {
                div.style.backgroundColor = this.value;
            } else {
                div.style.backgroundColor = "lightgray";
            }
        }
    }

        // change font size
        let sizes = document.getElementById('onclickSelect');
            sizes.onchange = function () {
                for (const size of sizes) {
                   if (size.selected && size.value !== "") {
                    div.style.fontSize = size.value;
                   }
            };
        }

}