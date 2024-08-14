// script.js

document.addEventListener("DOMContentLoaded", function() {
    const fontSelect = document.getElementById("font-select");
    const themeSelect = document.getElementById("theme-select");

    // Change font type
    fontSelect.addEventListener("change", function() {
        document.body.style.fontFamily = fontSelect.value;
    });

    // Change theme
    themeSelect.addEventListener("change", function() {
        document.body.className = themeSelect.value;
    });
});
