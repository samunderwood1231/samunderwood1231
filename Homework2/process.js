document.getElementById('process').onclick = function () { process(); };

function process() {
       let int1 = parseInt(document.forms["numInput"].elements["int1"].value);
    let int2 = parseInt(document.forms["numInput"].elements["int2"].value);
    let int3 = parseInt(document.forms["numInput"].elements["int3"].value);
    if (isNaN(int1) || isNaN(int2) || isNaN(int2)) {
        alert("Please enter three integers!")
        console.log("one or more inputs was NaN")
    } else {
        console.log("Processing...")
        let sum = int1 + int2 + int3;
        let product = int1 * int2 * int3;
        let average = parseFloat(sum / 3);
        let min = Math.min(int1, int2, int3);
        let max = Math.max(int1, int2, int3);
        document.forms["numInput"].elements["sum"].value = sum;
        document.forms["numInput"].elements["product"].value = product;
        document.forms["numInput"].elements["average"].value = average;
        document.forms["numInput"].elements["min"].value = min;
        document.forms["numInput"].elements["max"].value = max;
    }
}
