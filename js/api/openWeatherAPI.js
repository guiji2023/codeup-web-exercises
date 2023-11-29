import { keys } from "../keys.js";
/**
 *
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {Promise} Promise resolved to data
 */
export const getForcast = async (lat, lng) => {
  if (Array.isArray(lat)) {
    lng = lat[1];
    lat = lat[0];
  }
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openWeather}`;
  const options = {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
