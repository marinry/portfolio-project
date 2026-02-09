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