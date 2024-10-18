const hamBurger = document.querySelector("#toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const API_key = "3202733382d330bcddb8adb5f4574f52";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Colombo, BR&appid=${API_key}&units=metric&lang=pt_br`;
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);

    document.getElementById("city").innerHTML = `${data.name}, ${data.sys.country}`;

    const image_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").src = image_url;
    document.getElementById("temp").innerHTML = `${data.main.temp}`;
    document.getElementById("weather-description").innerHTML = `${data.weather[0].description}`;
    document.getElementById("temp-min").innerHTML = `${data.main.temp_min}`;
    document.getElementById("temp-max").innerHTML = `${data.main.temp_max}`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("speed").innerHTML = `${data.wind.speed}`;
    document.getElementById("clouds").innerHTML = `${data.clouds.all}`;

    lat = data.coord.lat;
    lon = data.coord.lon;

    theMap.redirectMap(lat, lon);
  })
  .catch(function (error) {
    console.log(error);
  });

var map = L.map('map').setView([-25.32677857762768, -49.218576575247575], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-25.32677857762768, -49.218576575247575]).addTo(map);
