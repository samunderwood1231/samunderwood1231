// when page loads, register the event listener on the GO button
window.addEventListener("load", function () {
    let button = document.getElementById("button1");
    button.addEventListener("click", function () {
        validateSelect();
        console.log('button pressed');
    });

    // also register the event listener on the select menu with no GO button
    let select2 = document.getElementById("onclickSelect");
    select2.addEventListener("click", function () {
        launchSite();

    })
})

// check which site is selected, open it in a new tab
function validateSelect() {
    let sites = document.getElementById('siteBtnSelect');

    for (const site of sites) {
        if (site.selected) {
            window.open(site.value, '_blank');
            return;
        }
    }

}

// check which site is selected, open it in a new tab
function launchSite() {
    let sites = document.getElementById('onclickSelect');

    sites.onchange = function () {
        for (const site of sites) {
            if (site.selected && site.value !== "") {
                window.open(site.value, '_blank');
                return;
            }
        }
    };
}

