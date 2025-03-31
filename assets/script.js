document.getElementById("animateBtn").addEventListener("click", function() {
    let box = document.getElementById("animatedBox");
    box.style.transform = "scale(1.5)";
    setTimeout(() => {
        box.style.transform = "scale(1)";
    }, 500);
});
