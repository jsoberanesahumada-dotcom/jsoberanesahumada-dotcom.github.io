// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time", time: 15.43 },
  { text: "The whisper of birds", time: 20.15 },
  { text: "Lonely before the sun cried", time: 26.85 },
  { text: "Fell from the sky like water drops", time: 33.26 },
  { text: "Where I'm now? I don't know why", time: 41.33 },
  { text: "Nice butterflies in my hands", time: 47.70 },
  { text: "Too much light for twilight", time: 54.16 },
  { text: "In the mood for the flowers love", time: 59.50 },
  { text: "That vision", time: 63.63 },
  { text: "Really strong, blew my mind", time: 71.89 },
  { text: "Silence Let me see what it was", time: 78.12 },
  { text: "I only want to live in clouds", time: 84.50 },
  { text: "Where I'm now? I don't know why", time: 92.72 },
  { text: "Nice butterflies in my hands", time: 98.90 },
  { text: "Too much light for twilight", time: 105.90 },
  { text: "In the mood for the flowers love", time: 110.58 },
  { text: "At the time", time: 143.59 },
  { text: "The whisper of birds", time: 148.18 },
  { text: "Lonely before the sun cried", time: 154.86 },
  { text: "Fell from the sky like water drops", time: 161.37 },
  { text: "Where I'm now? I don't know why", time: 169.30 },
  { text: "Nice butterflies in my hands", time: 175.65 },
  { text: "Too much light for twilight", time: 182.23 },
  { text: "In the mood for the flowers", time: 187.69 },
  { text: "Love.", time: 199.45 },
  { text: "TE QUIERO MUCHO SAM", time: 201 },
  { text: "ESPERO Y TE HAYAS QUEDA HASTA EL FINAL", time: 206 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
