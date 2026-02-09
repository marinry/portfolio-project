// ===============================
// SECTION TOGGLES
// ===============================
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "none" ? "block" : "none";
}

document.querySelectorAll(".toggleBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("dt");
        toggleSection(target);
    });
});

// ===============================
// WHITE MODE
// ===============================
document.getElementById("whiteModeBtn").addEventListener("click", () => {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
});

// ===============================
// COLOR PICKER MODE
// ===============================
const colorPicker = document.getElementById("colorPicker");

document.getElementById("colorModeBtn").addEventListener("click", () => {
    colorPicker.click();
});

colorPicker.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--color-primary", e.target.value);
});

// ===============================
// PAINT MODE
// ===============================
let paintMode = false;
let eraserMode = false;
let selectedColor = "#ff0000";

document.getElementById("paintModeBtn").addEventListener("click", () => {
    paintMode = true;
    eraserMode = false;
});

document.getElementById("eraserModeBtn").addEventListener("click", () => {
    paintMode = false;
    eraserMode = true;
});

document.addEventListener("click", (e) => {
    if (!paintMode) return;

    const blob = document.createElement("div");
    blob.classList.add("paint-blob");
    blob.style.backgroundColor = selectedColor;
    blob.style.left = e.pageX + "px";
    blob.style.top = e.pageY + "px";

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
