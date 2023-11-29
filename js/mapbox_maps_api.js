import { getCoordinates, createMap } from "./api/mapBoxAPI.js";

(async () => {
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

  const address1 = restaurants[0].location;
  const coordinates1 = await getCoordinates(address1);

  const map = createMap(coordinates1);

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
