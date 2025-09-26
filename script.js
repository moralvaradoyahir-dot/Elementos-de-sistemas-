// Declaramos un arreglo (array) con varios platillos sobre el Generador de antojitos mexicanos 
const Generador Antojitos Mexicanos = [Generador Antojitos Mexicanos 
  "Quesadillas.",
  "Sopes.",
  "Tamales.",
  "Tostadas.",
  "Tortas.",
  "Tacos.",
  "Pozole."
];

// Definimos la función que mostrará un dato aleatorio
function Generador Antojitos Mexicanos() {
  // Generamos un dato aleatorio entre la cantidad de datos (datos.length)
  // Math.random() → Antojitos mexicanos 
  // * antojitos mexicanos.length → escala ese número al rango de datos disponibles
  // Math.floor() → redondea hacia abajo para obtener un dato válido
  const indice = Math.floor(Math.random() *AntojitosMexicanos.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText =AntojitosMexicanos [indice];
}




















