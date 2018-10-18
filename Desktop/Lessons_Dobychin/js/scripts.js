/*
Вводный пример

setTimeout(reminder, 5000);
function reminder() {
    alert("Всем привет на нашем курсе!");
}
*/

/*
Зарезервированные имена
let for;
let while;
let var;
let let;
полный перечень в методичке
*/

//Второй пример. Проход на карусель
const MAX_WEIGHT = 100; //Максимальный допустимый вес карусели
let weightOfClient = 90;   //Вес текущего человека
let nameOfClient = "Михаил";    //Имя текущего человека

if (weightOfClient > MAX_WEIGHT) {
    alert(nameOfClient + ", вам нельзя кататься на карусели!");
} else {
    (nameOfClient + ", катайтесь на здоровье!");
}

//Числа - Number
console.log("***Числа - Number***");
let testNumber = 101; //Число типа integer 
testNumber = 101.567;   //Число типа float

console.log(testNumber);
console.log(1 / 0);   //Infinity
console.log("число" * 2); //NaN

console.log(1 * (2 + 8) / 7); //Различные матеиматические операции

//Строки - String
console.log("***Строки - String***");
let testString = "Мама мыла раму";
console.log(testString);
testString = "Мама \"мыла\" раму";
console.log(testString);
testString = 'Мама "мыла" раму';
console.log(testString);
let testShortWord = "мыла";
testString = nameOfClient + " " + testShortWord + ' раму';
console.log(testString);

//Булевый тип - Boolean
console.log("***Булевый тип - Boolean***");
let checked = true; //Поле галочка - отмечено
checked = false;    //Поле галочка - сняли отметку
console.log(checked);
checked = 1; //Поле галочка - отмечено
checked = 0;    //Поле галочка - сняли отметку
console.log(checked);

//Специальные значения null и undefined
console.log("***Специальные значения null и undefined***");
checked = null;
console.log(checked);

let x;
console.log(x);

//Объект - Object
console.log("***Объект - Object***");
/**
 * Смотрим в консоль, объект window
 */

 console.log(typeof testNumber);

//"use strict";