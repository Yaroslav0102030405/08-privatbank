// DOM - Обьектная Модель Документа - независимый интерфейс ддля работы с HTML-документом.
// Содержит набор свойств и методов позволяющим искать, создавать и удалять элементы, реагировать на действия пользователя.
// Сам язык джаваскрипт не умеет работать с разметкой html или со стилями css. Он ничего про них не знает.
// У него в ядре нету конструкции для работы с брайзером.
// Каждый тег в html - представлен в DOM javascript обьектом. DOM есть только в браузере.
const image = document.querySelector(".image");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", a);
btn1.addEventListener("click", b);

function a() {
  image.src = "../images/woman-01-removebg-preview.png";
}

function b() {
  image.src = "../images/man-01-removebg-preview.png";
}

// const c = {
//   title: "Привет!",
//   price: 100,
// };

// const titleEl = document.createElement("h1");
// titleEl.textContent = c.title;

// const priceEl = document.createElement("p");
// priceEl.textContent = `${c.price} грн`;

// document.body.append(titleEl, priceEl);

// если мы хотим поставит елемент в коллекцию тогда используем
// firstElementChild,  lastChild[1], lastElementChild

const picker = document.querySelector(".picker");

const colorPickerOptions = [
  { label: "red", color: "#2ecc71" },
  { label: "red", color: "#f1c40f" },
  { label: "red", color: "#e74c3c" },
];

// const elements = [];

// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.style.width = "75px";
//   buttonEl.style.height = "50px";

//   return buttonEl;
// });

// picker.append(...elements);

const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    buttonEl.style.width = "75px";
    buttonEl.style.height = "50px";

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);

picker.append(...elements);

const colors = [{ hex: "#f4c144" }, { hex: "#3498db" }];

const colorsEl = document.querySelector(".colors");
const markup = createColorCardsMarkup(colors);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex }) => {
      return `<div class="color"
      style="background-color: ${hex}"></div>`;
    })
    .join("");
}

colorsEl.insertAdjacentHTML("beforeend", markup);
