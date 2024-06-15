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

// Ассинхронность
// const logMessage = () => {
//   console.log("До");
// };

// logMessage();

// setTimeout(() => {
//   console.log("2 - Внутри");
// }, 4000);

// setTimeout(() => {
//   console.log("1 - Внутри");
// }, 3000);

// console.log("После");

// пример2
// const logger = (time) => {
//   console.log(`Лог через ${time}`);
// };

// запланировали 1 раз вызов отложенной функции
// const timerId = setTimeout(logger, 2000, 200);

// const counter = 5;

// if (counter < 3) {
//   // очистили отложенный вызов функции
//   clearTimeout(timerId);
// }

// сетинтервал
// const MAX_PROMPT_ATTEMPTS = 3
// let counter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (counter === 3 || hasSubscribed) {
//     clearInterval(intervalId);
//     return;
//   }
//   console.log("Привет");
//   counter += 1;
// }, 2000);

// Promise - это обьект у которого есть несколько состояний

// Promise
// const fetchPokemonById = (id) => {
//   // fetch - вернет проимс
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(4).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(5).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log(error);
// }

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("✅ это резолт");
//       }

//       reject("❌ это реджект");
//     }, 2000);
//   });
// };

// makePromise()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const aEl = document.querySelector(".a");

// fetch("https://pokeapi.co/api/v2/pokemon/2")
//   .then((response) => response.json())
//   .then((pokemon) => {
//     console.log(pokemon);
//     const markup = pokemonMarkup(pokemon);
//     aEl.innerHTML = markup;
//   })
//   .catch((error) => console.log(error));

// const pokemonMarkup = (pokemon) => {
//   return `<img src="${pokemon.sprites.front_default}" />`;
// };

// рефакторин получить одного
const BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemon = (pokemonId) => {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then((response) =>
    response.json()
  );
};

function renderPokemonCard(pokemon) {
  const pokemonMarkup = (pokemon) => {
    return `<img src="${pokemon.sprites.front_default}" />`;
  };

  const markup = pokemonMarkup(pokemon);
  aEl.innerHTML = markup;
}

fetchPokemon(1)
  .then(renderPokemonCard)
  .catch((error) => {
    console.log(error);
  });

// получить много
fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
  .then((r) => r.json())
  .then(console.log)
  .catch((error) => console.log(error));
