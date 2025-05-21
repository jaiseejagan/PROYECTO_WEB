let a = Math.floor(Math.random() * 90) + 10;
let b = Math.floor(Math.random() * 90) + 10;

document.getElementById("question").textContent = `¿Cuánto es ${a} + ${b}?`;

const nextBtn = document.getElementById("nextBtn");

function check() {
  const ans = parseInt(document.getElementById("answer").value);
  const result = document.getElementById("result");

  if (ans === a + b) {
    result.textContent = "¡Correcto!";
    nextBtn.disabled = false;     
  } else {
    result.textContent = "Incorrecto. Intenta de nuevo.";
    nextBtn.disabled = true;      
  }
}

function next() {
  location.reload();  
}
