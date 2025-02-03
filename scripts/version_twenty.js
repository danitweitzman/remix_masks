const poemText = "She had blue skin, And so did he. He kept it hid, And so did she. They searched for blue their whole life through, Then passed right by— And never knew.";
        const poemContainer = document.querySelector(".poem-container");
        let words = poemText.split(" ");
        let index = 0;
        let lastX = 0;
        let lastY = 0;
        const spacing = 30; // Minimum distance between words

        document.addEventListener("mousemove", (e) => {
            if (Math.abs(e.clientX - lastX) > spacing || Math.abs(e.clientY - lastY) > spacing) {
                const word = words[index];
                const span = document.createElement("span");
                span.textContent = word;
                span.classList.add("poem-word");
                span.style.left = `${e.clientX}px`;
                span.style.top = `${e.clientY}px`;
                poemContainer.appendChild(span);
                requestAnimationFrame(() => {
                    span.style.opacity = "1";
                });
                
                lastX = e.clientX;
                lastY = e.clientY;
                index = (index + 1) % words.length; // Reset index to loop through words infinitely
            }
        });