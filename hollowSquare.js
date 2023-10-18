

function getInput() {
    let size = document.forms['input'].elements['squareSize'].value;
    if (size <= 0 || size > 5) {
        document.forms['input'].elements['squareSize'].value = "Please enter an integer between 1 and 5";
    } else return size;
}

// this will display the main table
function drawSquare() {

    const tableDiv = document.createElement('tableDiv');

    let size = getInput();

    const table = document.createElement('table');

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

function eventListeners() {
    document.forms['input'].addEventListener('submit', function (event) {
        event.preventDefault();
    });
    document.getElementById('submit').onclick = getInput();
}

// this function is called when the user clicks the button
function buttonClick() {
    drawSquare();
}


function load() {
    document.forms['input'].addEventListener('submit', function (event) {
        event.preventDefault();
        buttonClick();
    });
}

window.addEventListener("load", load);

window.addEventListener('load', load);