const btnList = document.querySelector(".btn-list");
const price = document.querySelector(".price");
const total = document.querySelector(".total");
const input = document.querySelector("input");
const ac = document.querySelector(".ac");
const total222 = document.querySelector(".total222");

let string = "";
let string2 = "";

// let ggg = "50%;

btnList.addEventListener("click", onClick);
// price.addEventListener("click", onPrice);

function onClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  console.log(input.value);
  ac.textContent = `Цена за 1 день бронирование:  ${input.value} грн`;
  //   string = e.target.textContent * price.textContent * 0.6;
  string = ((e.target.textContent * input.value) / 100) * 60;
  console.log(string);

  price.textContent = `${input.value}`;
  //   console.log(price.textContent);
  total.textContent = `Цена за ${e.target.textContent} дня со скидкой в 40% = ${string} грн`;
  string2 = ((e.target.textContent * input.value) / 100) * 40;
  total222.textContent = `Скидка ${string2} грн`;
}

// function onPrice() {}
