window.addEventListener("load", function () {
    let button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        e.preventDefault();
        showStateInfo();
    });
})


let stateInfo = [
    // [stateAbbrev, stateName, stateCap, statePop]
    ["al", "Alabama", "Montgomery", 4903185],
    ["ak", "Alaska", "Juneau", 731545],
    ["az", "Arizona", "Phoenix", 7278717],
    ["ar", "Arkansas", "Little Rock", 3017825],
    ["ca", "California", "Sacramento", 39512223],
    ["co", "Colorado", "Denver", 5758736]
]

function showStateInfo() {
    let searchKey = document.getElementById('stateName')
        .value
        .toLowerCase();    
    const stateDiv = document.getElementById("div-state");
    const errorDiv = document.getElementById("div-error");

    for (let i = 0; i < stateInfo.length; i++) {
        const thisState = stateInfo[i];
        if (searchKey === (thisState[0]) || searchKey == thisState[1].toLowerCase()) 
        {
            errorDiv.textContent = ""; 
            const pop = thisState[3].toLocaleString('en-US');
            stateDiv.textContent = `State: ${thisState[1]}\nCapital: ${thisState[2]}\nPopulation: ${pop}`; 
            return;
        }
    } 

    stateDiv.textContent = "";   
    errorDiv.textContent = "Please enter a valid state. We only have information about AL, AZ, AR, CA, and CO"; 
    return;
}




