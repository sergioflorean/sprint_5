let year = 1019;

if (year % 400 === 0) {
  console.log(`${year} es un año bisiesto.`);
} else if (year % 100 === 0) {
  console.log(`${year} no es un año bisiesto.`);
} else if (year % 4 === 0) {
  console.log(`${year} es un año bisiesto.`);
} else {
  console.log(`${year} no es un año bisiesto.`);
}

const age = 10;
const hasTicket = true;

// Escribe tu código aquí.

if (age >= 18 && hasTicket) {
  console.log("¡Te damos la bienvenida! ¡Diviértete!");
} else {
  console.log("Lo siento, no puedes entrar.");
}

const cardNumber = 123; // Ejemplo de ID de membresía (0 significa que no hay membresía)
const role = "invitado"; // El estado puede ser "invitado", "estudiante" o cualquier otro

// Escribe tu código aquí.

if (cardNumber > 0 || role === "estudiante") {
  console.log("¡Acceso concedido! Disfruta de tus libros.");
} else {
  console.log("Lo sentimos, esta sección está restringida.");
}

let hasSubscription = false;

// Añade aquí tu sentencia if-else

if (!hasSubscription) {
  console.log("Suscríbete ahora para desbloquear contenido premium.");
} else {
  console.log("¡Te damos la bienvenida de nuevo, usuario premium!");
}

const clearanceLevel = 4; // Ejemplo de nivel de autorización
const hasAccessPass = false; // Ejemplo de estado del pase de acceso
const isBlacklisted = false; // Ejemplo de estado de la lista de rechazados

// Escribe tu código aquí.

if (isBlacklisted) {
  console.log("Acceso denegado. Estás en la lista de rechazados.");
} else if (clearanceLevel >= 5 || hasAccessPass) {
  console.log("Acceso concedido. Te damos la bienvenida al área restringida.");
} else {
  console.log("Acceso denegado. No tienes la autorización requerida.");
}

// La cuenta comienza por 10
let count = 10;

// Escribe tu código aquí
while (count >= 0) {
  console.log(count);
  count--;
}
console.log("¡Feliz Año Nuevo!");

let km = 10; // Primera parada

// Escribe tu código aquí

console.log(`¡El "TripleTen Express" está saliendo! Próximas paradas:`);
while (km <= 100) {
  console.log(`Parada a los ${km} km`);
  km += 10;
}

console.log(`¡El "TripleTen Express" ha llegado a su destino final!`);

const candyPrice = 2;
let candiesBought = 0;
let moneyLeft = 15;

while (moneyLeft >= candyPrice) {
  candiesBought++;
  console.log(`Julia compró ${candiesBought} dulces`);
  moneyLeft -= candyPrice;
}
console.log(moneyLeft);

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

let km1 = 10; // Primera parada

// Escribe tu código aquí

console.log(`¡El "TripleTen Express" está saliendo! Próximas paradas:`);

for (let km1 = 10; km1 <= 100; km1 += 10) {
  console.log("Parada a los " + km1 + " km");
}

console.log(`¡El "TripleTen Express" ha llegado a su destino final!`);

// Escribe tu código aquí
for (let n = 1; n <= 100; n++) {
  if (n % 2 === 0) {
    console.log(n + " es par");
  } else {
    console.log(n + " es impar");
  }
}

let start = 3;
let end = 7;
let total = 0;

// Escribe tu código aquí

for (let i = start; i <= end; i++) {
  total += i;
}

console.log(
  "La suma de los números del " + start + " al " + end + " es " + total,
);

// Recorre los números de participantes del 1 al 10
// Comprueba si el participante está descalificado (números 3 o 7)

for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  }
  console.log("El participante " + i + " puede competir");
}
