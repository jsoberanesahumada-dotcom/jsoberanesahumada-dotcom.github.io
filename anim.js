// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En ese momento", time: 15.43 },
  { text: "El susurro de los pajaros", time: 20.15 },
  { text: "Solitario antes de que el sol llorara", time: 26.85 },
  { text: "Cayó del cielo como gotas de agua", time: 33.26 },
  { text: "¿Donde estoy ahora? No sé por qué", time: 41.33 },
  { text: "Lindas mariposas en mis manos", time: 47.70 },
  { text: "Demasiada luz para el crepusculo", time: 54.16 },
  { text: "En el estado de amor de las flores", time: 59.50 },
  { text: "Esa visión", time: 63.63 },
  { text: "Realmente me dejó alucinado", time: 71.89 },
  { text: "Silencio déjame ver lo que era", time: 78.12 },
  { text: "Solo quiero vivir en las nubes", time: 84.50 },
  { text: "¿Donde estoy ahora? No sé por qué", time: 92.72 },
  { text: "Lindas mariposas en mis manos", time: 98.90 },
  { text: "Demasiada luz para el crepusculo", time: 105.90 },
  { text: "En el estado de amor de las flores", time: 110.58 },
  { text: "En ese momento", time: 143.59 },
  { text: "El susurro de los pajaros", time: 148.18 },
  { text: "Solitario antes de que el sol llorara", time: 154.86 },
  { text: "Cayó del cielo como gotas de agua", time: 161.37 },
  { text: "¿Donde estoy ahora? No sé por qué", time: 169.30 },
  { text: "Lindas mariposas en mis manos", time: 175.65 },
  { text: "Demasiada luz para el crepusculo", time: 182.23 },
  { text: "En el estado de amor de las flores", time: 187.69 },
  { text: "TE QUIERO MUCHO SAM", time: 201 },
  { text: "ESPERO Y TE HAYA GUSTADO ❤", time: 206 },
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
