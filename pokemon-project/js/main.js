//postman shows it needs an id
import { getPokemon, getPokemonAll } from "./pokemon-api.js";

(async () => {
  const list = await getPokemonAll();
})();
