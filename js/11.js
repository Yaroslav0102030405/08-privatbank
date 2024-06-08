// const numbers = [1, 2, 3, 4, 5];

// forEach - это замена for и for of
// numbers.forEach(function (number, index, array) {
//   console.log(number);
// });

// const numbers = [10, 15, 20, 25, 30];

// const doubleNums = numbers.map(function (number) {
//   //   console.log(number);
//   return number * 2;
// });

// console.log(doubleNums);

// const fruits = [
//   { id: "player-1", name: "apples", quantity: 200, isFresh: true },
//   { id: "player-2", name: "grapes", quantity: 150, isFresh: false },
//   { id: "player-3", name: "bananas", quantity: 100, isFresh: true },
// ];

// const nameFruits = fruits.map((fruit) => fruit.name);
// console.log(nameFruits);

// const quantityFruits = fruits.map((fruit) => fruit.quantity);
// console.log(quantityFruits);

// const isFreshFruits = fruits.map((fruit) => fruit.isFresh);
// console.log(isFreshFruits);

// const res = fruits.map(({ name, isFresh }) => {
//   return {
//     name,
//     isFresh,
//   };
// });

// console.log(res);

// Копия обьекта
// const updateFresh = fruits.map((fruit) => {
//   return {
//     ...fruit,
//     quantity: fruit.quantity * 1.1,
//     name: fruit.name + "lukosha",
//   };
// });

// console.log(updateFresh);

// const playerIdToUpdate = "player-2";

// const playerIds = fruits.map((fruit) => {
//   if (fruit.id === playerIdToUpdate) {
//     return { ...fruit, quantity: fruit.quantity + 100 };
//   }
//   return fruit;
// });

// console.log(playerIds);

// const playerIds = fruits.map((fruit) => {
//   return fruit.id === playerIdToUpdate
//     ? { ...fruit, quantity: fruit.quantity + 100 }
//     : fruit;
// });

// console.log(playerIds);

// const numbers = [11, 12, 13, 14, 15, 20, 21, 22, 23, 24];

// const filterNumbers = numbers.filter((number) => {
//   return number < 15 || number > 23;
// });

// console.log(filterNumbers);

// const fruits = [
//   { id: "player-1", name: "apples", quantity: 200, online: true },
//   { id: "player-2", name: "grapes", quantity: 150, online: false },
//   { id: "player-3", name: "bananas", quantity: 100, online: true },
// ];

// const onlineFruits = fruits.filter((fruit) => fruit.online);
// console.log(onlineFruits);

// const numbers1 = [1, 2, 3, 4, 5, 6];

// const total = numbers1.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 200,
//   ajax: 300,
// };

// const totalSalary = Object.values(salary).reduce((acc, value) => {
//   return acc + value;
// }, 0);

// console.log(totalSalary);

const fruits = [
  { id: "player-1", name: "apples", quantity: 200, online: true },
  { id: "player-2", name: "grapes", quantity: 150, online: false },
  { id: "player-3", name: "bananas", quantity: 100, online: true },
];

const totalQuantity = fruits.reduce((acc, fruit) => {
  return acc + fruit.quantity;
}, 0);

console.log(totalQuantity);

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, { price, quantity }) => {
  return acc + price * quantity;
}, 0);

console.log(totalAmount);

const tweeps = [
  { id: 1, likes: 5, tags: ["js", "node.js"] },
  { id: 2, likes: 2, tags: ["html", "css"] },
  { id: 3, likes: 17, tags: ["html", "css"] },
  { id: 4, likes: 10, tags: ["js", "react"] },
];

const tagsTweep = tweeps.reduce((acc, tweep) => {
  acc.push(...tweep.tags);

  return acc;
}, []);
console.log(tagsTweep);
