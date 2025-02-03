document.addEventListener("DOMContentLoaded", function () {
    let poemLines = document.querySelectorAll(".poem p");
    
    poemLines.forEach((line, index) => {
        let spacing = index * 5 + "px";  // Increase spacing progressively
        line.style.letterSpacing = spacing;
    });
});
