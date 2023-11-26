let newTemp = Math.floor(Math.random() * 40);
//console.log(newTemp);

const weatherTypes = ["sunny", "windy", "raining", "cloudy"];

let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
console.log(newWeatherIndex);

const str1 = "matoba";
const str2 = [...str1];

console.log(str2);
