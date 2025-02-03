const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');
        let drawing = false;
        let poemLines = [
            "She had blue skin,",
            "And so did he.",
            "He kept it hid",
            "And so did she.",
            "They searched for blue",
            "Their whole life through,",
            "Then passed right by—",
            "And never knew."
        ];
        let lineIndex = 0;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        canvas.addEventListener('mousedown', () => {
            drawing = true;
        });

        canvas.addEventListener('mouseup', () => {
            drawing = false;
            ctx.beginPath();
            lineIndex = (lineIndex + 1) % poemLines.length;
        });

        canvas.addEventListener('mousemove', (event) => {
            if (!drawing) return;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'white';

            ctx.lineTo(event.clientX, event.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY);

            ctx.font = '14px helvetica';
            ctx.fillText(poemLines[lineIndex], event.clientX + 10, event.clientY);
        });