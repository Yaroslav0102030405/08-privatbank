const iconBtn1 = document.querySelector(".btn-icon1");
const iconBtn2 = document.querySelector(".btn-icon2");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const formSubmit = document.querySelector(".js-form");
const btnSubmit = document.querySelector(".submit");
const dataHello = document.querySelector('[data-hello="hello"]');
const dataHi = document.querySelector('[data-hi="hi"]');
const success = document.querySelector(".success");
const item01 = document.querySelector(".item-01");

iconBtn1.addEventListener("click", () => {
  item1.src = "../audio/Hello.mp3";
});

iconBtn2.addEventListener("click", () => {
  item2.src = "../audio/Hi.mp3";
});

formSubmit.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  console.log(formElements);

  // const formData = new FormData(e.currentTarget);
  // console.log(formData);

  const hello = formElements.hello.value;
  const hi = formElements.hi.value;

  if (hello === "Hello" && hi === "Hi") {
    success.textContent = "✔️ Правільна відповідь";
    item3.src = "../audio/Правильна відповідь.mp3";
    formSubmit.reset();
    item01.classList.add("gray");
  } else {
    success.textContent = "❌😈 Не правильна відповідь";
    item3.src = "../audio/Відповідь не правиль.mp3";
    formSubmit.reset();
  }
}
