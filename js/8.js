// this - это ссылка на обтек в контексте которого она была вызвана эта функция
// this есть только внутри функции
// функция - это сложный тип
// Значение ключевого слова this записываеться именно во время вызова функции а в стрелках там где обьевил (наборот)
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log(this);
//     console.log(this.tag);
//   },
// };

// // вызов в контексте обьекта
// user.showTag();

// const foo = function () {
//   console.log(this);
// };

// в строгом режиме будет undefined потому что никакой обьект ее не вызвал
// без строгого режиме будет window
// foo();

// this - это как локальная переменная которая есть только внутри функции
// const showTag = function () {
//   console.log(this);
//   console.log(this.tag);
// };

// const user1 = {
//   tag: "Mango",
// };

// user1.showUserTag = showTag;
// console.log(user1);

// Это модель данных или логика
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

// обновление интерфейса
const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});

// const iconBtn1 = document.querySelector(".btn-icon1");
// const iconBtn2 = document.querySelector(".btn-icon2");
// const item1 = document.querySelector(".item-1");
// const item2 = document.querySelector(".item-2");
// const item3 = document.querySelector(".item-3");
// const formSubmit = document.querySelector(".js-form");
// const btnSubmit = document.querySelector(".submit");
// const dataHello = document.querySelector('[data-hello="hello"]');
// const dataHi = document.querySelector('[data-hi="hi"]');
// const success = document.querySelector(".success");

// iconBtn1.addEventListener("click", () => {
//   item1.src = "../audio/Hello.mp3";
// });

// iconBtn2.addEventListener("click", () => {
//   item2.src = "../audio/Hi.mp3";
// });

// formSubmit.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const formElements = e.currentTarget.elements;
//   console.log(formElements);

//   // const formData = new FormData(e.currentTarget);
//   // console.log(formData);

//   const hello = formElements.hello.value;
//   const hi = formElements.hi.value;

//   if (hello === "Hello" && hi === "Hi") {
//     success.textContent = "✔️ Правільна відповідь";
//     item3.src = "../audio/Правильна відповідь.mp3";
//     formSubmit.reset();
//   } else {
//     success.textContent = "❌😈 Не правильна відповідь";
//     item3.src = "../audio/Відповідь не правиль.mp3";
//     formSubmit.reset();
//   }
// }
