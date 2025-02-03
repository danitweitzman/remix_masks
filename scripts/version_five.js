document.addEventListener("DOMContentLoaded", function() {
    const poemContainer = document.querySelector(".poem-container");
    const words = document.querySelectorAll(".word");

    function shuffleLayout() {
        poemContainer.classList.toggle("rearrange");

        words.forEach(word => {
            let xOffset = Math.random() * 20 - 10; 
            let yOffset = Math.random() * 20 - 10; 
            let rotation = Math.random() * 20 - 10; 
            let scale = Math.random() * 0.4 + 0.8; 

            word.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
            word.style.opacity = Math.random() * 0.5 + 0.5; 
        });
    }

    setInterval(shuffleLayout, 1000);
});
