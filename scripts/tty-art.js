let resultString = ""

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
        col.querySelector('.hex-value').textContent = hexValue.padStart(2,"0");

        const hexElements = document.querySelectorAll('.hex-value');
        let hexValues = [];

        hexElements.forEach(function(element) {
          hexValues.push(element.textContent.trim()); // trim убирает лишние пробелы
        });
        resultString = hexValues.join(' ');
      }
      updateHexValue(col);
    });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  alert("Hex list has been copied.")
}
