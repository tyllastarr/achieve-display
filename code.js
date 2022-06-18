function adjustProgressBar(achievementsCollected, achievementsTotal) {
    let percentage = (achievementsCollected / achievementsTotal) * 100;
    
    let progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage + "%";

    let progressLabel = document.getElementById("progressLabel");
    progressLabel.innerHTML = achievementsCollected + " of " + achievementsTotal + " achievements complete.";

    return percentage;
}