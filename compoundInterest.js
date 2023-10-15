

function addDescription() {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('Table: Principal balance by interest rate and year');
    // add the text node to the new div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
  }

// defines function to calculate compound interest
function interestCalc(principal, interestRate, years) {
    return amount = principal * (1 + interestRate / 100) ** (years);
}

// this will display the main table
function addTable() {

    // the outer loop creates three tables stacked together
    for (let i = 0; i < 3; i++) {
        const table = document.createElement('table');
        //table headers
        const header1 = document.createElement('td');
        header1.textContent = "Principal (USD)";
        table.appendChild(header1);

        const header2 = document.createElement('td');
        header2.textContent = "Rate (%)";
        table.appendChild(header2);

        const header3 = document.createElement('td');
        header3.textContent = "Year";
        table.appendChild(header3);

        // inner loop populates each table row
        for (let row = 0; row < 6; row++) {
            const tr = document.createElement('tr');

            const principalCol = document.createElement('td');
            // i + 5 refers to year, which depends which of the three "outer" tables we're in
            principalCol.textContent = interestCalc(1000, i + 5, row).toFixed(2);
            tr.appendChild(principalCol);

            const interestCol = document.createElement('td');
            // i + 5 refers to the interest rate, which depends which of the three "outer" tables we're in
            interestCol.textContent = i + 5;
            tr.appendChild(interestCol);

            const yearCol = document.createElement('td');
            yearCol.textContent = row;
            tr.appendChild(yearCol);

            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}

// when the page loads, the description text node is generated and the tables are drawn and populated
function load() {
    addDescription();
    addTable();
}

window.addEventListener('load', load);