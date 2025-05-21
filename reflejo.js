let startTime;
let isReady = false;

function startGame() {
  document.getElementById("status").textContent = "Prepárate...";
  document.getElementById("box").style.backgroundColor = "red";
  isReady = false;

  setTimeout(() => {
    document.getElementById("box").style.backgroundColor = "green";
    document.getElementById("status").textContent = "¡Haz clic ahora!";
    startTime = Date.now();
    isReady = true;
  }, Math.random() * 3000 + 2000); // entre 2 y 5 segundos
}

document.getElementById("box").addEventListener("click", () => {
  if (!isReady) {
    document.getElementById("status").textContent = "¡Muy pronto! Espera al verde.";
    return;
  }

  const reactionTime = Date.now() - startTime;
  document.getElementById("status").textContent = `¡Tu tiempo fue de ${reactionTime} ms!`;
  isReady = false;
});
