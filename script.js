const apikey = "39e6ebb9476e7d0b380f824f963b5e19";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weathericon");
const weatherdata = document.querySelector(".weather");

async function checkweather(city) {
  const res = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await res.json();
  if(res.status==404 || res.status==400){
    alert('Check spelling')
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  if (data.weather[0].main == "Clouds") {
    weather_icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_icon.src = "images/mist.png";
  }
  weatherdata.style.display = "block";
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
searchbox.addEventListener("keyup", (enter) => {
  if (enter.key === "Enter") checkweather(searchbox.value);
});
