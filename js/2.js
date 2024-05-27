const stars = 3;
let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else {
//   console.log("Такого количества звед нет");
// }

// console.log(price);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   default:
//     console.log("Такого количества звезд нет");
// }

// console.log(price);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 50;
//     break;

//   default:
//     price = "Такого количетсва звед нет";
// }

// console.log(price);

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// let total = 0;

// for (let i = 0; i < 5; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   total += i;
// }

// console.log(total);

const h1El = document.querySelector(".h1");
const inputEl = document.querySelector("input[data-value]");
const btnEl2 = document.querySelector(".btn2");
const labelEl = document.querySelector(".label-input");
const end = document.querySelector(".btn-end");
const checkEl = document.querySelector(".check");
const a = document.querySelector(".a");

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", showRandomEmployeeSalary);

btnEl2.addEventListener("click", showBalance);
end.addEventListener("click", onEnd);

const minSalary = 500;
const maxSalary = 1500;
let balance = 0;
let total = 0;

function showRandomEmployeeSalary() {
  balance = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

  // h1El.textContent = `Доступні кошти - ${balance} грн.`;
  // h1El.textContent = `Доступні кошти - ${balance} грн.`;
  h1El.innerHTML = `Доступні кошти - ${balance} грн. <audio src="../music/reset.mp3" autoplay preload="auto"></audio> <audio src="../music/У вас є доступні кош.mp3" autoplay preload="auto"></audio>`;
  inputEl.classList.add("active");
  btnEl2.classList.add("active");
  labelEl.classList.add("active");
  btnEl.disabled = true;
  // e.target.innerHTML = `<audio src="./../music/click.mp3" autoplay preload="auto"></audio>`;
}

function showBalance() {
  const value = Number(inputEl.value);
  inputEl.value = "";
  console.log(value);

  const text = document.createElement("p");
  text.classList.add("text");
  btnEl2.after(text);
  //   salary -= value;

  if (value === " " || value === 0) {
    text.innerHTML = `Не коректна сума, спробуйте знову.<audio src="../music/reset.mp3" autoplay preload="auto"></audio> <audio src="../music/Нажаль 0 це не корек.mp3" autoplay preload="auto"></audio>`;
  } else if (value > balance) {
    text.textContent = `Недостатньо грошей для проведення операції`;
  } else if (
    value === 100 ||
    value === 200 ||
    value === 300 ||
    value === 500 ||
    value === 700 ||
    value === 900 ||
    value === 1000 ||
    value === 200 * 2 ||
    value === 300 * 2 ||
    value === 400 * 2 ||
    value === 1000 + 100 ||
    value === 600 * 2 ||
    value === 1300 ||
    value === 700 * 2 ||
    value === 1500
  ) {
    balance -= value;
    total += value;
    text.innerHTML = `Знято з рахунку - ${value} грн. Дякуємо за візит. <audio src="../music/reset.mp3" autoplay preload="auto"></audio> <audio src="../music/Дякуємо за візит .mp3" autoplay preload="auto"></audio>`;
    h1El.textContent = `Залишок на вашому рахунку - ${balance} грн.`;

    a.classList.add("active2");

    checkEl.textContent = `Квитанція про зняття коштів ${total} грн`;
  } else {
    text.innerHTML = `Введіть суму кратну 100, 200, 500, 1000  <audio src="../music/reset.mp3" autoplay preload="auto"></audio> <audio src="../music/Введіть суму кратну .mp3" autoplay preload="auto"></audio>`;
  }
}

function onEnd() {
  a.classList.remove("active2");
  location.href = location.href;
  end.innerHTML = `Візит <audio src="../music/reset.mp3" autoplay preload="auto"></audio>`;
}
