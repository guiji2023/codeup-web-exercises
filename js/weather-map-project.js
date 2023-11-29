import { getCoordinates, createMap } from "./api/mapBoxAPI.js";
import { getForcast } from "./api/openWeatherAPI.js";

const convertTMtoDay = (dt) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let time = new Date(dt * 1000);
  let date = time.getMonth() + "-" + time.getDate();
  let day = daysOfWeek[time.getDay()];
  return [date, day];
};

const refineData = (data) => {
  let forecasts = [];
  for (let i = 0; i < 5; i++) {
    const dayforecast = {};
    dayforecast.date = convertTMtoDay(data.daily[i].dt)[0];
    dayforecast.day = convertTMtoDay(data.daily[i].dt)[1];
    dayforecast.weather = data.daily[i].weather[0].main;
    let icon = data.daily[i].weather[0].icon;
    dayforecast.weatherIMG = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
    dayforecast.low = data.daily[i].temp.min;
    dayforecast.high = data.daily[i].temp.max;
    forecasts.push(dayforecast);
  }
  return forecasts;
};

const updateAddress = async (e) => {
  const address = e.target.value;
  const coords = await getCoordinates(address);
  await createMap(coords);
  return coords;
};

const renderCard = (forecast) => {
  const newForecast = document.createElement("div");
  newForecast.classList.add("forecast");
  newForecast.innerHTML = `
    <h3>${forecast.date}</h3>
    <h3>${forecast.day}</h3>
    <img src="${forecast.weatherIMG}" alt="" />
    <h3>${forecast.weather}</h3>
    <h2>
      <span class="low">${forecast.low}&#8451</span> ~ <span class="hight">${forecast.high}&#8451</span>
    </h2>
  `;
  return newForecast;
};

const renderCards = (forecasts) => {
  const forecastContainer = document.querySelector(".forecastContainer");
  forecastContainer.innerHTML = ``;
  forecasts.forEach((forecast) => {
    forecastContainer.appendChild(renderCard(forecast));
  });
};

(async () => {
  // const [lng, lat] = await getCoordinates(address);
  // await createMap([lng, lat]);
  // // const reports = await getForcast(lat, lng);
  // // console.log(reports);

  //get user input
  const userInput = document.querySelector("input");
  userInput.addEventListener("change", async (e) => {
    //get coordinates and create map
    let coords = await updateAddress(e);
    let [a, b] = coords;
    const newCoords = [b, a];
    const data = await getForcast(newCoords);
    const forecasts = refineData(data);
    console.log(forecasts);
    renderCards(forecasts);
  });
})();
