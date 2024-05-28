// const btnList = document.querySelector(".btn-list");
// const price = document.querySelector(".price");
// const total = document.querySelector(".total");
// const input = document.querySelector("input");
// const ac = document.querySelector(".ac");
// const total222 = document.querySelector(".total222");

// let string = "";
// let string2 = "";

// // let ggg = "50%;

// btnList.addEventListener("click", onClick);
// // price.addEventListener("click", onPrice);

// function onClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   console.log(input.value);
//   ac.textContent = `Цена за 1 день бронирование:  ${input.value} грн`;
//   //   string = e.target.textContent * price.textContent * 0.6;
//   string = ((e.target.textContent * input.value) / 100) * 60;
//   console.log(string);

//   price.textContent = `${input.value}`;
//   //   console.log(price.textContent);
//   total.textContent = `Цена за ${e.target.textContent} дня со скидкой в 40% = ${string} грн`;
//   string2 = ((e.target.textContent * input.value) / 100) * 40;
//   total222.textContent = `Скидка ${string2} грн`;
// }

// function onPrice() {}
// функция без вызова ничего не делает
// const add = function (a, b) {
//   console.log("Вызов функции");
//   return a + b;
// };
// // вызово функции
// console.log(add(5, 10));
// console.log(add(10, 20));

// // returt по условию
// const fn = function (value) {
//   if (value < 50) {
//     return "Меньше чем 50";
//   } else {
//     return "Больше чем 50";
//   }
// };

// console.log(fn(50));

// const cart = [1, 2, 3, 4, 5];
// let total = 0;

// const fn1 = function (items) {
//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(fn1(cart));
// console.log(fn1([10, 20, 30]));

// console.log(total);

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(["Mango", "Kiwi"]);

// const logins = ["Mango", "Kiwi", "Poly"];
// const loginToFind = "Poly";

// const fn2 = function (allLogins, login) {
//   // const message = allLogins.includes(login)
//   //   ? `Пользователь ${login} найден`
//   //   : `Пользователь ${login} не найден`;

//   // return message;

//   return allLogins.includes(login)
//     ? `Пользователь ${login} найден`
//     : `Пользователь ${login} не найден`;
// };

// console.log(fn2(logins, loginToFind));
// console.log(fn2(logins, "Mango"));

// найти самое маленькое число
// const numbers = [11, 12, 13, 14, 5];

// const fn3 = function (allNumbers) {
//   let smallesNumber = numbers[0];

//   for (const allNumber of allNumbers) {
//     if (allNumber < smallesNumber) {
//       smallesNumber = allNumber;
//     }
//   }

//   return smallesNumber;
// };
// console.log(fn3(numbers));
// console.log(fn3([11, 10, 7]));

// const slugify = function (string) {
//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Top love case"));

// операция ...rest собирает все аргументы в массив и рест ставиться в конце
// const fn4 = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(fn4(1, 2, 3, 4));
// console.log(fn4(6, 7, 8, 9));

// const filterNumbers = function (array, ...args) {
//   console.log(array);
//   console.log(args);
//   const uniqueElements = [];

//   for (const arr of array) {
//     console.log(arr);
//     if (args.includes(arr)) {
//       uniqueElements.push(arr);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4], 5, 1, 2, 3, 4));
