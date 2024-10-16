const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
  container.innerHTML = ''; 
  const squareSize = 960 / size; 

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 0;
   
    square.addEventListener('mouseover', () => {
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        square.style.opacity = currentOpacity + 0.1;
        square.style.backgroundColor = getRandomColor();
      }
    });

    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter grid size (max 100):', 16));
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

createGrid(16);