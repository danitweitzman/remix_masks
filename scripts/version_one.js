document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".poem p"); 
    let index = 0;

    function highlightLine() {
        if (index >= lines.length) {
            index = 0; 
        }

        lines[index].style.opacity = 1;

        setTimeout(() => {
            lines[index].style.opacity = 0.2;
            index++;
            highlightLine(); 
        }, 1000); 
    }

    highlightLine();
});
