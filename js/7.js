const fnA = function (message, callback) {
  console.log(message);
  callback(100);
};

const fnB = function (number) {
  console.log(number);
};

fnA("fdfdfdfdfd", fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(10, 8, sub);

const onReguestSuccess = function (response) {
  console.log(response);
};

fetch("../data/1.json")
  .then((res) => res.json())
  .then(onReguestSuccess);
