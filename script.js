// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Nunca es tarde para aprender algo nuevo.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La programación no se aprende en un día, se construye con paciencia.",
  "No te rindas, el inicio siempre es lo más difícil.",
  "Cada error es una oportunidad para mejorar.",
  "El conocimiento es poder, pero la práctica lo transforma en sabiduría."
];

// Definimos la función que mostrará una cita aleatoria
function generarCita() {
  // Generamos un número aleatorio entre 0 y la cantidad de frases (citas.length)
  // Math.random() → número entre 0 y 1
  // * citas.length → escala ese número al rango de frases disponibles
  // Math.floor() → redondea hacia abajo para obtener un número entero válido
  const indice = Math.floor(Math.random() * citas.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText = citas[indice];
}
