let cities = ["Москве", "Санкт-Петербурге", "Перми", "Казани"];
let temperaturs = [];

let Moscow = document.getElementById("Moscow");
let StPetersburg = document.getElementById("StPetersburg");
let Perm = document.getElementById("Perm");
let Kazan = document.getElementById("Kazan");

let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt("Введите температуру в " + cities[i], '');
    temperaturs.push(temperature);
}

let temperatureInMoscow = Number(temperaturs[0]);
Moscow.textContent = " " + temperatureInMoscow + " ℃";

let temperatureInStPetersburg = Number(temperaturs[1]);
StPetersburg.textContent = " " + temperatureInStPetersburg + " ℃";

let temperatureInPerm = Number(temperaturs[2]);
Perm.textContent = " " + temperatureInPerm + " ℃";

let temperatureInKazan = Number(temperaturs[3]);
Kazan.textContent = " " + temperatureInKazan + " ℃";

let maxTemperatures = Math.max(...temperaturs);
maxTemp.textContent = " " + maxTemperatures + " ℃";

let minTemperatures = Math.min(...temperaturs);
minTemp.textContent = " " + minTemperatures + " ℃";