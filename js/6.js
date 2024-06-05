// оерация rest
const numbers = [...[1, 2, 3], ...[4, 5, 6]];
console.log(numbers);

const temps = [1, 2, 3, 4, 5, 6, 7];

console.log(Math.max(...temps));

const a = [1, 2, 3];
const b = [...a];
console.log(b);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

// расспыление обьекта
const a1 = { x: 1, y: 2 };
const b1 = { x: 0, z: 5 };

const c = {
  ...a1,
  ...b1,
};

console.log(c);

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  theme: "Dark",
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);

// операция деструктуризация обьекта
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};

// тут создались локальные переменные
const { name, rating, tracks, trackCount } = playlist;
console.log(name, rating, tracks, trackCount);

const authors = {
  kiwi: 4,
  poly: 10,
  ajax: 8,
  mango: 6,
};

const entries = Object.entries(authors);
console.log(entries);
for (const [name, rating] of entries) {
  console.log(name, rating);
}

// const profile = {
//   name1: "Jacgues Gluke ",
//   tag: "Jgluke",
//   location: "Ocho Rios",
//   starts: {
//     followers: 56001,
//     likes: 1308,
//   },
// };

// const { name1, ...restProps } = profile;
// console.log(name1);
// console.log(restProps);

// // обьект настроек
// const showProfileInfo = function (userProfile) {
//   const { nqmes1, tag, location, ...restProps } = profile;
// };
// showProfileInfo(profile);

const profile = {
  name1: "Jacgues Gluke ",
  tag: "Jgluke",
  location: "Ocho Rios",
  starts: {
    followers: 56001,
    likes: 1308,
  },
};
const profile2 = {
  name1: "Jacgues Gluke ",
  tag: "Jgluke",
  location: "Ocho Rios",
  starts: {
    followers: 56001,
    likes: 1308,
  },
};

const showProfileInfo = function (useProfile) {
  const {
    name1,
    tag,
    location,
    starts: { followers, likes },
  } = profile;

  return `<h1>${name1}</h1>
  <p>${tag}</p>
  <h2>${location}</h2>
  <p>${followers}</p>
  <p>${likes}</p>`;
};

const markup = showProfileInfo(profile);
const markup2 = showProfileInfo(profile2);

document.body.insertAdjacentHTML("afterbegin", markup);
document.body.insertAdjacentHTML("afterbegin", markup2);
