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