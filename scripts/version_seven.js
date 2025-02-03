document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".poem p");

    lines.forEach((line, index) => {
        let randomSize = Math.floor(Math.random() * (60 - 14 + 1)) + 14;
        line.style.fontSize = `${randomSize}px`;

        let skewAmount = index % 2 === 0 ? Math.random() * -50 : Math.random() * 50; 
        line.style.display = "block"; 
        line.style.transform = `skewX(${skewAmount}deg)`;
        line.style.textAlign = "center"; 
        line.style.lineHeight = "0"; 
    });
});
