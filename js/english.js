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
const inputEl = document.querySelector(".js-input");
const inputEl2 = document.querySelector(".js-input2");

iconBtn1.addEventListener("click", () => {
  item1.src = "../audio/Hello.mp3";
});

iconBtn2.addEventListener("click", () => {
  item2.src = "../audio/Hi.mp3";
});

formSubmit.addEventListener("submit", onFormSubmit);
inputEl.addEventListener("input", onInput);
inputEl2.addEventListener("input", onInput2);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  console.log(formElements);

  // const formData = new FormData(e.currentTarget);
  // console.log(formData);

  const hello = formElements.hello.value;
  const hi = formElements.hi.value;

  if (hello === "Hello ✔️" && hi === "Hi ✔️") {
    // item3.src = "../audio/Правильна відповідь.mp3";
    onAudioSuccess();
    // inputEl.value = `${inputEl.value} ✔️`;
    // inputEl2.value = `${inputEl2.value} ✔️`;
    success.innerHTML =
      "✔️ Правільна відповідь <br/>Будь ласка перeходьте до уроку 2";
    item01.classList.add("gray2");
  } else if (hello === "Hello ✔️") {
    onAudioError();
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl2.value = `${inputEl2.value} ❌`;
    onSmileyError(inputEl2);
    success.textContent = "❌ Не правильна відповідь";
  } else if (hi === "Hi ✔️") {
    onAudioError();
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl.value = `${inputEl.value} ❌`;
    onSmileyError(inputEl);
    success.textContent = "❌ Не правильна відповідь";
  } else {
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl.value = `${inputEl.value} ❌`;
    // inputEl2.value = `${inputEl2.value} ❌`;
    onSmileyError(inputEl);
    onSmileyError(inputEl2);
    onAudioError();
    // success.textContent = "❌ Не правильна відповідь";
  }
}

const onAudioSuccess = () => {
  item3.src = "../audio/Правильна відповідь.mp3";
};

const onAudioError = () => {
  item3.src = "../audio/Відповідь не правиль.mp3";
};

function onInput(event) {
  if ((inputEl.textContent = event.currentTarget.value === "Hello")) {
    // formSubmit.reset();
    // inputEl.value = `${inputEl.value} ✔️`;
    onSmileySuccess(inputEl);
  }
}

function onInput2(event) {
  if ((inputEl2.textContent = event.currentTarget.value === "Hi")) {
    // inputEl2.value = `${inputEl2.value} ✔️`;
    onSmileySuccess(inputEl2);
  }
}

const onSmileySuccess = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

//   if (hello === "Hello" && hi === "Hi") {
//     success.textContent = "✔️ Правільна відповідь";
//     item3.src = "../audio/Правильна відповідь.mp3";
//     // formSubmit.reset();
//     inputEl.value = `${inputEl.value} ✔️`;
//     inputEl2.value = `${inputEl2.value} ✔️`;

//     // item01.classList.add("gray");
//     item01.classList.add("gray2");
//   } else {
//     success.textContent = "❌😈 Не правильна відповідь";
//     item3.src = "../audio/Відповідь не правиль.mp3";
//     // formSubmit.reset();

//     inputEl.value = `${inputEl.value} ❌`;
//     inputEl2.value = `${inputEl2.value} ❌`;
//   }
// }
