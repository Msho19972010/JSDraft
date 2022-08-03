"use strict";

let currentYear = 2018;
let carName = "Ford";
let carYear = 2014;
let carAge = currentYear - carYear;

if (carAge < 5) {
  console.log(carName + " меньшне 5 лет");
} else if (carAge >= 5 && carAge <= 10) {
  console.log(
    carName + " больше или равен 5 годам или меньше или равен 10 годам"
  );
} else {
  console.log("Возрат " + carName + " равняется " + carAge + " годам");
}

// Тернарные операторы

4 ? console.log("Значение true") : console.log("Значение false");
// 4-условие; ?-if; :-else;

// Запись через условные операторы

let personAge = 16;
let message;

if (personAge < 18) {
  message = "Человек еще не совершеннолетний";
} else {
  message = "Человек совершеннолетний";
}

// Запись через тернарные операторы
let personAge = 20;

let message =
  personAge < 18
    ? "Человек ещё не совершеннолеинмй"
    : "Человек совершеннолетний";

console.log(message);

// switch case

// запись через if else

let carColor = "yellow";

if (carColor === "green") {
  console.log("Цвет машины зелёный");
} else if (carColor === "yellow") {
  console.log("Цвет машины жёлтый");
} else if (carColor === "red") {
  console.log("Цвет машины красный");
} else {
  console.log("Цвет машины не определён");
}

// запись через Switch case

switch (carColor) {
  case "green":
    console.log("Цвет машины зелёный");
    break;
  case "yellow":
    console.log("Цвет машины жёлтый");
    break;
  case "red":
    console.log("Цвет машины красный");
    break;
  default:
    console.log("Цвет машины не определён");
}

// Функции

let currentYear = 2018;
let carYear = 2008;
let personYear = 1990;
let carAge = currentYear - carYear;

function calculateAge(year) {
  let result = currentYear - year;
  return result;
}

function checkAndLogAge(year, type, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log("Возраст " + type + " меньше " + compareTo + " лет");
  } else {
    console.log("Возраст " + type + " больше " + compareTo + " лет");
  }
}

checkAndLogAge(carYear, "машины", 20);
checkAndLogAge(personYear, "человека", 8);

// Способы создания функций

let newMessage = "Hello world";

console.log(newMessage.substr(newMessage.indexOf("world"), 0));

Циклы

for

let num = [1, 2, 3, 4, 5];

num.push("Not a number");
num.push("new Line");

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// continue

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    continue;
  }
  console.log(num[i]);
}

// break

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    break;
  }
  console.log(num[i]);
}
