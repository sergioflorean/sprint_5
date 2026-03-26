let counter = 0;

function increaseCounter() {
  counter++;
}

// Llamar a la función 3 veces
increaseCounter();
increaseCounter();
increaseCounter();

console.log(counter);

for (let i = 0; i < 10; i++) {
  increaseCounter();
}

console.log(counter);

let year = 2020;

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     console.log(`${year} es un año bisiesto.`);
//   } else if (year % 100 === 0) {
//     console.log(`${year} no es un año bisiesto.`);
//   } else if (year % 4 === 0) {
//     console.log(`${year} es un año bisiesto.`);
//   } else {
//     console.log(`${year} no es un año bisiesto.`);
//   }
// }

// isLeapYear(year);

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     console.log(`${year} es un año bisiesto.`);
//   } else if (year % 100 === 0) {
//     console.log(`${year} no es un año bisiesto.`);
//   } else if (year % 4 === 0) {
//     console.log(`${year} es un año bisiesto.`);
//   } else {
//     console.log(`${year} no es un año bisiesto.`);
//   }
// }

// isLeapYear(2020);
// isLeapYear(2021);
// isLeapYear(2022);

// Declara la función calculateArea()

function calculateArea(length, width) {
  console.log(length * width);
}

calculateArea(5, 10); // 50
calculateArea(1, 5); // 5
calculateArea(3, 3); // 9

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

let checkedResult = isLeapYear(2020);
console.log(checkedResult);

// escribe tu código aquí

// function addTax(price) {
//   let tax = 1.1;
//   return price * tax;
// }

// const result = addTax(100);
// const rounded = result.toFixed(0);
// console.log(rounded);

function addTax(price) {
  return price * 1.1;
}

// escribe tu código aquí
function addTax(price) {
  return price * 1.1;
}

function processPrices(prices) {
  for (let i = 0; i < prices.length; i++) {
    const finalPrice = addTax(prices[i]).toFixed(0);

    console.log(
      `Artículo ${i + 1}: precio base ${prices[i]} — precio final ${finalPrice}`,
    );
  }
}

const itemPrices = [100, 250, 80, 40];
processPrices(itemPrices);

// Salida:
// Artículo 1: precio base 100 — precio final 110
// Artículo 2: precio base 250 — precio final 275
// Artículo 3: precio base 80 — precio final 88
// Artículo 4: precio base 40 — precio final 44
