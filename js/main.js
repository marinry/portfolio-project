// ===============================
// SECTION TOGGLES
// ===============================
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "none" ? "block" : "none";
}

document.querySelectorAll(".section-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        const section = document.getElementById(target);
        const icon = btn.querySelector(".icon");
        const isHidden = section.style.display === "none";
        section.style.display = isHidden ? "block" : "none";
        icon.textContent = isHidden ? "−" : "+";
    });
});

// ===============================
// WHITE MODE
// ===============================
let whiteMode = false;

document.getElementById("whiteModeBtn").addEventListener("click", () => {
    whiteMode = !whiteMode;

    if (whiteMode) {
        document.documentElement.style.setProperty("--color-primary", "#ffffff");
        document.documentElement.style.setProperty("--color-secondary", "#e5e5e5");
        document.documentElement.style.setProperty("--color-accent", "#cccccc");

        document.body.style.background = "#ffffff";
        document.body.style.color = "#000000";

        document.querySelectorAll(".section-toggle").forEach(btn => {
            btn.style.backgroundColor = "#dddddd";
            btn.style.color = "#000000";
        });

    } else {
        document.documentElement.style.setProperty("--color-primary", "#4a2f1b");
        document.documentElement.style.setProperty("--color-secondary", "#8b5e34");
        document.documentElement.style.setProperty("--color-accent", "#d97706");

        document.body.style.background = "linear-gradient(180deg, #f8f3ec 0%, #f1e4d3 40%, #ebd2a8 100%)";
        document.body.style.color = "var(--color-neutral-dark)";

        document.querySelectorAll(".section-toggle").forEach(btn => {
            btn.style.backgroundColor = "#8b5e34";
            btn.style.color = "#ffffff";
        });
    }
});

// ===============================
// COLOR PICKER MODE
// ===============================
const colorPicker = document.getElementById("colorPicker");

// ===============================
// PAINT MODE
// ===============================
let paintMode = false;
let eraserMode = false;
let selectedColor = "#ff0000";

document.getElementById("eraserModeBtn").addEventListener("click", () => {
    paintMode = false;
    eraserMode = true;
});

document.getElementById("paintModeBtn").addEventListener("click", () => {
    paintMode = true;
    eraserMode = false;

    const blob = document.createElement("div");
    blob.classList.add("paint-blob");

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    blob.style.left = randomX + "px";
    blob.style.top = randomY + "px";
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    blob.style.setProperty("--blobColor", randomColor);

    document.body.appendChild(blob);
});


// ===============================
// ERASER MODE
// ===============================
document.addEventListener("mouseover", (e) => {
    if (eraserMode && e.target.classList.contains("paint-blob")) {
        e.target.remove();
    }
});

// ===============================
// COLOR OPTIONS
// ===============================
document.getElementById("colorModeBtn").addEventListener("click", () => {
    const box = document.getElementById("colorOptions");
    box.style.display = box.style.display === "none" ? "block" : "none";
});

document.querySelectorAll(".colorChoice").forEach(btn => {
    btn.addEventListener("click", () => {
        const color = btn.getAttribute("data-color");
        document.documentElement.style.setProperty("--color-primary", color);
    });
});


// ===============================
// SPOTIFY PLAYLIST TOGGLE
// ===============================
document.getElementById("togglePlaylistBtn").addEventListener("click", () => {
    const box = document.getElementById("playlistContainer");
    box.style.display = box.style.display === "none" ? "block" : "none";
});

// ===============================
// VISUALIZER
// ===============================
const visualizer = document.getElementById("visualizer");

document.getElementById("toggleVisualizerBtn").addEventListener("click", () => {
    if (visualizer.style.display === "none") {
        visualizer.style.display = "flex";
        startVisualizer();
    } else {
        visualizer.style.display = "none";
    }
});

function startVisualizer() {
    visualizer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const bar = document.createElement("div");
        bar.classList.add("visualizer-bar");
        visualizer.appendChild(bar);
    }

    setInterval(() => {
        document.querySelectorAll(".visualizer-bar").forEach(bar => {
            bar.style.height = Math.random() * 100 + "px";
        });
    }, 200);
}
