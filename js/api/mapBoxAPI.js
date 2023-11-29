import { keys } from "../keys.js";

/**
 *
 * @param {string} searchText user input for searching address
 * @returns {array} array of coordinates as [lat,lng]
 */
export const getCoordinates = async (searchText) => {
  // convert searchText to url format
  searchText = encodeURIComponent(searchText);

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data.features[0].center;
};

/**
 *
 * @param {arary} coordinates - array of numbers corresponding to [lat,lng];
 * @returns {map} - map is an instance of Map object
 */
export const createMap = (coordinates) => {
  mapboxgl.accessToken = keys.mapbox;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  map.flyTo({
    center: coordinates,
    zoom: 12,
    speed: 0.5,
  });

  const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

  return map;
};
