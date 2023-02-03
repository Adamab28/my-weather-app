let currentDate = document.querySelector("#date");
let currentTime = new Date();
let date = currentTime.getDate();
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let month = currentTime.getMonth();

let days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0 ${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0 ${minutes}`;
}

currentDate.innerHTML = `${days[day]} ${date} ${months[month]}, ${hours}:${minutes}`;

//search bar

function searchCityname(cityName) {
  let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&apid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

function searchLocation(position) {
  let apikey = "47c9e98931d04f7eee8a997938080cf4";
  let latitude = "position.coords.latitude";
  let longitude = "position.coords.longitude";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}";

  axios.get(apiUrl).then(displayTemperature);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

//weather Api

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#currenttemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
