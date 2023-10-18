// using the for statement, calculate the product and sum of every fourth integer from 5 to 25 inclusive and then display the results, along with some accompanying text.

// demonstrates for loop functionality

function forProduct(a, b) {
    let text = "";
    let product = 1;
    for (let i = a; i <= b; i = i + 4) {
        product = product * i;
        if (i < b) {
            text += `${i} * `;
        } else {
            text += `${i} = `;
        }
    }
    
    product = product.toLocaleString();
    forLoopPdt.textContent = text + product;
}

function forSum(a, b) {
    let text = "";
    let sum = 0;
    for (let i = a; i <= b; i = i + 4) {
        sum = sum + i;
        if (i < b) {
            text += `${i} + `;
        } else {
            text += `${i} = `;
        }
    }

    sum = sum.toLocaleString();
    forLoopSum.textContent = text + sum;
}

// demonstrates while loop functionality
function whileProduct(a, b) {
    let text = "";
    let product = 1;
    product = product * a;
    text += `${a} * `;
    do {
        a = a + 3;
        product = product * a;
        if (a < b) {
            text += `${a} * `;
        } else {
            text += `${a} = `;
        }
    } while (a < b)

    product = product.toLocaleString();
    whileLoopPdt.textContent = text + product;
}


function whileSum(a, b) {
    let text = "";
    let sum = 0;
    sum = sum + a;
    text += `${a} + `;
    do {
        a = a + 3;
        sum = sum + a;
        if (a < b) {
            text += `${a} + `;
        } else {
            text += `${a} = `;
        }
    } while (a < b)

    sum = sum.toLocaleString();
    whileLoopSum.textContent = text + sum;
}




function load() {
    forProduct(5, 25);
    forSum(5, 25);
    whileProduct(3, 18);
    whileSum(3, 18);
}

window.addEventListener("load", load);