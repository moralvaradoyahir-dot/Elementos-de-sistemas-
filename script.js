// Declaramos un arreglo (array) con varios platillos sobre el Generador de antojitos mexicanos
const antojitosMexicanos = [
  "Quesadillas.",
  "Sopes.",
  "Tamales.",
  "Tostadas.",
  "Tortas.",
  "Tacos.",
  "Pozole."
];

// Definimos la función que mostrará un dato aleatorio
function generadorAntojitosMexicanos() {
  // Generamos un dato aleatorio entre la cantidad de datos (antojitosMexicanos.length)
  // Math.random() → Genera un número aleatorio entre 0 y 1
  // * antojitosMexicanos.length → Escala ese número al rango de datos disponibles
  // Math.floor() → Redondea hacia abajo para obtener un índice válido
  const indice = Math.floor(Math.random() * antojitosMexicanos.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText = antojitosMexicanos[indice];
}

// Función para sumar 2 números
function suma(a, b) {
  return a + b;
}

// Ejemplo de cómo llamar la función suma
const resultado = suma(10, 20);
console.log("La suma de 10 y 20 es: " + resultado);
