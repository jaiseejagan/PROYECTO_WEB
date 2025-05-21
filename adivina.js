function adivinar() {
  const numero = document.getElementById('numero').value;
  
  if (numero === '' || isNaN(numero) || numero < 1 || numero > 100) {
    document.getElementById('resultado').textContent = "Por favor, escribe un número válido entre 1 y 100.";
  } else {
    document.getElementById('resultado').textContent = `¡Tu número es ${numero}! Lo sabía. 😉`;
  }
}
