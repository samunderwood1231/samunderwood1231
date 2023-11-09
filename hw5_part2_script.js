window.addEventListener("load", function () {
    let button = document.getElementById("button1");
    button.addEventListener("click", function () {
        validateSelect();
        console.log('button pressed');
    });

    let select2 = document.getElementById("onclickSelect");
    select2.addEventListener("click", function () {
        launchSite();

    })
})

function validateSelect() {
    let sites = document.getElementById('siteBtnSelect');

    for (const site of sites) {
        if (site.selected) {
            window.open(site.value, '_blank');
            return;
        }
    }

}

function launchSite() {
    let sites = document.getElementById('onclickSelect');

    sites.onchange = function () {
        for (const site of sites) {
            if (site.selected && site.selected.value !== "") {
                window.open(site.value, '_blank');
                return;
            }
        }
    };
}