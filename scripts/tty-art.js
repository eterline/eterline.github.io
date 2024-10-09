document.addEventListener("DOMContentLoaded", function () {
    const pixelCols = document.querySelectorAll('.pixel-col');
    const clearButton = document.getElementById('clear-btn');
  
    pixelCols.forEach(col => {
      const pixels = col.querySelectorAll('.pixel');
      pixels.forEach(pixel => {
        pixel.addEventListener('click', function () {
          pixel.classList.toggle('active');
          updateHexValue(col);
        });
      });

      clearButton.addEventListener('click', function () {
        pixelCols.forEach(col => {
          const pixels = col.querySelectorAll('.pixel');
          pixels.forEach(pixel => {
            pixel.classList.remove('active');
          });
          updateHexValue(col);
        });
      });

      function updateHexValue(col) {
        let binaryValue = '';
        pixels.forEach(pixel => {
          binaryValue += pixel.classList.contains('active') ? '1' : '0';
          pixel.style.backgroundColor = pixel.classList.contains('active') ? 'green' : '#000000';
        });
        const hexValue = parseInt(binaryValue, 2).toString(16).toUpperCase();
        const hexDisplay = col.querySelector('.hex-value');
        if (hexValue != '0') {
          hexDisplay.textContent = `${hexValue}`;
          if (hexValue.length == 1) hexDisplay.textContent = `0${hexValue}`;
        } else {
          hexDisplay.textContent = `00`;
        }
      }
  
      updateHexValue(col);
    });
});
