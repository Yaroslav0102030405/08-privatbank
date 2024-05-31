// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.trackCount);
// console.log((playlist.www = 10));

// console.log(playlist);

// const propertyName = "tracks";

// console.log(playlist[propertyName]);

// console.log(playlist);
const userName = "Mango";
const email = "manfo@gmail.com";

// короткая запись свойств
const signupData = {
  userName,
  email,
};

console.log(signupData);

// Вычисляемые свойства
const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("Обновленное имя");
// playlist.addTrack("трек-4");
// playlist.updateRating(4);
// console.log(playlist.getTrackCount());

// console.log(playlist);

// const feedback = {
//   good: 5,
//   neutral: 7,
//   bad: 3,
// };

// let totalfeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalfeedback += feedback[key];
// }

// console.log(totalfeedback);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);
// }

// const entries = Object.entries(feedback);
// console.log(entries);

// for (const entrie of entries) {
//   console.log(entrie);
// }

const friends = [
  { name: "Mango", online: false },
  { name: "Poly", online: true },
  { name: "Kiwi", online: true },
  { name: "Ajax", online: false },
];

// console.log(friends);
// for (const friend of friends) {
//   console.log(friend);
//   console.log(friend.name);
//   console.log(friend.online);
// }

// const userName1 = "Poly";

// const findFriendsByName = function (allFriends, friendName) {
//   for (const allFriend of allFriends) {
//     console.log(allFriend.name);
//     if (allFriend.name === friendName) {
//       return `Пользователь ${friendName} найден`;
//     }
//   }

//   return `Пользователь ${friendName} не найден`;
// };

// console.log(findFriendsByName(friends, userName1));

const findFriendsByName = function (allFriends) {
  const friendByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    // console.log(allFriend.name);
    if (friend.online) {
      friendByStatus.online.push(friend);
    } else {
      friendByStatus.offline.push(friend);
    }
  }
  return friendByStatus;
};

console.log(findFriendsByName(friends));
