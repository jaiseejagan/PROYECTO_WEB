const board = document.getElementById('gameBoard');
const restartBtn = document.getElementById('restartBtn');

let numbers = [1, 2, 3, 4, 5, 6];
let cards = [...numbers, ...numbers]; // duplicamos para pares
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  board.innerHTML = '';
  shuffle(cards).forEach(number => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.textContent = ''; // Oculto al inicio
    card.addEventListener('click', handleCardClick);
    board.appendChild(card);
  });
}

function handleCardClick(e) {
  const clicked = e.target;
  if (lockBoard || clicked.classList.contains('revealed')) return;

  clicked.textContent = clicked.dataset.number;
  clicked.classList.add('revealed');

  if (!firstCard) {
    firstCard = clicked;
    return;
  }

  secondCard = clicked;
  lockBoard = true;

  if (firstCard.dataset.number === secondCard.dataset.number) {
    resetTurn();
  } else {
    setTimeout(() => {
      firstCard.textContent = '';
      secondCard.textContent = '';
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

restartBtn.addEventListener('click', createBoard);

createBoard();
