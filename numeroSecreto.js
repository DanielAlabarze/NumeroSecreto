const jsConfetti = new JSConfetti();

const inputEntrada = document.querySelector(".entrada");
const Salida = document.querySelector(".salida");
const GanastePerdiste = document.querySelector(".ganaste");
const IntentosRestantes = document.querySelector(".intentos");

IntentosRestantes.innerHTML = "Tienes 10 intentos";

let intentos = 0; // Inicializo el contador de intentos

function adivinarNumeroSecreto() {
  const Entrada = inputEntrada.value;
  if (Entrada === "" || Entrada < 1 || Entrada > 10) {
    Salida.innerHTML = "Por favor, ingresa un número entre 1 y 10.";
    return;
  }

  intentos++; // Incremento el contador de intentos

  // Genera un número aleatorio entre 1 y 10.
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;

  // Solicita al usuario que ingrese un número.
  let numeroIngresado = Entrada;

  // Comparo el número ingresado con el número secreto.
  if (numeroIngresado == numeroSecreto) {
    jsConfetti.addConfetti();

    GanastePerdiste.innerHTML = "¡Ganaste 🎉!";

    IntentosRestantes.innerHTML =
      10 - intentos === 1
        ? `Te sobro ${10 - intentos} intento.`
        : `Te sobraron ${10 - intentos} intentos.`;

    Salida.innerHTML = `¡Felicidades! ingresaste ${Entrada}, Adivinaste el número secreto en ${intentos} ${
      intentos === 1 ? "intento" : "intentos"
    }.`;

    setTimeout(() => {
      jsConfetti.addConfetti();
    }, 500);

    intentos = 0; // Reinicio el contador de intentos para un nuevo juego
  } else {
    if (intentos < 10) {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}. Intenta nuevamente.`;
      GanastePerdiste.innerHTML = "";

      IntentosRestantes.innerHTML =
        10 - intentos === 1
          ? `Te queda ${10 - intentos} intento.`
          : `Te quedan ${10 - intentos} intentos.`;
    } else {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}.`;

      IntentosRestantes.innerHTML = `¡Agotaste los 10 intentos!`;

      GanastePerdiste.innerHTML = "¡Perdiste 😪!";
      intentos = 0; // Reinicio el contador de intentos para un nuevo juego
    }
  }
}

// Llamo a la función.
adivinarNumeroSecreto();

// Agrego un evento Keypress que llame a la función.
inputEntrada.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    adivinarNumeroSecreto();
    inputEntrada.value = ""; // Limpio el campo de entrada después de adivinar
  }
});
