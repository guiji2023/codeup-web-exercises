import { keys } from "./keys.js";

const getCoordinates = async (searchText) => {
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

const getAddress = async (lng, lat) => {
  // just in case the input argument is an array of [lng, lat];
  if (Array.isArray(lng)) {
    lat = lng[1];
    lng = lng[0];
  }
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();

  return data.features[0].place_name;
};

const handleDragEnd = async (e, map) => {
  const lng = e.target._lngLat.lng;
  const lat = e.target._lngLat.lat;
  // make the map fly to the new dragged location
  map.flyTo({
    center: [lng, lat],
    zoom: 16,
    speed: 0.5,
  });
  const address = await getAddress(lng, lat);
  console.log(address);
};

(async () => {
  const coordinates = await getCoordinates(
    "1 Turning Leaf Circle, Shrewsbury, MA, 01545"
  );

  mapboxgl.accessToken = keys.mapbox;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/outdoors-v12", // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
    Keyboard: true,
  });

  map.flyTo({
    center: coordinates,
    zoom: 16,
    speed: 0.5,
  });

  const popup = new mapboxgl.Popup().setHTML(
    "<p> We don't live here anymore.<p>"
  );
  const marker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat(coordinates)
    .addTo(map)
    .setPopup(popup);
  marker.on("dragend", (e) => {
    handleDragEnd(e, map);
  });
})();
