const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

// Função para criar o grid com base no tamanho informado
function createGrid(size) {
  container.innerHTML = ''; // Limpar o grid existente
  const squareSize = 960 / size; // Tamanho de cada quadrado

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 0;

    // Alterar cor e escurecer progressivamente ao passar o mouse
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

// Função para gerar uma cor aleatória
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Resetar o grid com novo tamanho
resetButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter grid size (max 100):', 16));
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Criar grid inicial
createGrid(16);