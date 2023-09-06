document.getElementById('process').onclick = function () { process(); };

function process() {
       let int1 = parseInt(document.forms["numInput"].elements["int1"].value);
    let int2 = parseInt(document.forms["numInput"].elements["int2"].value);
    let int3 = parseInt(document.forms["numInput"].elements["int3"].value);
    if (isNaN(int1) || isNaN(int2) || isNaN(int2)) {
        document.forms["numInput"].elements["sum"].value = "Please enter an integer!";
        document.forms["numInput"].elements["product"].value = "Please enter an integer!";
        document.forms["numInput"].elements["average"].value = "Please enter an integer!";
        document.forms["numInput"].elements["min"].value = "Please enter an integer!";
        document.forms["numInput"].elements["max"].value = "Please enter an integer!";
        console.log("one or more inputs was NaN")
    } else {
        console.log("Processing...")
        let sum = int1 + int2 + int3;
        let product = int1 * int2 * int3;
        let average = parseFloat(sum / 3);
        let min = Math.min(int1, int2, int3);
        let max = Math.max(int1, int2, int3);
        document.forms["numInput"].elements["numOutput"].value = `Sum: ${sum}\nProduct: ${product}\nAverage: ${average}\nMin value: ${min}\nMax value: ${max}`;
    }
}
