const fnA = function (message, callback) {
  console.log(message);
  callback(100);
};

const fnB = function (number) {
  console.log(number);
};

fnA("fdfdfdfdfd", fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(10, 8, sub);

// const onReguestSuccess = function (response) {
//   console.log(response);
// };

// fetch("../data/1.json")
//   .then((res) => res.json())
//   .then(onReguestSuccess);

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    // console.log(test(el));

    if (test(el)) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const callback2 = function (value) {
  return value <= 4;
};

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 200;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2));
console.log(filter(fruits, getFruitsWithQuantity));

// Замыкание - когда функция возврщает из себя другую функцию и во время вызова будет иметь доступ ко всем локальным переменным (обасти видимости) родительской функции
const fnC = function (parameter) {
  const innerVariables = "значение внутрненней переменной функции fnC";

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariables);
    console.log("Это вызов innerFunction");
  };

  return innerFunction;
};

// console.log(fnC(555));
// const fnB1 = fnC(555);
// fnB1();
// console.log(fnB1);

// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();
// myLib.add(10);
// console.log(myLib.getValue());

// стрелочные функции - это всегдафункциональные выражения
const logMessage = (message) => {
  console.log(message);
};

logMessage("Привет!");

const greet = () => {
  console.log("Привет!");
};

greet();

// Явный возврат
const add1 = (a, b) => {
  return a + b;
};

console.log(add1(2, 3));

// неявный возврат
const add2 = (a, b) => a + b;
console.log(add2(5, 4));
// стрелки не бывают методами обьекта потмоу что this у них будет undefined
// стрелка не может быть конструктором
// усли нужно вренуть обьект и без return тогда через выражение () - через круглые скобки

// юзаеться map filter reduce find
