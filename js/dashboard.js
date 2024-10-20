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

var map = L.map('map', {
  center: [-25.32677857762768, -49.218576575247575], // São Paulo
  zoom: 10,
  zoomControl: true, // Desativa o controle de zoom
  dragging: false, // Desativa arrastar o mapa
  scrollWheelZoom: false, // Desativa o zoom com a roda do mouse
  doubleClickZoom: false, // Desativa o zoom ao dar duplo clique
  boxZoom: false, // Desativa o zoom por seleção de caixa
  keyboard: false // Desativa interações pelo teclado
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 19
  // ,attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">CartoCDN</a>'
}).addTo(map);

var bootstrapIcon = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" class="shadow" fill="currentColor" style="color: #f8ad09;" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>`,  // ícone Bootstrap (geo-fill)
  className: '', // Remove as classes padrão para personalizar totalmente
  iconSize: [35, 35], // Tamanho do ícone
  iconAnchor: [16, 32], // Âncora do ícone (ponto inferior)
  popupAnchor: [0, -32]  // Âncora do popup
});

var marker = L.marker([-25.32677857762768, -49.218576575247575], { icon: bootstrapIcon }).addTo(map);

