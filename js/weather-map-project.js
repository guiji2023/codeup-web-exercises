import { getCoordinates, createMap, getAddressCity } from "./api/mapBoxAPI.js";
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
  let date = time.getMonth() + 1 + "-" + time.getDate();
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

const createMarker = (coordinates, map) => {
  const marker = new mapboxgl.Marker({ draggable: true })
    .setLngLat(coordinates)
    .addTo(map);

  return marker;
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

const handleDragEnd = async (e, map) => {
  const lng = e.target._lngLat.lng;
  const lat = e.target._lngLat.lat;
  // make the map fly to the new dragged location
  map.flyTo({
    center: [lng, lat],
    zoom: 12,
    speed: 0.5,
  });

  const data = await getForcast([lat, lng]);
  const forecasts = refineData(data);
  renderCards(forecasts);
};

const updateCity = async (lng, lat) => {
  const data = await getAddressCity(lng, lat);
  const city =
    data.features[2].context[0].text + ", " + data.features[2].context[2].text;

  const cityDOM = document.querySelector(".city");
  cityDOM.innerHTML = "";
  cityDOM.innerHTML = `${city}`;
};

(async () => {
  // my default city
  const [mylng, mylat] = [-71.7140618, 42.2809127];
  await updateCity(mylng, mylat);
  const map = await createMap([mylng, mylat]);
  const marker = createMarker([mylng, mylat], map);

  // handle map actions

  const data = await getForcast(mylat, mylng);
  const forecasts = refineData(data);
  renderCards(forecasts);
  marker.on("dragend", async (e) => {
    updateCity(e.target._lngLat.lng, e.target._lngLat.lat);
    handleDragEnd(e, map);
  });

  const userInput = document.querySelector("input");
  userInput.addEventListener("change", async (e) => {
    //get coordinates and create map
    const address = e.target.value;
    let coords = await getCoordinates(address);
    await updateCity(coords[0], coords[1]);
    const map = await createMap(coords);
    const marker = createMarker(coords, map);

    //create forecast
    let [a, b] = coords;
    const newCoords = [b, a];
    const data = await getForcast(newCoords);
    const forecasts = refineData(data);
    renderCards(forecasts);

    //drag marker
    marker.on("dragend", async (e) => {
      updateCity(e.target._lngLat.lng, e.target._lngLat.lat);
      handleDragEnd(e, map);
    });
  });
})();
