// Declaramos un arreglo (array) con varias frases motivacionales
const datos = [datos 
  "Pastel de Manzana 🍎.",
  "Pastel de Zanahoria 🥕.",
  "Pastel de Chocolate 🍫.",
  "pastel de 3 Leches 🥛.",
  "pastel de Queso 🧀.",
  "pastel de Vainilla 🍦.",
  "pastel de frutas 🍇🍉🍍."
];

// Definimos la función que mostrará una cita aleatoria
function generarDatos() {
  // Generamos un dato aleatorio entre 1 y 9 la cantidad de datos (datos.length)
  // Math.random() → número entre 1 y 9
  // * citas.length → escala ese número al rango de datos disponibles
  // Math.floor() → redondea hacia abajo para obtener un dato válido
  const indice = Math.floor(Math.random() * datos.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText = datos[indice];
}



