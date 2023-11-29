import { getForcast } from "./api/openWeatherAPI.js";

(async () => {
  const sanAntonioForcast = await getForcast(29.4569554, -99.172417);
  console.log(sanAntonioForcast);
})();
