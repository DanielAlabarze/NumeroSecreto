const jsConfetti = new JSConfetti();

const inputEntrada = document.querySelector(".entrada");
const Salida = document.querySelector(".salida");
const Ganaste = document.querySelector(".ganaste");

function adivinarNumeroSecreto() {
  const Entrada = inputEntrada.value;
  if (Entrada === "" || Entrada < 1 || Entrada > 10) {
    Salida.innerHTML = "Por favor, ingresa un número entre 1 y 10.";
    return;
  }

  // Genera un número aleatorio entre 1 y 10.
  var numeroSecreto = Math.floor(Math.random() * 10) + 1;

  // Solicita al usuario que ingrese un número.
  var numeroIngresado = Entrada;

  // Compara el número ingresado con el número secreto.
  if (numeroIngresado == numeroSecreto) {
    jsConfetti.addConfetti();
    Ganaste.innerHTML = "¡ Ganaste 🎉!";
    Salida.innerHTML = `¡Felicidades! ingresaste ${Entrada}, Adivinaste el número secreto.`;
  } else {
    Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era  ${numeroSecreto} . Intenta nuevamente.;`;
    Ganaste.innerHTML = "";
  }
}

// Llama a la función.
adivinarNumeroSecreto();

inputEntrada.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    adivinarNumeroSecreto();
    inputEntrada.value = ""; // Limpiar el campo de entrada después de adivinar
  }
});
