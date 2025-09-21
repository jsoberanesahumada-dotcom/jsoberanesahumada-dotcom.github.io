// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time", time: 16 },
  { text: "The whisper of birds", time: 19 },
  { text: "Lonely before the sun cried", time: 28 },
  { text: "Fell from the sky", time: 33 },
  { text: "Like water drops", time: 34 },
  { text: "Where I'm now? I don't know why", time: 42 },
  { text: "Nice butterflies in my hands", time: 48 },
  { text: "Too much light for twilight", time: 55 },
  { text: "In the mood for the flowers love", time: 60 },
  { text: "That vision", time: 68 },
  { text: "Really strong, blew my mind", time: 73 },
  { text: "Silence Let me see what it was", time: 79 },
  { text: "I only want to live in clouds", time: 84 },
  { text: "Where I'm now? I don't know why", time: 92 },
  { text: "Nice butterflies in my hands", time: 98 },
  { text: "Too much light for twilight", time: 105 },
  { text: "In the mood for the flowers love", time: 109 },
  { text: "At the time", time: 145 },
  { text: "The whisper of birds", time: 149 },
  { text: "Lonely before the sun cried", time: 154 },
  { text: "Fell from the sky", time: 159 },
  { text: "Like water drops", time: 165 },
  { text: "Where I'm now? I don't know why", time: 170 },
  { text: "Nice butterflies in my hands", time: 177 },
  { text: "Too much light for twilight", time: 184 },
  { text: "In the mood for the flowers", time: 189 },
  { text: "Love.", time: 141 },
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
