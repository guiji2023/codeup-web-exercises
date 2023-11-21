export const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const options = {
    method: "GET",
    Headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getPokemonAll = async (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const options = {
    method: "GET",
    Headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(url, options);
    let list = await response.json();
    list.results = await Promise.all(
      list.results.map((item) => getPokemon(item.name))
    );
    return list;
  } catch (err) {
    return err;
  }
};
