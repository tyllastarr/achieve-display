var current = 0;
var total = 0;
var label = "achievements";

function setValues(show) {
    switch(show) {
        case "EEHM": // Exploring Everything in Heart of Maguuma (GW2 Heart of Thorns)
        case "EEC": // Exploring Everything in Cantha (GW2 End of Dragons)
            total = 4;
            label = "zones";
            break;
        case "EELW3": // Exploring Everything in Living World Season 3 (GW2)
        case "EELW4": // Exploring Everything in Living World Season 4 (GW2)
            total = 6;
            label = "zones";
            break;
        case "EECD": // Exploring Everything in Crystal Desert (GW2 Path of Fire)
            total = 5;
            label = "zones";
            break;
        case "EEIB": // Exploring Everything in Icebrood Saga (GW2 Living World)
            total = 3;
            label = "zones";
            break;
        case "ME": // Massively Effective (Mass Effect)
            total = 228;
            label = "achievements";
            break;
        default:
            total = 10;
            label = "achievements";
            break;
    }

}

function adjustProgressBar(achievementsCollected, achievementsTotal, achievementsLabel) {
    let percentage = (achievementsCollected / achievementsTotal) * 100;
    
    let progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage + "%";

    let progressLabel = document.getElementById("progressLabel");
    progressLabel.innerHTML = achievementsCollected + " of " + achievementsTotal + " " + achievementsLabel + " complete.";

    return percentage;
}