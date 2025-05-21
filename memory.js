document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const btnReset = document.getElementById("reset");

  let primeraTarjeta = null;
  let bloqueo = false;
  let aciertos = 0;
  let numeros;

  function mezclar(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function iniciarJuego() {
    primeraTarjeta = null;
    bloqueo = false;
    aciertos = 0;
    tablero.innerHTML = ""; // Vacía el tablero

    numeros = [1, 2, 3, 1, 2, 3];
    mezclar(numeros);

    numeros.forEach((num, i) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.dataset.numero = num;
      tarjeta.textContent = "";

      tarjeta.addEventListener("click", () => {
        if (bloqueo) return;
        if (tarjeta === primeraTarjeta) return;
        if (tarjeta.classList.contains("acertada")) return;

        tarjeta.classList.add("volteada");
        tarjeta.textContent = num;

        if (!primeraTarjeta) {
          primeraTarjeta = tarjeta;
        } else {
          if (tarjeta.dataset.numero === primeraTarjeta.dataset.numero) {
            tarjeta.classList.add("acertada");
            primeraTarjeta.classList.add("acertada");
            aciertos++;
            primeraTarjeta = null;

            if (aciertos === numeros.length / 2) {
              setTimeout(() => alert("¡Has ganado!"), 300);
            }
          } else {
            bloqueo = true;
            setTimeout(() => {
              tarjeta.classList.remove("volteada");
              tarjeta.textContent = "";
              primeraTarjeta.classList.remove("volteada");
              primeraTarjeta.textContent = "";
              primeraTarjeta = null;
              bloqueo = false;
            }, 1000);
          }
        }
      });

      tablero.appendChild(tarjeta);
    });
  }

  btnReset.addEventListener("click", iniciarJuego);

  iniciarJuego();
});