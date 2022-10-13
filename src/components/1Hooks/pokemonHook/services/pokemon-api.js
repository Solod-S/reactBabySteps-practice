

function fetchPokemonHook(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchPokemonHook,
};

export default api;
