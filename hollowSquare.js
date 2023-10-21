// gets user input, checks it, and returns false if the input is invalid, otherwise returns the valid input. 
function getInput() {
    let size = document.forms['input'].elements['squareSize'].value;
    if (size < 2 || size > 10 || isNaN(size) || size == "") {
        showError();

        return false;
    } else {
        hideError();

        return size;
    }
}

// this will display the main table
function drawSquare() {
    const tableDiv = document.createElement('tableDiv');
    let size = getInput();
    const table = document.createElement('table');

    if (getInput()) { // if no error
        for (let row = 0; row < size; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < size; col++) {
                const td = document.createElement('td');

                if (row == 0 || row == size - 1 || col == 0 || col == size - 1) {
                    td.textContent = '*';
                } else td.textContent = '';
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}

// shows the error message div
function showError() {
    let x = document.getElementById("error");
    x.style.display = "block";
    errorFlag = true;
}

// hides the error message div (hidden by default)
function hideError() {
    let x = document.getElementById("error");
    x.style.display = "none";
}

function eventListeners() {
    document.forms['input'].addEventListener('submit', function (event) {
        event.preventDefault();
    });
    document.getElementById('submit').onclick = getInput();
}

// called when user clicks the button
function buttonClick() {
    drawSquare();
}

// called when page loads
function load() {
    document.forms['input'].addEventListener('submit', function (event) {
        event.preventDefault();
        buttonClick();
    });
}

window.addEventListener("load", load);
