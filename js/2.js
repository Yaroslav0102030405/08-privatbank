// const stars = 3;
// let price;

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

const photoCard = document.querySelector(".photo-card");

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", showRandomEmployeeSalary);

btnEl2.addEventListener("click", showBalance);
end.addEventListener("click", onEnd);

const minSalary = 500;
const maxSalary = 1500;
let balance = 0;
let total = 0;

function showRandomEmployeeSalary() {
  photoCard.classList.add("none");
  balance = Number(Math.random() * (maxSalary - minSalary) + minSalary).toFixed(
    2
  );
  h1El.innerHTML = `Доступні кошти ${balance} грн.`;

  inputEl.classList.add("active");
  btnEl2.classList.add("active");
  labelEl.classList.add("active");
  btnEl.disabled = true;

  const audio1Src = "../music/reset.mp3";
  const audio2Src = "../music/У вас є доступні кош (3).mp3";
  // markupAudio(audio1Src, audio2Src, h1El);
  const audio1 = document.createElement("audio");
  audio1.src = `${audio1Src}`;
  audio1.autoplay = "autoplay";
  audio1.preload = "auto";
  console.log(audio1);

  const audio2 = document.createElement("audio");
  audio2.src = `${audio2Src}`;
  audio2.autoplay = "autoplay";
  audio2.preload = "auto";
  h1El.after(audio1, audio2);
}

function showBalance() {
  const value = Number(inputEl.value);
  inputEl.value = null;
  console.log(value);

  const text = document.createElement("p");
  text.classList.add("text");
  btnEl2.after(text);
  //   salary -= value;

  if (value === " " || value === 0) {
    text.innerHTML = `Не коректна сума, спробуйте знову.`;
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Це не коректна сума .mp3";
    // markupAudio(audio1Src, audio2Src);
    // text.after(audio1, audio2);
    const audio1 = document.createElement("audio");
    audio1.src = `${audio1Src}`;
    audio1.autoplay = "autoplay";
    audio1.preload = "auto";
    console.log(audio1);

    const audio2 = document.createElement("audio");
    audio2.src = `${audio2Src}`;
    audio2.autoplay = "autoplay";
    audio2.preload = "auto";
    h1El.after(audio1, audio2);
  } else if (value > balance) {
    text.innerHTML = `Недостатньо коштів для проведення операції`;

    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Недостатньо коштів д.mp3";
    // markupAudio(audio1Src, audio2Src);
    // text.after(audio1, audio2);
    const audio1 = document.createElement("audio");
    audio1.src = `${audio1Src}`;
    audio1.autoplay = "autoplay";
    audio1.preload = "auto";
    console.log(audio1);

    const audio2 = document.createElement("audio");
    audio2.src = `${audio2Src}`;
    audio2.autoplay = "autoplay";
    audio2.preload = "auto";
    h1El.after(audio1, audio2);
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
    // balance -= value;
    const x = Number((balance -= value)).toFixed(2);
    total += value;

    text.textContent = `Знято з рахунку ${value} грн. Дякуємо за візит.`;

    h1El.textContent = `Ваш залишок ${x} грн.`;
    a.classList.add("active2");

    checkEl.textContent = `Квитанція про зняття коштів ${total} грн`;
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Операція пройшла усп (1).mp3";
    // markupAudio(audio1Src, audio2Src);
    // text.after(audio1, audio2);
    const audio1 = document.createElement("audio");
    audio1.src = `${audio1Src}`;
    audio1.autoplay = "autoplay";
    audio1.preload = "auto";
    console.log(audio1);

    const audio2 = document.createElement("audio");
    audio2.src = `${audio2Src}`;
    audio2.autoplay = "autoplay";
    audio2.preload = "auto";
    h1El.after(audio1, audio2);
  } else {
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Введіть суму кратну .mp3";
    text.textContent = `Введіть суму кратну 100, 200, 500, 1000`;

    // markupAudio(audio1Src, audio2Src);
    // text.after(audio1, audio2, text);
    const audio1 = document.createElement("audio");
    audio1.src = `${audio1Src}`;
    audio1.autoplay = "autoplay";
    audio1.preload = "auto";
    console.log(audio1);

    const audio2 = document.createElement("audio");
    audio2.src = `${audio2Src}`;
    audio2.autoplay = "autoplay";
    audio2.preload = "auto";
    h1El.after(audio1, audio2);
  }
}

function onEnd() {
  a.classList.remove("active2");
  location.href = location.href;
}

// const markupAudio = (newAudio1, newAudio2, content) => {
//   const audio1 = document.createElement("audio");
//   audio1.src = `${newAudio1}`;
//   audio1.autoplay = "autoplay";
//   audio1.preload = "auto";
//   console.log(audio1);

//   const audio2 = document.createElement("audio");
//   audio2.src = `${newAudio2}`;
//   audio2.autoplay = "autoplay";
//   audio2.preload = "auto";

//   return `${content}.after(audio1, audio2)`;
// };
