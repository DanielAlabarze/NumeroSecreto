// Descripción: Este código es un juego de adivinanza de números en el que el usuario intenta adivinar un número secreto entre 1 y 10. El usuario tiene 10 intentos para adivinar el número correcto. Si lo adivina, se muestra un mensaje de felicitación y se generan fuegos artificiales. Si no lo adivina, se muestra un mensaje de error y se indica cuántos intentos le quedan. Al final, se muestra si ganó o perdió el juego.


const jsConfetti = new JSConfetti();

const inputEntrada = document.querySelector(".entrada");
const Salida = document.querySelector(".salida");
const GanastePerdiste = document.querySelector(".ganaste");
const IntentosRestantes = document.querySelector(".intentos");

IntentosRestantes.innerHTML = "Tenes 10 intentos";

let intentos = 0; // Inicializar el contador de intentos

function adivinarNumeroSecreto() {
  const Entrada = inputEntrada.value;
  if (Entrada === "" || Entrada < 1 || Entrada > 10) {
    Salida.innerHTML = "Por favor, ingresa un número entre 1 y 10.";
    return;
  }

  intentos++; // Incrementar el contador de intentos

  // Genera un número aleatorio entre 1 y 10.
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;

  // Solicita al usuario que ingrese un número.
  let numeroIngresado = Entrada;

  // Compara el número ingresado con el número secreto.
  if (numeroIngresado == numeroSecreto) {
    jsConfetti.addConfetti();

    GanastePerdiste.innerHTML = "¡ Ganaste 🎉!";

    IntentosRestantes.innerHTML = `Te sobraron ${10 - intentos} intentos.`;

    Salida.innerHTML = `¡Felicidades! ingresaste ${Entrada}, Adivinaste el número secreto en ${intentos} intentos.`;

    setTimeout(() => {
      jsConfetti.addConfetti();
    }, 1000);

    intentos = 0; // Reiniciar el contador de intentos para un nuevo juego
  } else {
    if (intentos < 10) {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}. Intenta nuevamente.`;
      GanastePerdiste.innerHTML = "";

      IntentosRestantes.innerHTML = `Te quedan ${10 - intentos} intentos.`;
    } else {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}.`;

      IntentosRestantes.innerHTML = `¡ Agotaste los 10 intentos !`;

      GanastePerdiste.innerHTML = "¡ Perdiste 😪!";
      intentos = 0; // Reiniciar el contador de intentos para un nuevo juego
    }
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
