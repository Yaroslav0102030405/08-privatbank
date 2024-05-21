const age = 30;
const totalPrice = 20.24;
const rrr = "пролд";
const isOpen = true;
const w = null;
const q = undefined;

const object = {};
const array = [];
const c = function () {};

console.log(typeof age);
console.log(typeof totalPrice);
console.log(typeof isOpen);
console.log(typeof w);
console.log(typeof q);

console.log(typeof object);
console.log(typeof array);
console.log(typeof c);
console.log(typeof rrr);

let elementWidth = "20px";
let elementHeight = "200.12122345px";
let el = 150.12334;

console.log(Number.parseInt(elementWidth));
console.log(Number(elementHeight).toFixed(3));
console.log(el.toFixed(1));

// string
const message = "В этой строке 26 символов.";
console.log(message.length);

const firstName = "Chelsy";
const lastName = "Emerald";
console.log(firstName + lastName + 1 + "2kjrrkfmmv");

const quantity = 25;
const order = `Вы заказали ${quantity} холодильников`;
console.log(order);

let brand = "saMMMsung";
console.log(brand.slice(1).toLowerCase());
console.log(brand.toUpperCase());
console.log(brand.slice(5, brand.length));

const blackListenedWord = "спам";
const string = "У принца Абдула Спам";

console.log(string.toLowerCase().includes(blackListenedWord));

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(false));
// все остальное приводиться к true
console.log(1 && 2 && "hello");
console.log(false || 3 || "thjkdl");
console.log(!true);
console.log(!false);

const isOline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOline && isFriend && !isDnd;
console.log("Может открыть чат", canOpenChat);

const sub = "pro";

const canAccert = sub === "pro" || sub === "vip";
console.log("Усть доступ к контенту", canAccert);

const salary2 = 2000;

if (salary2 <= 1000) {
  console.log("Первій уровень");
} else if (salary2 >= 2000) {
  console.log("Второй уровень");
} else {
  console.log("Третий уровень");
}

const balance = -1;

const message2 = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";
console.log(message2);

const b = 10;

if (true) {
  const a = 5;
  console.log(b);
}

console.log(b);
// console.log(a);
