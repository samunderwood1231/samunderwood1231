document.getElementById('convert').onclick = function(){convert();};
function convert() {

 
    // variables


    let usd = parseFloat(document.forms["currency"].elements["usd"].value);
   
    if (isNaN(usd)) {

        alert("Please enter a valid number!");
        console.log("User entered NaN");

    } else {

        let eur = parseFloat(document.forms["currency"].elements["usd"].value) * 0.84;
        let cad = parseFloat(document.forms["currency"].elements["usd"].value) * 1.23;
        let hkd = parseFloat(document.forms["currency"].elements["usd"].value) * 7.76;
        let jpy = parseFloat(document.forms["currency"].elements["usd"].value) * 110.8;
        let mxn = parseFloat(document.forms["currency"].elements["usd"].value) * 19.82;

        console.log("Converting " + usd + " USD...");

        document.forms["currency"].elements["euro"].value = eur.toFixed(2);
        document.forms["currency"].elements["cad"].value = cad.toFixed(2);
        document.forms["currency"].elements["hkd"].value = hkd.toFixed(2);
        document.forms["currency"].elements["jpy"].value = jpy.toFixed(2);
        document.forms["currency"].elements["mxn"].value = mxn.toFixed(2);

        }
    

    }


