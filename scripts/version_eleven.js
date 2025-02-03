document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");

    words.forEach(word => {
        const letters = word.textContent.split("");
        word.innerHTML = ""; // Clear the word to append rotated letters

        letters.forEach(letter => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            span.style.transform = "rotate(30deg)";
            word.appendChild(span);
        });
    });
});
