// src/components/Toolbar.js
import React, { useEffect } from 'react';

function Toolbar() {
  useEffect(() => {
    const fontSelect = document.getElementById('font-select');
    const themeSelect = document.getElementById('theme-select');

    // Change font type
    fontSelect.addEventListener('change', function () {
      document.body.style.fontFamily = fontSelect.value;
    });

    // Change theme
    themeSelect.addEventListener('change', function () {
      document.body.className = themeSelect.value;
    });
  }, []);

  return (
    <div className="toolbar">
      <label htmlFor="font-select">Font Type:</label>
      <select id="font-select">
        <option value="Arial, sans-serif">Sans-serif</option>
        <option value="'Times New Roman', serif">Serif</option>
      </select>
      <label htmlFor="theme-select">Theme:</label>
      <select id="theme-select">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="high-contrast">High Contrast</option>
      </select>
    </div>
  );
}

export default Toolbar;
