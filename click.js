let tiempo = 5;
let clicks = 0;
let intervalo;

const btnClick = document.getElementById("botonClick");
const btnStart = document.getElementById("empezar");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const clicksTexto = document.getElementById("clicks");

btnClick.addEventListener("click", () => {
  clicks++;
  clicksTexto.textContent = `Clicks: ${clicks}`;
});

btnStart.addEventListener("click", () => {
  tiempo = 5;
  clicks = 0;
  clicksTexto.textContent = "Clicks: 0";
  contador.textContent = "Tiempo: 5s";
  resultado.textContent = "";
  btnClick.disabled = false;
  btnStart.disabled = true;

  intervalo = setInterval(() => {
    tiempo--;
    contador.textContent = `Tiempo: ${tiempo}s`;

    if (tiempo === 0) {
      clearInterval(intervalo);
      btnClick.disabled = true;
      btnStart.disabled = false;

      const media = clicks / 10;
      resultado.textContent = `Total: ${clicks} clicks. Media: ${media.toFixed(2)} clicks/segundo.`;
    }

    if (tiempo === 0) {
  clearInterval(intervalo);
  btnClick.disabled = true;
  btnStart.disabled = false;

  const media = clicks / 5;
  let nivel = "";

  if (media >= 2) {
    nivel = "¡Eres profesional!";
  } else {
    nivel = "Sigue practicando.";
  }

  resultado.textContent = `Total: ${clicks} clicks. Media: ${media.toFixed(2)} clicks/segundo. ${nivel}`;
}
  }, 1000);
});
