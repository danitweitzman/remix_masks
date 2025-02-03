document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
    const radius = 300; // Controls the size of the circle
    const centerX = 0; // Adjust if necessary
    const centerY = 50; // Adjust if necessary

    words.forEach((word, index) => {
        const angle = (index / words.length) * (2 * Math.PI); 
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        word.style.transform = `translate(${x}px, ${y}px)`;
    });
});
