import { keys } from "./keys.js";

const restaurants = [
  {
    name: "Sachi Japanese Steakhouse",
    location: "200 Union Street, Suite B106, Westborough, MA, 01545",
    website: "https://www.sachisteakhouse.com/",
  },
  {
    name: "Sawa Hibachi",
    location: "551 Boston Turnpike Route 9, Shrewsbury, MA 01545, USA",
    website: "https://sawahibachima.com/",
  },
  {
    name: "Sake Hana",
    location: "21 South Street, Westborough, MA 01581",
    website: "https://sakehanawestborough.com/",
  },
];

const createMap = (coordinates) => {
  mapboxgl.accessToken = keys.mapbox;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  return map;
};

const getCoordinates = async (searchText) => {
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

(async () => {
  const address1 = "200 Union St, B106, Westborough, MA, 01545";
  const coordinates1 = await getCoordinates(address1);

  mapboxgl.accessToken = keys.mapbox;

  const map = createMap(coordinates1);
  map.flyTo({
    center: coordinates1,
    zoom: 12,
    speed: 0.5,
  });

  restaurants.forEach(async (restaurant) => {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    }).setHTML(`<p> ${restaurant.name}</p>`);
    const marker = new mapboxgl.Marker()
      .setLngLat(await getCoordinates(restaurant.location))
      .addTo(map)
      .setPopup(popup);

    marker.getElement().addEventListener("mouseenter", function () {
      popup.addTo(map);
    });

    // Hide the popup on mouseleave
    marker.getElement().addEventListener("mouseleave", function () {
      popup.remove();
    });
  });
})();
