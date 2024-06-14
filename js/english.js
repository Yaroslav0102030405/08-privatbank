const refs = {
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn2: document.querySelector(".btn-icon2"),
  item1: document.querySelector(".audio-hello"),
  item2: document.querySelector(".audio-hi"),
  item3: document.querySelector(".audio-answer"),
  formSubmit: document.querySelector(".js-form"),
  btnSubmit: document.querySelector(".submit"),
  dataHello: document.querySelector('[data-hello="hello"]'),
  dataHi: document.querySelector('[data-hi="hi"]'),
  success: document.querySelector(".success"),
  item01: document.querySelector(".item-01"),
  inputEl: document.querySelector(".js-input"),
  inputEl2: document.querySelector(".js-input2"),
};

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
// const item01 = document.querySelector(".item-01");
// const inputEl = document.querySelector(".js-input");
// const inputEl2 = document.querySelector(".js-input2");

refs.iconBtn1.addEventListener("click", () => {
  refs.item1.src = "../audio/Hello.mp3";
});

refs.iconBtn2.addEventListener("click", () => {
  refs.item2.src = "../audio/Hi.mp3";
});

refs.formSubmit.addEventListener("submit", onFormSubmit);
refs.inputEl.addEventListener("input", onInput);
refs.inputEl2.addEventListener("input", onInput2);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  console.log(formElements);

  // const formData = new FormData(e.currentTarget);
  // console.log(formData);

  const hello = formElements.hello.value;
  const hi = formElements.hi.value;

  if (
    (hello === "Hello ✔️" && hi === "Hi ✔️") ||
    (hello === "hello ✔️" && hi === "hi ✔️")
  ) {
    // item3.src = "../audio/Правильна відповідь.mp3";
    onAudioSuccess();
    // inputEl.value = `${inputEl.value} ✔️`;
    // inputEl2.value = `${inputEl2.value} ✔️`;
    refs.success.innerHTML =
      "✔️ Правільна відповідь <br/>Будь ласка перeходьте <br /> до уроку 2";
    refs.item01.classList.add("gray2");
  } else if (hello === "Hello ✔️") {
    onAudioError();
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl2.value = `${inputEl2.value} ❌`;
    onSmileyError(refs.inputEl2);
    refs.success.textContent = "❌ Не правильна відповідь";
  } else if (hi === "Hi ✔️") {
    onAudioError();
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl.value = `${inputEl.value} ❌`;
    onSmileyError(refs.inputEl);
    refs.success.textContent = "❌ Не правильна відповідь";
  } else {
    // item3.src = "../audio/Відповідь не правиль.mp3";
    // inputEl.value = `${inputEl.value} ❌`;
    // inputEl2.value = `${inputEl2.value} ❌`;
    onSmileyError(refs.inputEl);
    onSmileyError(refs.inputEl2);
    onAudioError();
    refs.success.textContent = "❌ Не правильна відповідь";
  }
}

const onAudioSuccess = () => {
  refs.item3.src = "../audio/Правильна відповідь.mp3";
};

const onAudioError = () => {
  refs.item3.src = "../audio/Відповідь не правиль.mp3";
};

function onInput(event) {
  if (
    event.currentTarget.value === "Hello" ||
    event.currentTarget.value === "hello"
  ) {
    // formSubmit.reset();
    // inputEl.value = `${inputEl.value} ✔️`;
    onSmileySuccess(refs.inputEl);
  }
}

function onInput2(event) {
  // refs.inputEl2.textContent = event.currentTarget.value === "Hi"
  if (
    event.currentTarget.value === "Hi" ||
    event.currentTarget.value === "hi"
  ) {
    // inputEl2.value = `${inputEl2.value} ✔️`;
    onSmileySuccess(refs.inputEl2);
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
