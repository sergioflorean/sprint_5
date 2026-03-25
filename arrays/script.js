let morningList = [
  "Levantarse de la cama",
  "Cepillarse los dientes",
  "Ver las redes sociales",
  "Desayunar",
];

console.log(morningList[0]);
console.log(morningList[morningList.length - 1]);

morningList[2] = "Ejercicio";
morningList[morningList.length] = "Lavar los platos";
console.log(morningList);

let students = ["Isabel", "Elisa", "Tomás"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i] + " Cohorte 30");
}

for (let student of students) {
  console.log(student + " Cohorte 30");
}

// const numbers = [-35, 3, -21, 32, -54, -69, 85, 61, 88, 68];

// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// console.log(sum);

const songLengths = [4, 7, 5, 6, 3, 8, 5, 4, 6, 3];
const maxRecordLength = 40;

let recordLength = 0;
let songsOnRecord = 0;

for (let songLength of songLengths) {
  if (recordLength + songLength <= maxRecordLength) {
    recordLength += songLength;
    songsOnRecord++;
  } else {
    break;
  }
}

console.log(recordLength);
console.log(songsOnRecord);

// const numbers = [8, 14, 5, 3, 20];

// let maximum = numbers[0];
// for (let number of numbers) {
//   if (number > maximum) {
//     maximum = number;
//   }
// }

// console.log("Valor máximo:", maximum);

const phone = "iPhone";
const screeningBin = [];

screeningBin.push(phone);
console.log(screeningBin);
screeningBin.pop();
console.log(screeningBin);

const numbers = [35, 3, 21, 32, 54, 69, 85, 61, 88, 68];
const evenNumbers = [];
const oddNumbers = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
}

console.log(evenNumbers);
console.log(oddNumbers);

// ARRAYS ANIDADOS

const books = [
  ["Matar un ruiseñor", "Harper Lee", "1960"],
  ["El gran Gatsby", "F. Scott Fitzgerald", "1925"],
  ["Cien años de soledad", "Gabriel García Márquez", "1967"],
];

console.log(books);

for (let book of books) {
  console.log(
    "Título: " +
      book[0] +
      ", Autor: " +
      book[1] +
      ", Año de publicación: " +
      book[2],
  );
}

for (let book of books) {
  if (book[2] > 1950) {
    console.log(
      "Título: " +
        book[0] +
        ", Autor: " +
        book[1] +
        ", Año de publicación: " +
        book[2],
    );
  }
}

for (let i = 0; i < books.length; i++) {
  if (books[i][2] > 1950) {
    console.log(
      `Título: ${books[i][0]}, Autor: ${books[i][1]}, Año de publicación: ${books[i][2]}`,
    );
  }
}
