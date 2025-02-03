document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
    const container = document.querySelector(".poem-container");

    const centerX = container.clientWidth / 2 - 600;
    const centerY = container.clientHeight / 2 - 250;

    const spiralSpacing = 15; 
    const angleIncrement = 25; 

    words.forEach((word, index) => {
        let angle = index * angleIncrement * (Math.PI / 180); // Convert to radians
        let radius = spiralSpacing * index;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);

        word.style.left = `${x}px`;
        word.style.top = `${y}px`;
    });
});
