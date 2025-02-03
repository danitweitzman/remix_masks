document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
    const radius = 300; 
    const centerX = 0; 
    const centerY = 0; 
    let angleOffset = 0; 

    function updatePositions() {
        words.forEach((word, index) => {
            const angle = (index / words.length) * (2 * Math.PI) + angleOffset;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            word.style.transform = `translate(${x}px, ${y}px)`;
        });

        angleOffset += 0.001; 
        requestAnimationFrame(updatePositions);
    }

    updatePositions();
});
