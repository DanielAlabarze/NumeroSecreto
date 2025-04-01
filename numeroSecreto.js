const jsConfetti = new JSConfetti(); // Inicializo la librería jsConfetti para efectos de confeti.

const inputEntrada = document.querySelector(".entrada"); // Obtrngo el elemento de entrada del usuario.
const Salida = document.querySelector(".salida"); // Obtengo el elemento para mostrar mensajes de salida.
const GanastePerdiste = document.querySelector(".ganaste"); // Obtengo el elemento para mostrar mensajes de ganar/perder.
const IntentosRestantes = document.querySelector(".intentos"); // Obtengo el elemento para mostrar los intentos restantes.
const salidaGanadorPerdedor = document.querySelector(".salidaGanadorPerdedor"); // Obtengo el elemento para mostrar frases de ganar/perder.

IntentosRestantes.innerHTML = "Tienes 10 intentos"; // Mensaje inicial de intentos restantes.

let intentos = 0; // Inicializo el contador de intentos.

// Array con frases para cuando el usuario gana.
const frasesGanadoras = [
  "¡Increíble! ¡Sos un verdadero genio de los números!",
  "¡Enhorabuena! ¡Tu mente numérica es impresionante!",
  "¡Campeon! ¡Has demostrado ser el mejor!",
  "¡Guau! ¡Qué habilidad!",
  "¡Impresionante! Que comiste ?",
  "¡Sos un crack!",
  "¡No te lo podes creer ni vos! ¡victoria!",
  "¡Troesma de los números!",
  "¡Tu intuición es imbatible!",
  "¡Sos un ganador indiscutible!",
  "¡Sos el rey de las adivinanzas!",
  "¡Vos sí que la tenes clara!",
  "¡Que groso sos!"
];

// Array con frases para cuando el usuario pierde.
const frasesPerdedoras = [
  "¡No te desanimes!",
  "¡La próxima vez seguro que ganas o perdes tambien!",
  "¡Lo importante es participar y divertirse! ¡Mentiraaaa!",
  "¡No te rindas! ¡Ni aun vencido!",
  "¡No te desanimes por esta derrota!",
  "¡Has hecho un gran esfuerzo pero no alzanzo! ¡Ponéte las Pilas!",
  "¡No te preocupes! ¡Todos tenemos días malos!",
  "¡Has jugado con intuición! ¡Pero no te sirvio de nada!",
  "¡Has demostrado que no enbocas una!",
  "¡Lo importante es Ganar! ¡ Y vos perdiste !",
  "¡Ni se te ocurra ir al casino!",
  "¡Mejor guardate unos dias!"
];

// Función para adivinar el número secreto.
function adivinarNumeroSecreto() {
  const Entrada = inputEntrada.value; // Obtiengo el valor ingresado por el usuario.
  // Verifico si la entrada es válida.
  if (Entrada === "" || Entrada < 1 || Entrada > 10) {
    Salida.innerHTML = "Por favor, ingresa un número entre 1 y 10."; // Muestro un mensaje de error si la entrada no es válida.
    return; // Salgo de la función si la entrada no es válida.
  }

  intentos++; // Incremento el contador de intentos.

  let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genero un número aleatorio entre 1 y 10.

  let numeroIngresado = Entrada; // Obtiengo el número ingresado por el usuario.

  const fraseAleatoriaGanador =
    frasesGanadoras[Math.floor(Math.random() * frasesGanadoras.length)]; // Selecciono una frase ganadora aleatoria.
  const fraseAleatoriaPerdedor =
    frasesPerdedoras[Math.floor(Math.random() * frasesPerdedoras.length)]; // Selecciono una frase perdedora aleatoria.

  // Verifica si el número ingresado es igual al número secreto.
  if (numeroIngresado == numeroSecreto) {
    jsConfetti.addConfetti(); // Lanzo confeti si el usuario gana.

    GanastePerdiste.innerHTML = "¡Ganaste 🎉!"; // Muestro el mensaje de victoria.
    salidaGanadorPerdedor.innerHTML = fraseAleatoriaGanador; // Muestro una frase de victoria aleatoria.

    console.log(fraseAleatoriaGanador);

    IntentosRestantes.innerHTML = // Muestro los intentos restantes.
      10 - intentos === 1
        ? `Te sobro ${10 - intentos} intento.`
        : `Te sobraron ${10 - intentos} intentos.`;

    Salida.innerHTML = `¡Felicidades! ingresaste ${Entrada}, Adivinaste el número secreto en ${intentos} ${
      intentos === 1 ? "intento" : "intentos"
    }.`; // Muestro el mensaje de felicitaciones.

    setTimeout(() => {
      // Lanzo confeti después de un breve retraso.
      jsConfetti.addConfetti();
    }, 500);

    intentos = 0; // Reinicio el contador de intentos.
    inputEntrada.value = ""; // Limpio el campo de entrada.

    // Si el usuario no adivina el número.
  } else {
    // Verifico si el usuario tiene intentos restantes.
    if (intentos < 10) {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}. Intenta nuevamente.`; // Muestra un mensaje de intento fallido.
      GanastePerdiste.innerHTML = ""; // Limpio el mensaje de ganar/perder.
      salidaGanadorPerdedor.innerHTML = ""; // Limpio la frase de ganar/perder.

      IntentosRestantes.innerHTML = // Muestro los intentos restantes.
        10 - intentos === 1
          ? `Te queda ${10 - intentos} intento.`
          : `Te quedan ${10 - intentos} intentos.`;
    }
    // Si el usuario agota los intentos.
    else {
      Salida.innerHTML = `Lo siento, ingresaste ${Entrada} y el número secreto era ${numeroSecreto}.`; // Muestro el mensaje de derrota.
      IntentosRestantes.innerHTML = `¡Agotaste los 10 intentos!`; // Muestro el mensaje de intentos agotados.
      GanastePerdiste.innerHTML = "¡Perdiste 😪!"; // Muestro el mensaje de derrota.
      salidaGanadorPerdedor.innerHTML = fraseAleatoriaPerdedor; // Muestro una frase de derrota aleatoria.

      console.log(fraseAleatoriaPerdedor);

      intentos = 0; // Reinicio el contador de intentos.
      inputEntrada.value = ""; // Limpio el campo de entrada.
    }
  }
}

adivinarNumeroSecreto(); // Llamo a la función para iniciar el juego.

// Agrega un evento de teclado Keypress al campo de entrada.
inputEntrada.addEventListener("keypress", function (event) {
  // Verifico si la tecla presionada es "Enter".
  if (event.key === "Enter") {
    event.preventDefault(); // Evito el comportamiento predeterminado del formulario.
    adivinarNumeroSecreto(); // Llamo a la función principal para adivinar el número.
    inputEntrada.value = ""; // Limpio el campo de entrada.
  }
});
