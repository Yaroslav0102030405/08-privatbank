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

const refs = {
  titleEl: document.querySelector(".title"),
  inputEl: document.querySelector("input[data-value]"),
  btnEl2: document.querySelector(".btn-confirm"),
  labelEl: document.querySelector(".label-input"),
  end: document.querySelector(".btn-end"),
  checkEl: document.querySelector(".check"),
  a: document.querySelector(".bottom-check"),
  photoCard: document.querySelector(".photo-card"),
  btnEl: document.querySelector(".btn-start"),
  label2: document.querySelector(".label-input2"),
  input2: document.querySelector("input[data-value2]"),
  btnEl5: document.querySelector(".btn-confirm2"),
};

let start = 0;
let total2 = 1;

const minSalary = 500;
const maxSalary = 1500;
let balance = 0;
let total = 0;

const PASSWORD_CARD = 1234;

refs.btnEl.addEventListener("click", onEnterPinCode);
refs.btnEl5.addEventListener("click", onСonfirmPinСode);
refs.btnEl2.addEventListener("click", showBalance);
refs.end.addEventListener("click", onEnd);

// refs.photoCard.computedStyleMap.display = "none";
const text = document.createElement("p");
text.classList.add("text2");

function onСonfirmPinСode() {
  const value2 = Number(refs.input2.value);
  if (value2 === PASSWORD_CARD) {
    showRandomEmployeeSalary();
    // text.innerHTML = `✔️ Dірний pin-код.`;
  } else if (value2 !== PASSWORD_CARD) {
    start += total2;
    text.innerHTML = `❌ Невірний pin-код. Спроба ${start} `;
    refs.btnEl5.after(text);
    if (start === 1) {
      const audio1Src = "../music/reset.mp3";
      const audio2Src = "../music/невірний пін код Спр.mp3";
      markupAudio(audio1Src, audio2Src, refs.btnEl5);
    } else if (start === 2) {
      const audio1Src = "../music/reset.mp3";
      const audio2Src = "../music/невірний пін код Спр.mp3";
      markupAudio(audio1Src, audio2Src, refs.btnEl5);
    } else if (start === 3) {
      refs.btnEl5.setAttribute("disabled", "");

      text.innerHTML = `❌ Картка заблокована. Спроба ${start} `;
      refs.btnEl5.after(text);

      const audio1Src = "../music/reset.mp3";
      const audio2Src = "../music/Ваша картка заблоков.mp3";
      markupAudio(audio1Src, audio2Src, refs.btnEl5);
    }
  }
}

// const minSalary2 = 1000;
// const maxSalary2 = 9000;
// let balance2 = 0;

function onEnterPinCode() {
  refs.photoCard.classList.add("none");
  refs.btnEl.setAttribute("disabled", "");
  refs.titleEl.textContent = "Введіть PIN-код для операції...";
  refs.input2.classList.add("active");
  refs.btnEl5.classList.add("active");
  refs.label2.classList.add("active");

  // balance2 = Number(
  //   Math.random() * (maxSalary - minSalary) + minSalary
  // ).toFixed();

  // refs.label2.innerHTML = `PIN-код: ${balance2}`;

  const audio1Src = "../music/reset.mp3";
  const audio2Src = "../music/Введіть пін код.mp3";
  markupAudio(audio1Src, audio2Src, refs.titleEl);
}

function showRandomEmployeeSalary() {
  refs.photoCard.classList.add("none");
  refs.label2.classList.remove("active");
  refs.btnEl5.classList.remove("active");
  balance = Number(Math.random() * (maxSalary - minSalary) + minSalary).toFixed(
    2
  );
  refs.titleEl.innerHTML = `Доступні кошти ${balance} <span class="span-uan">грн</span>`;

  refs.inputEl.classList.add("active");
  refs.btnEl2.classList.add("active");
  refs.labelEl.classList.add("active");
  // refs.btnEl.disabled = true;
  text.innerHTML = `✔️ Вірний pin-код.`;
  refs.btnEl5.after(text);

  const audio1Src = "../music/reset.mp3";
  const audio2Src = "../music/У вас є доступні кош (3).mp3";
  markupAudio(audio1Src, audio2Src, refs.titleEl);
}

function showBalance() {
  const value = Number(refs.inputEl.value);
  refs.inputEl.value = null;

  const text = document.createElement("p");
  text.classList.add("text");
  refs.btnEl2.after(text);
  // salary -= value;

  if (value === " " || value === 0) {
    text.innerHTML = `Не коректна сума, спробуйте знову.`;
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Це не коректна сума .mp3";
    markupAudio(audio1Src, audio2Src, text);
  } else if (value > balance) {
    text.innerHTML = `❌ Недостатньо коштів для проведення операції`;

    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Недостатньо коштів д.mp3";
    markupAudio(audio1Src, audio2Src, text);
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
    const balance2 = Number((balance -= value)).toFixed(2);
    total += value;

    text.textContent = `✔️ Знято з рахунку ${value} грн. Дякуємо за візит.`;

    refs.titleEl.textContent = `Ваш залишок ${balance2} грн.`;
    refs.a.classList.add("active2");

    refs.checkEl.textContent = `Квитанція про зняття коштів ${total} грн`;
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Операція пройшла усп.mp3";
    markupAudio(audio1Src, audio2Src, refs.titleEl);
  } else {
    const audio1Src = "../music/reset.mp3";
    const audio2Src = "../music/Введіть суму кратну .mp3";
    text.textContent = `Введіть суму кратну 100, 200, 500, 1000`;
    markupAudio(audio1Src, audio2Src, text);
  }
}

const markupAudio = (newAudio1, newAudio2, tag) => {
  const audio1 = document.createElement("audio");
  audio1.src = `${newAudio1}`;
  audio1.autoplay = "autoplay";
  audio1.preload = "auto";
  console.log(audio1);

  const audio2 = document.createElement("audio");
  audio2.src = `${newAudio2}`;
  audio2.autoplay = "autoplay";
  audio2.preload = "auto";

  tag.after(audio1, audio2);
};

function onEnd() {
  refs.a.classList.remove("active2");
  location.href = location.href;
}
