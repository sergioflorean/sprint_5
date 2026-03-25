// operaciones aritmeticas
let a = 10;
let b = 5;

console.log("Suma: " + (a + b)); // 15
console.log("Resta: " + (a - b)); // 5
console.log("Multiplicación: " + a * b); // 50
console.log("División: " + a / b); // 2
console.log("Módulo: " + (a % b)); // 0

//comparación
console.log("a es igual a b: " + (a == b));
console.log("a es estrictamente igual a b: " + (a === b));
console.log("a es diferente de b: " + (a != b));
console.log("a es estrictamente diferente de b: " + (a !== b));
console.log("a es mayor que b: " + (a > b));
console.log("a es menor que b: " + (a < b));
console.log("a es mayor o igual que b: " + (a >= b));
console.log("a es menor o igual que b: " + (a <= b));

//desigualdad
let c = 10;
console.log("a es igual a c: " + (a == c));
console.log("a es estrictamente igual a c: " + (a === c));

// operadores logicos
let x = true;
let y = false;

console.log("x AND y: " + (x && y)); // false
console.log("x OR y: " + (x || y)); // true
console.log("NOT x: " + !x); // false
console.log("NOT y: " + !y); // true
console.log(a > 5 && b < 10); // true
console.log(a > 15 || b < 10); // true
console.log(!(a > 5)); // false

// condiciones

if (a > b) {
  console.log("a es mayor que b");
} else if (a < b) {
  console.log("a es menor que b");
} else {
  console.log("a es igual a b");
}

// operador ternario
let resultado = a > b ? "a es mayor que b" : "a no es mayor que b";
console.log(resultado);

// loop for

for (let i = 0; i < 5; i++) {
  console.log("Iteración: " + i);
}

// loop while
let j = 0;
while (j < 5) {
  console.log("Iteración: " + j);
  j++;
}

// array
let frutas = ["manzana", "banana", "naranja"];
console.log("Frutas: " + frutas);
console.log("Primera fruta: " + frutas[0]);
console.log("Número de frutas: " + frutas.length);

let nums = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < nums.length; i++) {
  suma += nums[i];
}
console.log("Suma de números: " + suma);

frutas.push("uva");
console.log("Frutas después de agregar uva: " + frutas);

frutas.pop();
console.log("Frutas después de eliminar la última fruta: " + frutas);

frutas.shift();
console.log("Frutas después de eliminar la primera fruta: " + frutas);

frutas.unshift("fresa");
console.log("Frutas después de agregar fresa al inicio: " + frutas);

// for of
for (let fruta of frutas) {
  console.log("Fruta: " + fruta);
}

const usuarios = [
  ["matias", 35, "chile"],
  ["ana", 18, "argentina"],
  ["juan", 22, "peru"],
];
// codigo que valida si un usuario puede beber alcohol segun su edad
for (let usuario of usuarios) {
  const nombre = usuario[0];
  const edad = usuario[1];
  const pais = usuario[2];
  if (edad >= 21) {
    console.log(nombre + " puede beber alcohol en el bar");
  } else if (edad < 18 && pais === "chile") {
    console.log(nombre + " no puede beber alcohol" + " en " + pais);
  } else {
    console.log(nombre + " no puede beber alcohol" + " en " + pais);
  }
}
