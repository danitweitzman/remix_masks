document.addEventListener("DOMContentLoaded", () => {
    const poemContainer = document.querySelector(".poem-container");
    const poemLines = [
        "She had blue skin,",
        "And so did he.",
        "He kept it hid",
        "And so did she.",
        "They searched for blue",
        "Their whole life through,",
        "Then passed right by—",
        "And never knew."
    ];

    const totalLines = 32; 
    const radius = 250; 

    for (let i = 0; i < totalLines; i++) {
        let lineText = poemLines[i % poemLines.length]; 
        let line = document.createElement("div");
        line.classList.add("line");
        line.textContent = lineText;

        let angle = (i / totalLines) * 360; 
        let yOffset = (i - totalLines / 2) * 0; 

        line.style.transform = `rotateX(${angle}deg) translateZ(${radius}px) translateY(${yOffset}px)`;

        poemContainer.appendChild(line);
    }
});
