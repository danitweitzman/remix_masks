/* document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");

    words.forEach(word => {
        const letters = word.textContent.split("");
        word.innerHTML = ""; // Clear the word to append rotated letters

        let rotation = 0; // Initial rotation degree

        letters.forEach(letter => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            span.style.transform = `rotate(${rotation}deg)`;
            rotation += 10; // Increase rotation by 10 degrees for the next letter
            word.appendChild(span);
        });
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");

    let rotation = 0; 

    words.forEach(word => {
        const letters = word.textContent.split("");
        word.innerHTML = ""; 

        letters.forEach(letter => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            span.style.transform = `rotate(${rotation}deg)`;
            rotation += 5; // 
            word.appendChild(span);
        });
    });
});

